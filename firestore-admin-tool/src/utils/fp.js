const fp = (function () {
  /**
   * Head of the list
   * @param {[]} list
   * @returns {any} first element of list
   * @example
   * head([1, 2, 3]) // -> 1
   */
  const head = list => list[0]

  const tail = list => list.slice(1)
  const last = list => head(list.slice(-1))
  const eq = a => b => a === b
  const notEq = a => !eq(a)
  const toA1n = v => [v, v].join(':')
  const map = fn => list => list.map(fn)
  const mapBy = prop => list => list.map(item => item[prop])
  const o = (g, f) => x => g(f(x))
  const pipe = (...fns) => x => fns.reduce((result, fn) => fn(result), x)
  const compose = (...fns) => pipe(...fns.reverse())

  const sortBy = (prop, order = 'asc') => list => list.sort(
    (a, b) => order === 'asc' // eslint-disable-line no-confusing-arrow
      ? a[prop] - b[prop]
      : b[prop] - a[prop],
  )

  const sortTextBy = (prop, order = 'asc') => list => list.sort((a, b) => {
    const first = order === 'asc' ? a[prop].toUpperCase() : b[prop].toUpperCase()
    const second = order === 'asc' ? b[prop].toUpperCase() : a[prop].toUpperCase()
    if (first < second) return -1
    if (first > second) return 1
    return 0
  })

  const unique = list => list.reduce((acc, item) => {
    if (!acc.length) return [item]
    if (last(acc) === item) return acc
    return [...acc, item]
  }, [])

  const uniqueBy = prop => list => list.reduce((acc, item) => {
    if (!acc.length) return [item]
    if (last(acc)[prop] === item[prop]) return acc
    return [...acc, item]
  }, [])

  const flatten = nested => nested.reduce((acc, list) => {
    if (acc instanceof Array && list instanceof Array) {
      return [...acc, ...list]
    }
    if (acc instanceof Array) return [...acc, list]
    if (list instanceof Array) return [acc, ...list]
    return [acc, list]
  }, [])

  return {
    head,
    tail,
    last,
    eq,
    notEq,
    toA1n,
    map,
    mapBy,
    o,
    pipe,
    compose,
    sortBy,
    sortTextBy,
    unique,
    uniqueBy,
    flatten,
  }
}())

export default fp
