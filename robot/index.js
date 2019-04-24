const puppeteer = require("puppeteer");
const fs = require("fs");
const config = require("../config.js");
const argv = require("minimist")(process.argv.slice(2));

const { scraper } = argv;

const { siteUrl, scriptUrl } = config.scrapers[scraper];

(async () => {
  console.log("Scraping data ...");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(siteUrl);

  await page.addScriptTag({ url: scriptUrl });

  const data = await page.evaluate(() => window.scrapeData());

  fs.writeFile(
    `./data_${scraper}_${new Date().getTime()}.json`,
    JSON.stringify(data),
    err => {
      if (err) {
        console.error("[ Robot ] - Error on write scraper result");
      } else {
        console.log("[ Robot ] - Date written!");
      }
    }
  );

  console.log("Done!");
  await browser.close();

  process.exit();
})();
