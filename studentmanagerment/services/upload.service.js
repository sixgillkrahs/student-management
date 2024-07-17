"use strict";
const DbService = require("../mixins/db.mixin");
const ApiGateway = require("moleculer-web");

module.exports = {
	name: "upload",
	mixins: [DbService("upload")],
	settings: {
		path: "/upload",

		routes: [
			{
				path: "",

				aliases: {
					// File upload from HTML multipart form
					"POST /": "multipart:file.save",

					// File upload from AJAX or cURL
					"PUT /:id": "stream:file.save",

					// File upload from HTML form and overwrite busboy config
					"POST /multi": {
						type: "multipart",
						// Action level busboy config
						busboyConfig: {
							limits: { files: 3 },
						},
						action: "file.save",
					},
				},

				// Route level busboy config.
				// More info: https://github.com/mscdex/busboy#busboy-methods
				busboyConfig: {
					limits: { files: 1 },
					// Can be defined limit event handlers
					// `onPartsLimit`, `onFilesLimit` or `onFieldsLimit`
				},

				// mappingPolicy: "restrict",
			},
		],
	},
};
