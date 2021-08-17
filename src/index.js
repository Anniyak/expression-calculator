function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  expr = expr.replace(/\s+/g, '');
  let operators = ['+', '-', '*', '/'];
  function calc(exp) {

    if (+exp !== NaN) return +exp;
    const start = exp.indexOf('(');
    if (start !== -1) {
      const end = exp.indexOf(')');

    }
  }
  return expressionCalculator(expr);
}

module.exports = {
  expressionCalculator
}
