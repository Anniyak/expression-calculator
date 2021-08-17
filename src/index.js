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
      const newExp = exp.substring(start + 1, end - 1);
      const startOperation = start > 0 ? exp[start - 1] : null;
      const endOperation = end < exp.length() - 1 ? exp[end + 1] : null;
      if (startOperation == '*' || startOperation == '/') {

      }

      else {
      }
      //if (start == 0 && end == exp.length() - 1) { calc(newExp); }

    }
  }
  return expressionCalculator(expr);
}

module.exports = {
  expressionCalculator
}
