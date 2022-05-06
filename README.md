# DeepL Scraper

Playwright scraper for DeepL translator.

## Usage

POST request to the azure API:
  - `text`: The text to translate
  - `from` (optional): The language code to translate from, default value is `en`
  - `to` (optional): The language code to translate to, default value is `es`
  
```json
  {
    "text": "Hello world",
    "from": "en",
    "to": "de"
  }
```

Response:
  - `translation`: The translated text

```json
  {
    "translation": "Hallo welt"
  }
```

Allowed languages:
  - `de`: German
  - `bg`: Bulgarian
  - `cs`: Czech
  - `zh`: Chinese
  - `da`: Danish
  - `sk`: Slovak
  - `sl`: Slovenian
  - `es`: Spanish
  - `et`: Estonian
  - `fi`: Finnish
  - `fr`: French
  - `el`: Greek
  - `hu`: Hungarian
  - `en`: English
  - `it`: Italian
  - `ja`: Japanese
  - `lv`: Latvian
  - `lt`: Lithuanian
  - `nl`: Dutch
  - `pl`: Polish
  - `pt`: Portuguese
  - `ro`: Romanian
  - `ru`: Russian
  - `sv`: Swedish