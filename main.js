import http from 'k6/http';
import { check } from 'k6';
import cheerio from 'cheerio';
import xml2js from 'xml2js';

export default function () {
  const res = http.get('https://loadimpact.com/');

  const $ = cheerio.load(res.body);

  const title = $('head title').text();
  check(title, {
    'has correct title': () => title == 'Load Impact is now k6',
  });
  console.log(title);

  var xmlString =
    '<?xml version="1.0" ?>' +
    '<items xmlns="http://foo.com">' +
    ' <item>Foo</item>' +
    ' <item color="green">Bar</item>' +
    '</items>';

  xml2js.parseString(xmlString, function (err, result) {
    console.log(JSON.stringify(err));
    console.log(result);
    console.log(JSON.stringify(result));
  });
}
