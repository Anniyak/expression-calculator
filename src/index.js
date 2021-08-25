function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  expr = expr.replace(/\s+/g, '');
  let operators = ['*', '/', '+', '-'];
  function calc(exp) {

    if (!isNaN(exp)) return +exp;
    const start = exp.indexOf('(');
    if (start !== -1) {
      let brackets = 1;
      for (let i = start; i < exp.length; i++) {
        const end = 0;
        if (exp[i] == '(') brackets++;
        if (exp[i] == ')') brackets--;
        if (brackets == 0) {
          end = i;
          break;
        }
      }
      const newExp = exp.substring(start + 1, end - 1);
      const startOperation = start > 0 ? exp[start - 1] : null;
      const endOperation = end < exp.length() - 1 ? exp[end + 1] : null;
      const startExp = exp.substring(0, start);
      const endExp = exp.substring(end + 1);
      console.log('1:', startExp);
      console.log('2:', startOperation);
      console.log('3:', newExp);
      console.log('4:', endOperation);
      console.log('5:', endExp);
      switch (startOperation) {
        case '*':
          switch (endOperation) {
            case '*': return calc(startExp) * calc(newExp) * calc(endExp);
            case '/': if (endExp == 0) throw ("TypeError: Division by zero."); return calc(startExp) * calc(newExp) / calc(endExp);
            case '+': return calc(startExp) * calc(newExp) + calc(endExp);
            case '-': return calc(startExp) * calc(newExp) - calc(endExp);
            default: return calc(startExp) * calc(newExp);
          }
          break;
        case '/':
          switch (endOperation) {
            case '*': return calc(startExp) / calc(newExp) * calc(endExp);
            case '/': if (endExp == 0) throw ("TypeError: Division by zero."); return calc(startExp) / calc(newExp) / calc(endExp);
            case '+': return calc(startExp) / calc(newExp) + calc(endExp);
            case '-': return calc(startExp) / calc(newExp) - calc(endExp);
            default: return calc(startExp) / calc(newExp);
          }
          break;
        case '+':
          switch (endOperation) {
            case '*': return calc(startExp) + calc(newExp) * calc(endExp);
            case '/': if (endExp == 0) throw ("TypeError: Division by zero."); return calc(startExp) + calc(newExp) / calc(endExp);
            case '+': return calc(startExp) + calc(newExp) + calc(endExp);
            case '-': return calc(startExp) + calc(newExp) - calc(endExp);
            default: return calc(startExp) + calc(newExp);
          }
          break;
        case '-':
          switch (endOperation) {
            case '*': return calc(startExp) - calc(newExp) * calc(endExp);
            case '/': if (endExp == 0) throw ("TypeError: Division by zero."); return calc(startExp) - calc(newExp) / calc(endExp);
            case '+': return calc(startExp) - calc(newExp) + calc(endExp);
            case '-': return calc(startExp) - calc(newExp) - calc(endExp);
            default: return calc(startExp) - calc(newExp);
          }
          break;
        default://нет левой части
          switch (endOperation) {
            case '*': return calc(newExp) * calc(endExp);
            case '/': if (endExp == 0) throw ("TypeError: Division by zero."); return calc(newExp) / calc(endExp);
            case '+': return calc(newExp) + calc(endExp);
            case '-': return calc(newExp) - calc(endExp);
            default: return calc(newExp);
          }
          break;
      }

    }
    else {//нет скобок
      let currOperators = [];
      let start = exp.indexOf('+') > -1 ? exp.indexOf('+') :
        exp.indexOf('-') > -1 ? exp.indexOf('-') :
          exp.indexOf('*') > -1 ? exp.indexOf('*') :
            exp.indexOf('/') > -1 ? exp.indexOf('/') : null;

      let currOperator = exp[start];
      const startExp = exp.substring(0, start);
      const endExp = exp.substring(start + 1);
      console.log('startExp:', startExp);
      console.log('endOperation:', currOperator);
      console.log('endExp:', endExp);

      switch (currOperator) {
        case '*': return calc(startExp) * calc(endExp);
        case '/': if (endExp == 0) throw ("TypeError: Division by zero."); return calc(startExp) / calc(endExp);
        case '-': return calc(startExp) - calc(endExp);
        case '+': return calc(startExp) + calc(endExp);
        default: return "ERROR";
      }


    }
  }
  return calc(expr);
}

module.exports = {
  expressionCalculator
}
