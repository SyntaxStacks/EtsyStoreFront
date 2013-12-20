var request = require('request');
var XMLParse = require('xml2js');
var dash = require('lodash');
/*
 * Serve JSON to our AngularJS client
 */

exports.loadshop = function (req, res) {
  var body = req.body;
	var shop = body.shopUrl;

	var options = {
		uri: shop,
		method: 'GET'
	}

	request(options, function(err, response, body) {
		var parseString = XMLParse.parseString;
		parseString(body, function (err, result) {
			result = result.rss.channel[0];
			var shopObject = {
				title: result.title,
				pageUrl: result.link,
				description: result.description,
				items: result.item
			};

			console.log(result);
			res.json(shopObject);
		});
	});
};
