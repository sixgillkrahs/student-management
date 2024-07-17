"use strict";

const DbService = require("../mixins/db.mixin");

//moleculer sẽ gôm hết cả URL querystring, request params & request body rồi nhét vào ctx.params
// để tắt đi mergeParams: false trong settings.routes.mergeRarams = false

module.exports = {
	name: "faculty",
	mixins: [DbService("faculty")],
	settings: {
		rest: "/faculty",
		fields: ["_id", "code", "name"],
		entityValidator: {
			code: { type: "string", min: 3, unique: true },
			name: { type: "string", min: 4 },
		},
	},
	actions: {
		// getall: {
		// 	rest: "GET faculty",
		// 	params: {
		// 		code: { type: "string" },
		// 		name: { type: "string" },
		// 	},
		//     async handle
		// },
		create: {
			// rest :""
			params: {
				code: { type: "string" },
				name: { type: "string" },
			},
			async handler(ctx) {
				const { code, name } = ctx.params;
				if (!code) {
					throw Error("");
				}
				const found = await this.adapter.findOne({
					code: code,
				});
				if (found) {
					throw Error("Đã có trong db");
				}
				const docs = await this.adapter.insert({
					code: code,
					name: name,
				});
				const data = await this.transformDocuments(ctx, {}, docs);
				await this.entityChanged("created", data, ctx);
				return { docs };
			},
		},
		update: {
			params: {
				id: { type: "string" },
				code: { type: "string" },
				name: { type: "string" },
			},
			async handler(ctx) {
				const { id, code, name } = ctx.params;
				const docs = await this.adapter.updateById(id, {
					$set: {
						code,
						name,
					},
				});
				const data = await this.transformDocuments(ctx, {}, [docs]);
				await this.entityChanged("updated", data, ctx);
				return { docs };
			},
		},
	},
};
