const isPalindrome = require('./isPalindrome')

test('Tacocat returns true', () => {
  expect(isPalindrome('Tacocat')).toBe(true)
})

test('Wilson returns false', () => {
  expect(isPalindrome('Wilson')).toBe(false)
})