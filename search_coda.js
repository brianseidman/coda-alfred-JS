"use strict"

import alfy from "alfy";

const codaArr = {
	"url": `https://coda.io/apis/v1/docs?limit=${process.env.doc_limit}`,
	"params": {
		"headers": {
			"Authorization": `Bearer ${process.env.api}`
		},
		"maxAge": 300000
	}
}

const result = await alfy.fetch(codaArr.url, codaArr.params)

const items = alfy
	.inputMatches(result.items, "name")
	.map(item => ({
			"title": item.name,
			"subtitle": `Last modified: ${new Date(item.updatedAt).toLocaleString()}`,
			"arg": item.browserLink
		}))

alfy.output(items)