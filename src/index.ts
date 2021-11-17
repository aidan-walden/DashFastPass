import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer
    .use(StealthPlugin())
    .launch({ headless: true })
    .then(async browser => {
        const page = await browser.newPage();
        await page.goto('https://www.doordash.com');
        await page.screenshot({ path: 'example.png', fullPage: true });
        await browser.close(); 
    });