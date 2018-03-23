const {
  helloWorld,
  lambdaSchool,
  longestString,
  computeUserAverageAge,
} = require('./assessment');

describe('Lambda School Precourse Assessment', () => {
  describe('helloWorld', () => {
    it('should return a string', () => {
      expect(typeof helloWorld()).toBe('string');
    });
    it('should return the string \'Hello World!\'', () => {
      expect(helloWorld()).toBe('Hello World!');
    });
  });

  describe('lambdaSchool', () => {
    it('should return \'Lambda\' for a number divisible by 3', () => {
      expect(lambdaSchool(12)).toBe('Lambda');
      expect(lambdaSchool(63)).toBe('Lambda');
      expect(lambdaSchool(999)).toBe('Lambda');
    });
    it('should return \'School\' for a number divisible by 5', () => {
      expect(lambdaSchool(10)).toBe('School');
      expect(lambdaSchool(155)).toBe('School');
      expect(lambdaSchool(1000)).toBe('School');
    });
    it('should return \'Lambda School\' for a number divisible by 3 and 5', () => {
      expect(lambdaSchool(15)).toBe('Lambda School');
      expect(lambdaSchool(30)).toBe('Lambda School');
      expect(lambdaSchool(180)).toBe('Lambda School');
    });
  });

  describe('longestString', () => {
    it('should return the longest string in the array', () => {
      expect(longestString(['array', 'object', 'function'])).toBe('function');
      expect(longestString(['C++', 'JavaScript', 'Python'])).toBe('JavaScript');
    });
    it('should return the first longest string if there is a tie', () => {
      expect(longestString(['C++', 'CSS', 'JWT'])).toBe('C++');
    });
  });

  describe('computeUserAverageAge', () => {
    const authors = [{
      name: 'Frank Herbert',
      age: 65,
    }, {
      name: 'Douglas Adams',
      age: 49,
    }, {
      name: 'Isaac Asimov',
      age: 72,
    }];
    const computerScientists = [{
      name: 'Brendan Eich',
      age: 56,
    }, {
      name: 'Linus Torvalds',
      age: 48,
    }, {
      name: 'Margaret Hamilton',
      age: 81,
    }];
    it('should return the average age of the users', () => {
      expect(computeUserAverageAge(authors)).toBe(62);
    });
    it('should round the average before returning it', () => {
      expect(computeUserAverageAge(computerScientists)).toBe(62);
    });
  });
});
