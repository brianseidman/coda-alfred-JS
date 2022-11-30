"use strict"

import alfy from "alfy"

const codaArr = {
	"url": "https://coda.io/apis/v1/docs/",
	"params": {
		"headers": {
			"Authorization": `Bearer ${process.env.api}`
		},
		"maxAge": 300000,
		"method": "POST",
		"json": {
			"title": process.env.title,
			"folderId": alfy.input
		}
	}
}

const result = await alfy.fetch(codaArr.url, codaArr.params)

console.log(result.browserLink)
