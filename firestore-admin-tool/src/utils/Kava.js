/* eslint-disable class-methods-use-this */
/**
 * @class
 * For testing purpose in Google Apps Script projects
 */
class Kava {
  constructor(moduleName = '') {
    this._moduleName = moduleName; // eslint-disable-line
    this.results = [];
  }

  make(task, fn) {
    try {
      // invocation funciton
      fn();

      this.results = [
        ...this.results,
        {
          task,
          result: 'OK',
          success: true,
        },
      ];
    } catch (error) {
      this.results = [
        ...this.results,
        {
          task,
          error,
          result: 'ERROR',
          success: false,
        },
      ];
    }
  }

  /**
  * Set module name that testing
  * @param {String} name module name
  */
  moduleName(name) {
    this._moduleName = name; // eslint-disable-line
    return this;
  }

  /**
   * Compare two plain objects.
   * Throw exception, if is not equal.
   * @param {Object} recieved
   * @param {Object} expected
   * @returns {Function} that take as argument object for comparing
   * @example
   * const kava = new Kava('Description');
   * const assertion = { a: 1, b: 2 };
   * const compare = kava.compareWith(assertion);
   * compare({ a: 1, b: 2}); // OK
   * compate({ a: 1, c: 3 }); // Throw exception
   */
  compare(recieved, expected, errorMessage = 'Objects aren\'t matched') {
    if (JSON.stringify(recieved) !== JSON.stringify(expected)) {
      throw new Error(`${errorMessage}\nExpected: ${JSON.stringify(expected)}\nReceived: ${JSON.stringify(recieved)}`)
    }
  }

  /**
   * Comparing values by same key in the two objects.
   * Throw exception, if is not equal.
   * @param {String} key Key by which the value will be checked
   * @param {Object} received Object, which compared
   * @param {Object} expected Object, used as reference
   */
  // eslint-disable-next-line class-methods-use-this
  isEqualByKey(received, expected, key) {
    if (received[key] === expected[key]) {
      return true;
    }

    throw new Error(`${key} expected ${expected[key]}, but received ${received[key]}`);
  }

  /**
   * Compare two primitive type values.
   * Throw exception, if is not equal.
   * @param {*} received value, that compared
   * @param {*} expected sample value
   */
  // eslint-disable-next-line class-methods-use-this
  isEqual(received, expected, errorMessage = 'Expected and received values aren\'t equals') {
    if (received instanceof Object || expected instanceof Object) {
      throw new Error('Only primitive types can be compared');
    }

    if (received === expected) {
      return true;
    }

    throw new Error(`${errorMessage}\nExpected: ${expected}\nReceived: ${received}`);
  }

  isTrue(expression, errorMessage = 'Expression result isn\'t "true"\nExpected: true\nRecieved: false') {
    if (expression !== true) {
      throw new Error(errorMessage)
    }
  }

  isFalse(expression, errorMessage = 'Expression result isn\'t "false"\nExpected: false\nRecieved: true') {
    if (expression !== true) {
      throw new Error(errorMessage)
    }
  }

  /**
   * Return count of errors
   */
  get errCount() {
    return this.results.filter(item => !item.success).length;
  }

  /**
   * Getter make formatted text output of test results.
   * Start it at finish tests
   */
  get output() {
    const errors = this.errCount;
    const total = this.results.length;
    const results = this.results.map((item, index) => {
      const { task, error } = item;
      if (error) {
        return `${index + 1}. ${task}\n${error.stack}`
      }
      return `${index + 1}. ${task}\nOk`;
    })

    const title = errors
      ? `TEST NOT PASSED: ${this._moduleName}` // eslint-disable-line no-underscore-dangle
      : `TEST PASSED: ${this._moduleName}` // eslint-disable-line no-underscore-dangle

    return [
      title,
      `---- errors: ${errors}, passed: ${total - errors}, total cases: ${total} ----`,
      ...results,
    ].join('\n')
  }
}

export default Kava;
