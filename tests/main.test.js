import { expect, it } from 'vitest'
import { add } from '../js/main.js'

it('add(numbersStr) return 0 with empty', () => {
  expect(add('')).toBe(0)
})

it('add(numbersStr) return 1 with "1"', () => {
    expect(add('1')).toBe(1)
})

it('add(numbersStr) return 3 with "1,2"', () => {
    expect(add('1,2')).toBe(3)
})

it('add(numbersStr) return 6 with "1\n2,3"', () => {
    expect(add('1\n2,3')).toBe(6)
})

it('add(numbersStr) with "1,\n" is not valid', () => {
    expect(() => add('1,\n')).toThrow('Invalid input')
})

it('add(numbersStr) return 3 with "//;\n1;2"', () => {
    expect(add('//;\n1;2')).toBe(3)
})

it('add(numbersStr) with "-1,2" is not valid', () => {
    expect(() => add('-1,2')).toThrow('Negatives not allowed. -1')
})

it('add(numbersStr) with "-1,-2" is not valid', () => {
    expect(() => add('-1,-2')).toThrow('Negatives not allowed. -1 -2')
})

//Les nombres strictement plus grand que 1000 doivent être ignorés
it('add(numbersStr) return 3 with "1\n2,1002"', () => {
    expect(add('1\n2,1002')).toBe(3)
})

//Les séparateurs peuvent être définis par plusieurs caractères
it('add(numbersStr) return 6 with "//[***]\n1***2***3"', () => {
    expect(add('//[***]\n1***2***3')).toBe(6)
})

//Il est possible de définir plusieurs séparateurs 
it('add(numbersStr) return 6 with "//[*][%]\n1*2%3"', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6)
})

//Enfin, vérifier que le cas suivant fonctionne.
it('add(numbersStr) return 6 with "//[**][%%]\n1**2%%3"', () => {
    expect(add('//[**][%%]\n1**2%%3')).toBe(6)
})