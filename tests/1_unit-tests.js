const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

  suite('to British English', function() {
    test('Translate "Mangoes are my favorite fruit." to British English', function () {
      const text = 'Mangoes are my favorite fruit.'
      const translator = new Translator()
      const { translate, changed } = translator.toBritishEnglish(text)
      
      assert.equal(translate, 
          'Mangoes are my favourite fruit.', 
          'translate should be "Mangoes are my favourite fruit."')
      
      const strChanged = changed.join(' ')
      assert.include(strChanged, 'favourite', 'changed should have "favourite"')
    })

    test('Translate "I ate yogurt for breakfast." to British English', function () {
      const text = 'I ate yogurt for breakfast.'
      const translator = new Translator()
      const { translate, changed } = translator.toBritishEnglish(text)

      assert.equal(translate, 
          'I ate yoghurt for breakfast.', 
          'response should be "I ate yoghurt for breakfast."')
      
      const strChanged = changed.join(' ')
      assert.include(strChanged, 'yoghurt', 'changed should have "yoghurt"')
    })

    test('Translate "We had a party at my friend\'s condo." to British English', function () {
      const text = "We had a party at my friend's condo."
      const translator = new Translator()
      const { translate, changed } = translator.toBritishEnglish(text)
      
      assert.equal(translate, 
          'We had a party at my friend\'s flat.', 
          'response should be "We had a party at my friend\'s flat."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'flat', 'changed should have "flat"')
    })

    test('Translate "Can you toss this in the trashcan for me?" to British English', function () {
      const text = "Can you toss this in the trashcan for me?"
      const translator = new Translator()
      const { translate, changed } = translator.toBritishEnglish(text)
      
      assert.equal(translate, 
          'Can you toss this in the bin for me?', 
          'response should be "Can you toss this in the bin for me?"')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'bin', 'changed should have "bin"')
    })

    test('Translate "The parking lot was full." to British English', function () {
      const text = "The parking lot was full."
      const translator = new Translator()
      const { translate, changed } = translator.toBritishEnglish(text)
      
      assert.equal(translate, 
          'The car park was full.', 
          'response should be "The car park was full."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'car park', 'changed should have "car park"')
    })

    test('Translate "Like a high tech Rube Goldberg machine." to British English', function () {
      const text = "Like a high tech Rube Goldberg machine."
      const translator = new Translator()
      const { translate, changed } = translator.toBritishEnglish(text)
      
      assert.equal(translate, 
          'Like a high tech Heath Robinson device.', 
          'response should be "Like a high tech Heath Robinson device."')
      
      const strChanged = changed.join(' ')
      assert.include(strChanged, 'Heath Robinson device', 'changed should have "Heath Robinson device"')
    })

    test('Translate "To play hooky means to skip class or work." to British English', function () {
      const text = "To play hooky means to skip class or work."
      const translator = new Translator()
      const { translate, changed } = translator.toBritishEnglish(text)
      
      assert.equal(translate, 
          'To bunk off means to skip class or work.', 
          'response should be "To bunk off means to skip class or work."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'bunk off', 'changed should have "bunk off"')
    })

    test('Translate "No Mr. Bond, I expect you to die." to British English', function () {
      const text = "No Mr. Bond, I expect you to die."
      const translator = new Translator()
      const { translate, changed } = translator.toBritishEnglish(text)
      
      assert.equal(translate, 
          'No Mr Bond, I expect you to die.', 
          'response should be "No Mr Bond, I expect you to die."')
      
      const strChanged = changed.join(' ')
      assert.include(strChanged, 'Mr', 'changed should have "Mr"')  
    })

    test('Translate "Dr. Grosh will see you now." to British English', function () {
      const text = "Dr. Grosh will see you now."
      const translator = new Translator()
      const { translate, changed } = translator.toBritishEnglish(text)
      
      assert.equal(translate, 
          'Dr Grosh will see you now.', 
          'response should be "Dr Grosh will see you now."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'Dr', 'changed should have "Dr"')  
    })

    test('Translate "Lunch is at 12:15 today." to British English', function () {
      const text = "Lunch is at 12:15 today."
      const translator = new Translator()
      const { translate, changed } = translator.toBritishEnglish(text)
      
      assert.equal(translate, 
          'Lunch is at 12.15 today.', 
          'response should be "Lunch is at 12.15 today."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, '12.15', 'changed should have "12.15"')  
    })
  })

  suite('to American English', function() {
    test('Translate "We watched the footie match for a while." to American English', function() {
      const text = "We watched the footie match for a while."
      const translator = new Translator()
      const { translate, changed } = translator.toAmericanEnglish(text)
      
      assert.equal(translate, 
        'We watched the soccer match for a while.', 
        'response should be "We watched the soccer match for a while."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'soccer', 'changed should have "soccer"')  
    })

    test('Translate "Paracetamol takes up to an hour to work." to American English', function() {
      const text = "Paracetamol takes up to an hour to work."
      const translator = new Translator()
      const { translate, changed } = translator.toAmericanEnglish(text)
      
      assert.equal(translate, 
        'Tylenol takes up to an hour to work.', 
        'response should be "Tylenol takes up to an hour to work."')
      
      const strChanged = changed.join(' ')
      assert.include(strChanged, 'Tylenol', 'changed should have "Tylenol"')  
    })

    test('Translate "First, caramelise the onions." to American English', function() {
      const text = "First, caramelise the onions."
      const translator = new Translator()
      const { translate, changed } = translator.toAmericanEnglish(text)
      
      assert.equal(translate, 
        'First, caramelize the onions.', 
        'response should be "First, caramelize the onions."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'caramelize', 'changed should have "caramelize"')  
    })

    test('Translate "I spent the bank holiday at the funfair." to American English', function() {
      const text = "I spent the bank holiday at the funfair."
      const translator = new Translator()
      const { translate, changed } = translator.toAmericanEnglish(text)
      
      assert.equal(translate, 
        'I spent the public holiday at the carnival.', 
        'response should be "I spent the public holiday at the carnival."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'public holiday', 'changed should have "public holiday"')  
      assert.include(strChanged, 'carnival', 'changed should have "carnival"')  
    })

    test('Translate "I had a bicky then went to the chippy." to American English', function() {
      const text = "I had a bicky then went to the chippy."
      const translator = new Translator()
      const { translate, changed } = translator.toAmericanEnglish(text)
      
      assert.equal(translate, 
        'I had a cookie then went to the fish-and-chip shop.', 
        'response should be "I had a cookie then went to the fish-and-chip shop."')
      
      const strChanged = changed.join(' ')
      assert.include(strChanged, 'cookie', 'changed should have "cookie"')  
      assert.include(strChanged, 'fish-and-chip shop', 'changed should have "fish-and-chip shop"')  
    })

    test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', function() {
      const text = "I've just got bits and bobs in my bum bag."
      const translator = new Translator()
      const { translate, changed } = translator.toAmericanEnglish(text)
      
      assert.equal(translate, 
        'I\'ve just got odds and ends in my fanny pack.', 
        'response should be "I\'ve just got odds and ends in my fanny pack."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'odds and ends', 'changed should have "odds and ends"')  
      assert.include(strChanged, 'fanny pack', 'changed should have "fanny pack"') 
    })

    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', function() {
      const text = "The car boot sale at Boxted Airfield was called off."
      const translator = new Translator()
      const { translate, changed } = translator.toAmericanEnglish(text)
      
      assert.equal(translate, 
        'The swap meet at Boxted Airfield was called off.', 
        'response should be "The swap meet at Boxted Airfield was called off."')
      
      const strChanged = changed.join(' ')
      assert.include(strChanged, 'swap meet', 'changed should have "swap meet"')  
    })

    test('Translate "Have you met Mrs Kalyani?" to American English', function() {
      const text = "Have you met Mrs Kalyani?"
      const translator = new Translator()
      const { translate, changed } = translator.toAmericanEnglish(text)
      
      assert.equal(translate, 
        'Have you met Mrs. Kalyani?', 
        'response should be "Have you met Mrs. Kalyani?"')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'Mrs.', 'changed should have "Mrs."')  
    })

    test('Translate "Prof Joyner of King\'s College, London." to American English', function() {
      const text = "Prof Joyner of King's College, London."
      const translator = new Translator()
      const { translate, changed } = translator.toAmericanEnglish(text)
      
      assert.equal(translate, 
        'Prof. Joyner of King\'s College, London.', 
        'response should be "Prof. Joyner of King\'s College, London."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, 'Prof.', 'changed should have "Prof."')  
    })

    test('Translate "Tea time is usually around 4 or 4.30." to American English', function() {
      const text = "Tea time is usually around 4 or 4.30."
      const translator = new Translator()
      const { translate, changed } = translator.toAmericanEnglish(text)
      
      assert.equal(translate, 
        'Tea time is usually around 4 or 4:30.', 
        'response should be "Tea time is usually around 4 or 4:30."')

      const strChanged = changed.join(' ')
      assert.include(strChanged, '4:30', 'changed should have "4:30"')  
    })
  })

  suite('Highlight translation', function() {
    test('Highlight translation in "Mangoes are my favorite fruit."', function() {

      const text = "Mangoes are my favorite fruit."
      const translator = new Translator()
      const highlight = translator.highlightBritishEnglish(text) 
      
      assert.equal(highlight, 
        'Mangoes are my <span class="highlight">favourite</span> fruit.', 
        'response should be "Mangoes are my <span class="highlight">favourite</span> fruit."')

    })

    test('Highlight translation in "I ate yogurt for breakfast."', function() {

      const text = "I ate yogurt for breakfast."
      const translator = new Translator()
      const highlight = translator.highlightBritishEnglish(text) 
      
      assert.equal(highlight, 
        'I ate <span class="highlight">yoghurt</span> for breakfast.', 
        'response should be "I ate <span class="highlight">yoghurt</span> for breakfast."')

    })

    test('Highlight translation in "We watched the footie match for a while."', function() {

      const text = "We watched the footie match for a while."
      const translator = new Translator()
      const highlight = translator.highlightAmericanEnglish(text) 
      
      assert.equal(highlight, 
        'We watched the <span class="highlight">soccer</span> match for a while.', 
        'response should be "We watched the <span class="highlight">soccer</span> match for a while."')

    })

    test('Highlight translation in "Paracetamol takes up to an hour to work."', function() {

      const text = "Paracetamol takes up to an hour to work."
      const translator = new Translator()
      const highlight = translator.highlightAmericanEnglish(text) 
      
      assert.equal(highlight, 
        '<span class="highlight">Tylenol</span> takes up to an hour to work.', 
        'response should be "<span class="highlight">Tylenol</span> takes up to an hour to work."')

    })
  })
});
