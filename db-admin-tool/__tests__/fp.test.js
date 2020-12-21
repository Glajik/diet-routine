import fp from '../src/utils/fp'

test('compose', () => {
  const { compose } = fp
  const calc = compose(x => x * 2)
  expect(calc(3)).toBe(6)
  const calc2 = compose(x => x * 2, x => x + 3)
  expect(calc2(5)).toBe(16)
})

test('unique', () => {
  const { unique } = fp
  expect(unique([])).toEqual([])
  expect(unique([1])).toEqual([1])
  expect(unique([1, 2, 3])).toEqual([1, 2, 3])
  expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3])
  expect(unique([1, 1, 2, 2, 3, 3, 3, 4])).toEqual([1, 2, 3, 4])
})

test('uniqueBy', () => {
  const assert = [
    { id: 1, color: 'red' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'yellow' },
    { id: 4, color: 'black' },
  ]
  const uniqueByColor = fp.uniqueBy('color')
  expect(uniqueByColor(assert)).toEqual([
    { id: 1, color: 'red' },
    { id: 2, color: 'yellow' },
    { id: 4, color: 'black' },
  ])
  expect(uniqueByColor([])).toEqual([])
})

test('sortBy', () => {
  const assert = [
    { id: 2, color: 'yellow' },
    { id: 4, color: 'black' },
    { id: 1, color: 'red' },
    { id: 3, color: 'yellow' },
  ]
  const sortById = fp.sortBy('id', 'asc')
  expect(sortById(assert)).toEqual([
    { id: 1, color: 'red' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'yellow' },
    { id: 4, color: 'black' },
  ])
})

test('sortTextBy', () => {
  const assert = [
    { id: 1, color: 'red' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'yellow' },
    { id: 4, color: 'black' },
  ]
  const sortByColor = fp.sortTextBy('color', 'asc')
  expect(sortByColor(assert)).toEqual([
    { id: 4, color: 'black' },
    { id: 1, color: 'red' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'yellow' },
  ])
})

test('flatten', () => {
  const { flatten } = fp
  expect(flatten([])).toEqual([])
  expect(flatten([1])).toEqual([1])
  expect(flatten([1, 2])).toEqual([1, 2])
  expect(flatten([1, [2, 3]])).toEqual([1, 2, 3])
  expect(flatten([[1, 2], 3])).toEqual([1, 2, 3])
  expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])
  expect(flatten([[], [3, 4]])).toEqual([3, 4])
})
