const { chromium } = require('playwright-chromium')

module.exports = async function(ctx, req) {
    try {
        const { text, from = 'en', to = 'es' } = req.body
        const targetDummyDiv = '#target-dummydiv'

        const urlText = text.replace(' ', '%20')
        const url = `https://deepl.com/es/translator#${from}/${to}/${urlText}`

        const browser = await chromium.launch()
        const page = await browser.newPage()
        await page.goto(url)
        
        let translatedText = '\r\n'
        while(translatedText === '\r\n') {
            translatedText = await page.textContent(targetDummyDiv)
        }

        await browser.close()
        const translation = translatedText.replace('\r\n', '')
        ctx.res = {
            headers: { 'Content-Type': 'application/json' },
            body: { translation }
        }
    } catch(error) {
        ctx.res = {
            headers: { 'Content-Type': 'application/json' },
            body: { error }
        }
    }
}