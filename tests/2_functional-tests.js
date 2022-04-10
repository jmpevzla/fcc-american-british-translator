const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  test("Translation with text and locale fields: POST request to /api/translate", function (done) {
    this.timeout(5000);

    const dataBritish = {
      text: "Mangoes are my favorite fruit.",
      locale: "american-to-british",
    };

    const dataAmerican = {
      text: "We watched the footie match for a while.",
      locale: "british-to-american",
    };

    chai
      .request(server)
      .post("/api/translate")
      .send(dataBritish)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response should be an object");
        assert.property(res.body, "text", "response should contain text");
        assert.property(
          res.body,
          "translation",
          "response should contains translation"
        );
        assert.equal(
          res.body.text,
          dataBritish.text,
          `response should be ${dataBritish.text}`
        );
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favourite</span> fruit.',
          'response should be "Mangoes are my <span class="highlight">favourite</span> fruit."'
        );

        chai
          .request(server)
          .post("/api/translate")
          .send(dataAmerican)
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.isObject(res.body, "response should be an object");
            assert.property(res.body, "text", "response should contain text");
            assert.property(
              res.body,
              "translation",
              "response should contains translation"
            );
            assert.equal(
              res.body.text,
              dataAmerican.text,
              `response should be ${dataAmerican.text}`
            );
            assert.equal(
              res.body.translation,
              'We watched the <span class="highlight">soccer</span> match for a while.',
              'response should be "We watched the <span class="highlight">soccer</span> match for a while."'
            );
            done();
          });
      });
  });

  test("Translation with text and invalid locale field: POST request to /api/translate", function (done) {
    const dataBritish = {
      text: "Mangoes are my favorite fruit.",
      locale: "unknown",
    };

    chai
      .request(server)
      .post("/api/translate")
      .send(dataBritish)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response should be an object");
        assert.property(res.body, "error", "response should contain error");
        assert.equal(
          res.body.error,
          "Invalid value for locale field",
          `response error should be "Invalid value for locale field"`
        );
        done();
      });
  });

  test("Translation with missing text field: POST request to /api/translate", function (done) {
    const dataBritish = {
      locale: "american-to-british",
    };

    chai
      .request(server)
      .post("/api/translate")
      .send(dataBritish)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response should be an object");
        assert.property(res.body, "error", "response should contain error");
        assert.equal(
          res.body.error,
          "Required field(s) missing",
          `response error should be "Required field(s) missing"`
        );
        done();
      });
  });

  test("Translation with missing locale field: POST request to /api/translate", function (done) {
    const dataBritish = {
      text: "Mangoes are my favorite fruit.",
    };

    chai
      .request(server)
      .post("/api/translate")
      .send(dataBritish)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response should be an object");
        assert.property(res.body, "error", "response should contain error");
        assert.equal(
          res.body.error,
          "Required field(s) missing",
          `response error should be "Required field(s) missing"`
        );
        done();
      });
  });

  test("Translation with empty text: POST request to /api/translate", function (done) {
    const dataBritish = {
      text: "",
      locale: "american-to-british",
    };

    chai
      .request(server)
      .post("/api/translate")
      .send(dataBritish)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response should be an object");
        assert.property(res.body, "error", "response should contain error");
        assert.equal(
          res.body.error,
          "No text to translate",
          `response error should be "No text to translate"`
        );
        done();
      });
  });

  test("Translation with text that needs no translation: POST request to /api/translate", function (done) {
    const dataBritish = {
      text: "We watched the footie match for a while.",
      locale: "american-to-british",
    };

    chai
      .request(server)
      .post("/api/translate")
      .send(dataBritish)
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, "response should be an object");
        assert.property(res.body, 'text', `response should contain text`)
        assert.property(res.body, "translation", `response should contain translation`);
        assert.equal(res.body.text, dataBritish.text, `response text should be ${dataBritish.text}`)
        assert.equal(res.body.translation, "Everything looks good to me!", `response translation should be "Everything looks good to me!"`);
        
        done();
      });
  });
});
