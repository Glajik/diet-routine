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

  /**
   * Make plain object from two lists
   * @param {array} keys List of keys
   * @param {array} values List of values
   */
  const zipObj = (keys, values) => keys.reduce(
    (acc, key, index) => ({ ...acc, [key]: values[index] }), {},
  )

  /**
   * Get list of values in order, specified in keys
   * @param {object} item Plain object
   * @param {array} keys List of keys
   */
  const unzipObj = (item, keys) => keys.map(key => item[key])

  /**
   * Make an object from list, as key use specified value from each element
   * @param {string} key Specify, which key in the objects will be used as pivot
   * @param {[object]} list List of plain objects
   */
  const pivot = (key, list) => list.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {})

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
    unzipObj,
    zipObj,
    pivot,
  }
}())

export default fp
