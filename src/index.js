import { chromium } from 'playwright-chromium'

(async() => {
    try {
        const text = 'Hello World'
        const from = 'en'
        const to = 'es'
        const targetDummyDiv = '#target-dummydiv'
    
        const urlText = text.replace(' ', '%20')
        const url = `https://deepl.com/es/translator#${from}/${to}/${urlText}`
    
        const browser = await chromium.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto(url)
        
        let translatedText = '\r\n'
        while(translatedText === '\r\n') {
            translatedText = await page.textContent(targetDummyDiv)
        }
    
        await browser.close()
        const translation = translatedText.replace('\r\n', '')
        console.log(translation)
    } catch(error) {
        console.log(error)
    }
})()