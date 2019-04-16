# Crawling and scraping

The idea of this repository is to have several projects where each project is a crawler that collects information for soccer-it.

\***A project can be developed in any language**\*.

## What information should I get?

Today there are 2 categories to scraping.

- championships
- teams

### Championships

- a description
- teams names
- teams city
- top scorer
- champions of all championship editions

### Teams

- list teams (in brazil is A and B serie)
- history
- team idols

### Using

```sh
# Example - It will build campeonato-brasileiro-2019 scraper, deploy it and start a puppeteer robot
SCRAPER=campeonato-brasileiro-2019 yarn run build
```
