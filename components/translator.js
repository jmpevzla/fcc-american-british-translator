const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  _replace(text, search, repl) {
    const regx = new RegExp(search, 'gi')
    //return text.replace(regx, `<span class="highlight">${repl}</span>`)
    return text.replace(regx, repl)
  }

  _test(text, search) {
    const ltext = text.toLowerCase()
    return (
    (
        ltext.includes(` ${search} `))
      || (ltext.includes(` ${search}.`))
      || (ltext.includes(`${search} `))
    )
  }

  _highlight(translateObj) {
    const { translate, changed } = translateObj
    let txt = translate

    for(let ch of changed) {
      txt = this._replace(txt, ch, `<span class="highlight">${ch}</span>`)
    }

    return txt
  }

  toBritishEnglish(text) {
    const changed = []
    let txt = String(text)

    for(let key in americanOnly) {
      if (this._test(txt, key)) {
        let value = americanOnly[key]
        txt = this._replace(txt, key, value)
        changed.push(value)
      }
    }
    
    for(let key in americanToBritishSpelling) {
      if (this._test(txt, key)) {
        let value = americanToBritishSpelling[key]
        txt = this._replace(txt, key, value)
        changed.push(value)
      }
    }

    for(let key in americanToBritishTitles) {
      if (this._test(txt, key)) {
        let value = americanToBritishTitles[key]
        const vUpper = value[0].toUpperCase() + value.slice(1)
        txt = this._replace(txt, key, vUpper)
        changed.push(vUpper)
      }
    }

    const timeRegexp = /\d\d?:\d\d/
    if (timeRegexp.test(txt)) {
      const match = txt.match(timeRegexp)[0]
      const rep = match.replace(':', '.')
      txt = this._replace(txt, match, rep)
      changed.push(rep)
    }
    
    return {
      translate: txt,
      changed
    }
  }

  highlightBritishEnglish(text) {
    const to = this.toBritishEnglish(text)
    return this._highlight(to)
  }

  toAmericanEnglish(text) {
    const changed = []
    let txt = String(text)

    for(let key in britishOnly) {
      if (this._test(txt, key)) {
        let value = britishOnly[key]
        txt = this._replace(txt, key, value)
        changed.push(value)
      }
    }

    for(let key in americanToBritishSpelling) {
      const value = americanToBritishSpelling[key]
      if (this._test(txt, value)) {
        txt = this._replace(txt, value, key)
        changed.push(key)
      }
    }

    for(let key in americanToBritishTitles) {
      const value = americanToBritishTitles[key]
      if (this._test(txt, value)) {
        const kUpper = key[0].toUpperCase() + key.slice(1)
        txt = this._replace(txt, value, kUpper)
        changed.push(kUpper)
      }
    }

    const timeRegexp = /\d\d?.\d\d/
    if (timeRegexp.test(txt)) {
      const match = txt.match(timeRegexp)[0]
      const rep = match.replace('.', ':')
      txt = this._replace(txt, match, rep)
      changed.push(rep)
    }

    return {
      translate: txt,
      changed
    }
  }

  highlightAmericanEnglish(text) {
    const to = this.toAmericanEnglish(text)
    return this._highlight(to)
  }
}

module.exports = Translator;