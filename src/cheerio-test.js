import http from 'k6/http';
import { check } from 'k6';
import cheerio from 'cheerio';

export default function () {
  const res = http.get('https://loadimpact.com/');
  const $ = cheerio.load(res.body);

  const title = $('head title').text();
  check(title, {
    'has correct title': () => title == 'Load Impact is now k6',
  });
  console.log(title);
}