import puppeteer from 'puppeteer';

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://learnnatively.com/search/jp/videos/');
};

main();
