import http from 'k6/http';
import { check, sleep } from 'k6';
import cheerio from 'cheerio';
import { randomIntBetween, randomItem } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";


export default function () {
  const res = http.get('https://loadimpact.com/');
  const $ = cheerio.load(res.body);
  console.log(randomItem([1,2,3,4]));
  sleep(randomIntBetween(1,5)); // sleep between 1 and 5 seconds

  const title = $('head title').text();
  check(title, {
    'has correct title': () => title == 'Load Impact is now k6',
  });
  console.log(title);
}