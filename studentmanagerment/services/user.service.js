"use strict";
require("dotenv").config();
const DbService = require("../mixins/db.mixin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
	name: "users",
	mixins: [DbService("users")],
	settings: {
		rest: "/users",
		JWT_SECRET: process.env.JWT_SECRET,
		fields: [
			"_id",
			"username",
			"password",
			"name",
			"subname",
			"numberphone",
			"role",
		],
		entityValidator: {
			username: { type: "string", min: 6 },
			password: { type: "string", min: 8 },
			name: { type: "string", min: 3 },
			subname: { type: "string", min: 3 },
			numberphone: { type: "string", min: 10, max: 10 },
			role: { type: "string", enum: ["admin", "student"] },
		},
	},
	actions: {
		create: {
			// rest: "POST users",
			params: {
				username: { type: "string" },
				password: { type: "string" },
				name: { type: "string" },
				subname: { type: "string" },
				numberphone: { type: "string" },
				role: { type: "string", enum: ["admin", "student"] },
			},
			async handler(ctx) {
				const newUser = ctx.params;
				if (newUser.username) {
					let check = await this.adapter.findOne({
						username: newUser.username,
					});
					if (check) {
						throw Error("username existed");
					}
				}
				newUser.password = bcrypt.hashSync(newUser.password, 10);
				newUser.createAt = new Date();
				// input vào db
				const doc = await this.adapter.insert(newUser);
				const user = await this.transformDocuments(ctx, {}, doc);
				// commit với db
				await this.entityChanged("created", user, ctx);
				return { doc };
			},
		},

		login: {
			rest: "POST /login",
			params: {
				username: { type: "string" },
				password: { type: "string" },
			},
			async handler(ctx) {
				const { username, password } = ctx.params;
				const user = await this.adapter.findOne({
					username: username,
				});
				if (!user) {
					throw Error("username valid");
				}
				const match = bcrypt.compareSync(password, user.password);
				if (!match) {
					throw Error("password valid");
				}
				const data = {
					user: {
						id: user._id,
						username: username,
						role: user.role,
					},
				};
				const token = jwt.sign(data, process.env.JWT_SECRET);
				console.log(token);
				return {
					token: token,
					message: true,
				};
			},
		},
	},
};
