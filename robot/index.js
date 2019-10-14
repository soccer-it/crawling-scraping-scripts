const puppeteer = require("puppeteer");
const fs = require("fs");
const config = require("../config.js");

(async () => {
  const scraper = "campeonato-brasileiro-2019";

  const { siteUrl, scriptUrl } = config.scrapers[scraper];

  console.log("Scraping data ...");

  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    isMobile: true
  });

  await page.goto(siteUrl, {
    waitUntil: ["domcontentloaded", "networkidle2"]
  });

  await page.addScriptTag({ url: scriptUrl });

  try {
    const scraperData = await page.evaluate(() => window.scrapeData());

    fs.writeFileSync(
      `scraper_${scraper}_result_${new Date().getTime()}.json`,
      JSON.stringify(scraperData),
      "utf-8"
    );

    console.log("Done!", scraperData);

    await browser.close();

    return scraperData;
  } catch (err) {
    console.log("Error on scraping", err);
  }
})();
