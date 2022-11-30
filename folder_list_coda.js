"use strict"

import alfy from "alfy";

const codaArr = {
	"url": "https://coda.io/apis/v1/docs/",
	"params": {
		"headers": {
			"Authorization": `Bearer ${process.env.api}`
		},
		"maxAge": 300000
	}
}

const results = await alfy.fetch(codaArr.url, codaArr.params)

const folders = results.items.map(result => [result.folder.name, result.folder.id])

const folderUnique = new Map([...folders
		.map(folder => [folder[0], folder[1]])
])

const items = [...folderUnique]
	.filter(item => typeof item[0] !== "undefined")
	.sort(([a], [b]) => a.localeCompare(b))
	.map(item => ({
			"title": item[0],
			"arg": item[1]
		}))

alfy.output(items) 