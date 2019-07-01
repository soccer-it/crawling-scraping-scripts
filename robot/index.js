const puppeteer = require("puppeteer-core");
const getChrome = require("./getChrome");
const config = require("../config.js");

module.exports.handler = async (event, context, callback) => {
  const baseHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "access-control-allow-methods": "GET"
  };

  if (!event.queryStringParameters) {
    callback(null, {
      statusCode: 400,
      headers: baseHeaders,
      body: "Scraper is not defined"
    });
  }

  const scraper = event.queryStringParameters.scraper;

  const { siteUrl, scriptUrl } = config.scrapers[scraper];

  console.log("Scraping data ...");

  context.callbackWaitsForEmptyEventLoop = false;
  const chrome = await getChrome();

  const browser = await puppeteer.connect({
    browserWSEndpoint: chrome.endpoint
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

    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        ...baseHeaders
      },
      body: JSON.stringify(scraperData)
    });

    console.log("Done!", scraperData);

    await browser.close();

    return scraperData;
  } catch (err) {
    callback(e);
  }
};
