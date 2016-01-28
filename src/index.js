/**
 * @module src/index
 */
'use strict'

/**
 * Produce a new array from two source arrays with alternating values from each source array.
 * The first member of the first argument (sourceA) will be at index 0 in the returned merged array
 * @param {Array<*>} sourceA
 * @param {Array<*>} sourceB
 * @return Array<*>
 */
module.exports = (sourceA, sourceB) => {
  const merged = []
  const maxLen = Math.max(sourceA.length, sourceB.length)
  for (let i = 0; i < maxLen; i++) {
    let memberA = sourceA[i]
    let memberB = sourceB[i]
    if (typeof memberA !== 'undefined') merged.push(memberA)
    if (typeof memberB !== 'undefined') merged.push(memberB)
  }
  return merged
}
