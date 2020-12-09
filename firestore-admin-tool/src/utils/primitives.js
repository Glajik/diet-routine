export const head = list => list[0]
export const tail = list => list.slice(1)
export const last = list => head(list.slice(-1))
export const eq = a => b => a === b
export const notEq = a => !eq(a)
export const toA1n = v => [v, v].join(':')
export const map = fn => list => list.map(fn)
export const mapBy = prop => list => list.map(item => item[prop])
export const o = (g, f) => x => g(f(x))
export const pipe = (...fns) => x => fns.reduce((result, fn) => fn(result), x)
export const compose = (...fns) => pipe(...fns.reverse())

export const sortBy = (prop, order = 'asc') => list => list.sort(
  (a, b) => order === 'asc' // eslint-disable-line no-confusing-arrow
    ? a[prop] - b[prop]
    : b[prop] - a[prop],
)

export const sortTextBy = (prop, order = 'asc') => list => list.sort((a, b) => {
  const first = order === 'asc' ? a[prop].toUpperCase() : b[prop].toUpperCase()
  const second = order === 'asc' ? b[prop].toUpperCase() : a[prop].toUpperCase()
  if (first < second) return -1
  if (first > second) return 1
  return 0
})

export const unique = list => list.reduce((acc, item) => {
  if (!acc.length) return [item]
  if (last(acc) === item) return acc
  return [...acc, item]
}, [])

export const uniqueBy = prop => list => list.reduce((acc, item) => {
  if (!acc.length) return [item]
  if (last(acc)[prop] === item[prop]) return acc
  return [...acc, item]
}, [])

export const flatten = nested => nested.reduce((acc, list) => {
  if (acc instanceof Array && list instanceof Array) {
    return [...acc, ...list]
  }
  if (acc instanceof Array) return [...acc, list]
  if (list instanceof Array) return [acc, ...list]
  return [acc, list]
}, [])
