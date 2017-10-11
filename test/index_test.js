const test = require('assert');
const sut = require('../build/cal-phonetic');

describe('CAL', () => {
  describe('To Phonetic', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = sut.toPhonetic('dqsry)-dpylypws');
      const wordExpected = 'dqsry-dpylypws';
      const vocalised = sut.toPhonetic("d'qesariya)-d,p,yilyip'wOs");
      const vocalisedExpected = 'dqēsarīya-ḏp̱īlīpōs';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_generic consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toPhonetic_generic vocalised'
      );
    });
    it('Word with (yi) => (i;) mapping', () => {
      const word = sut.toPhonetic('dylydwth');
      const wordExpected = 'dylydwth';
      const vocalised = sut.toPhonetic("d'yilyid,wut,eh");
      const vocalisedExpected = 'dīlīḏūṯēh';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toPhonetic_yi vocalised');
    });
    it('Word with short Eastern (E) => (e) mapping', () => {
      const word = sut.toPhonetic(')wldg)');
      const wordExpected = 'wldg';
      const vocalised = sut.toPhonetic(')awlEdg,o)');
      const vocalisedExpected = 'awledg̱ā';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toPhonetic_yi vocalised');
    });
    it('Word with (wu) => (uO) mapping', () => {
      const word = sut.toPhonetic('lb(ldbbykwn');
      const wordExpected = 'lb‘ldbbykwn';
      const vocalised = sut.toPhonetic("lab,(eld'b,ob,ayk'wun");
      const vocalisedExpected = 'laḇ‘ēldḇāḇaykūn';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_wu consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toPhonetic_wu vocalised');
    });
    it('Word with (wO) => (oO) mapping', () => {
      const word = sut.toPhonetic(')bhwhy');
      const vocalised = sut.toPhonetic(')ab,ohawh_y');
      const wordExpected = 'bhwhy';
      const vocalisedExpected = 'aḇāhawy';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_wO consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toPhonetic_wO vocalised');
    });
    it('Word with Palestinian P', () => {
      const word = sut.toPhonetic(')Pbhwhy');
      const vocalised = sut.toPhonetic(')aPeb,ohawh_y');
      const wordExpected = 'pbhwhy';
      const vocalisedExpected = 'apēḇāhawy';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_wO consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toPhonetic vocalised with P'
      );
    });
    it('Word with Hebrew Shin', () => {
      const word = sut.toPhonetic(')Pbhwh&');
      const wordExpected = 'pbhwhś';
      const vocalised = sut.toPhonetic(')aPeb,ohawh_&o');
      const vocalisedExpected = 'apēḇāhawśā';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_wO consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toPhonetic vocalised with P'
      );
    });
    it('Invalid Rukkakha', () => {
      const word = sut.toPhonetic(')Pbh,swh&');
      const wordExpected = 'pbhswhś';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic invalid rukkakha');
    });
    it('Standalone Ou', () => {
      const word = sut.toPhonetic(')PbOh,suwh&');
      const wordExpected = 'pbōhsūwhś';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic invalid rukkakha');
    });
    it('Blank word returns blank', () => {
      const word = sut.toPhonetic('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toPhonetic(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toPhonetic(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toPhonetic(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_zero');
    });
  });
  describe('Mapped writing', () => {
    it('Consonants length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.consonants.length,
        sut.mapper.toWriting.consonants.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.consonants.length > 22,
        'Length greater than 22'
      );
    });
    it('Vowels length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.vowels.length,
        sut.mapper.toWriting.vowels.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.vowels.length > 5,
        'Length greater than 5'
      );
    });
    it('Diacritics undefined', () => {
      test.strictEqual(
        sut.mapper.fromWriting.diacritics,
        undefined,
        'from undefined'
      );
      test.strictEqual(
        sut.mapper.fromWriting.diacritics,
        sut.mapper.toWriting.diacritics,
        'to undefined'
      );
    });
  });
});

describe('CAL', () => {
  describe('To Phonetic', () => {
    it('Blank word returns blank', () => {
      const word = sut.toPhonetic('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toPhonetic(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toPhonetic(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toPhonetic(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'sut.toPhonetic_zero');
    });
  });
  describe('Mapped writing', () => {
    it('Consonants length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.consonants.length,
        sut.mapper.toWriting.consonants.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.consonants.length > 22,
        'Length greater than 22'
      );
    });
    it('Vowels length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.vowels.length,
        sut.mapper.toWriting.vowels.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.vowels.length > 5,
        'Length greater than 5'
      );
    });
  });
});
