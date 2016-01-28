/**
 * @module src/index_test
 */
'use strict'

const test = require('unit.js')

const interweave = require('./index')

describe('src/index', () => {
  it('should return empty array if both source arrays are empty', () => {
    const sourceA = []
    const sourceB = []
    const mergeResult = interweave(sourceA, sourceB)
    test.array(mergeResult).hasLength(0)
  })

  it('should return array with members of a non-empty source array if one source array is empty',
  () => {
    const sourceA = [1, 2, 3, 4, 5]
    const sourceB = []
    const mergeResult = interweave(sourceA, sourceB)
    test.array(mergeResult).is([1, 2, 3, 4, 5])

    const sourceA2 = []
    const sourceB2 = [1, 2, 3, 4, 5]
    const mergeResult2 = interweave(sourceA2, sourceB2)
    test.array(mergeResult2).is([1, 2, 3, 4, 5])
  })

  it('should interweave source arrays of equal length', () => {
    const sourceA = [1, 2, 3, 4, 5]
    const sourceB = ['A', 'B', 'C', 'D', 'E']
    const mergeResult = interweave(sourceA, sourceB)
    test.array(mergeResult).is([1, 'A', 2, 'B', 3, 'C', 4, 'D', 5, 'E'])
  })

  it('should interweave source arrays of unequal length', () => {
    const sourceA = [1, 2, 3, 4, 5]
    const sourceB = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const mergeResult = interweave(sourceA, sourceB)
    test.array(mergeResult).is([1, 'A', 2, 'B', 3, 'C', 4, 'D', 5, 'E', 'F', 'G', 'H'])
  })
})
