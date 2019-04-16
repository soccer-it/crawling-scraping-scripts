const puppeteer = require("puppeteer");
const fs = require("fs");

const siteUrl = "https://globoesporte.globo.com/futebol/brasileirao-serie-a/";
const scriptUrl =
  "https://soccer-it-crawling-scraping.mjnr.now.sh/output/campeonato-brasileiro-2019/teams.js";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(siteUrl);

  await page.addScriptTag({ url: scriptUrl });

  const data = await page.evaluate(() => window.getTeams());

  fs.writeFile("./data.json", JSON.stringify(data), err => {
    if (err) {
      console.error("[ Robot ] - Error on write scraper result");
    } else {
      console.log("[ Robot ] - Date written!");
    }
  });

  await browser.close();

  process.exit();
})();
