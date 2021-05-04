import xml2js from 'xml2js';

export default function () {
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