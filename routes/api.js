"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;

    if (typeof text === "undefined" || typeof locale === "undefined") {
      return res.json({ error: "Required field(s) missing" });
    }

    if (text === "") {
      return res.json({ error: "No text to translate" });
    }

    let translation
    switch (locale) {
      case "american-to-british":
        translation = translator.highlightBritishEnglish(text);
        break;
      case "british-to-american":
        translation = translator.highlightAmericanEnglish(text);
        break;
      default:
        return res.json({ error: "Invalid value for locale field" });
    }

    translation = translation == text ? 'Everything looks good to me!' : translation;
    return res.json({
      text,
      translation
    });
  });
};
