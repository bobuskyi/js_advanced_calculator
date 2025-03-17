'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value) {
      this.result += value;
    },
    subtract(value) {
      this.result -= value;
    },
    multiply(value) {
      this.result *= value;
    },
    divide(value) {
      if (value > 0) {
        this.result /= value;
      }
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(func, value) {
      func.call(this, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
