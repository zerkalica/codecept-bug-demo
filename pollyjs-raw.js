const { Polly } = require('@pollyjs/core');
const PuppeteerAdapter = require('@pollyjs/adapter-puppeteer');
const puppeteer = require('puppeteer');

Polly.register(PuppeteerAdapter);

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  const polly = new Polly('test', {
    adapters: ['puppeteer'],
    adapterOptions: {
      puppeteer: {
        page,
        requestResourceTypes: [ 'xhr', 'fetch', 'image' ]
      }
    }
  });

  polly.connectTo('puppeteer');

  polly.server.any('/img/*')
    .intercept((req, res, interceptor) => {
      interceptor.abort();
    })

  await page.goto('https://codecept.io');
})();
