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
    const closeBracket = exp.indexOf(')');

    //  console.log('start', start);
    //   console.log('closeBracket', closeBracket);
    if (closeBracket > -1 && start == -1) throw ("ExpressionError: Brackets must be paired");
    if (start !== -1) {
      let brackets = 0;
      let end = 0;
      for (let i = start; i < exp.length; i++) {
        if (exp[i] == '(') brackets = brackets + 1;
        if (exp[i] == ')') brackets = brackets - 1;
        if (brackets == 0) {
          //  console.log('end', i);
          end = i;
          break;
        }

        if (brackets < 0) {
          //   console.log('brackets', brackets);
          throw ("ExpressionError: Brackets must be paired")
        };
      }

      if (brackets > 0) {
        // console.log('brackets', brackets);
        throw ("ExpressionError: Brackets must be paired");
      }
      // console.log('start', start);
      // console.log('end', end);
      const newExp = exp.substring(start + 1, end);
      const startOperation = start > 0 ? exp[start - 1] : null;
      const endOperation = end < exp.length - 1 ? exp[end + 1] : null;
      const startExp = exp.substring(0, start - 1);
      const endExp = exp.substring(end + 2);
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
      let start = exp.lastIndexOf('+') > -1 ? exp.lastIndexOf('+') :
        exp.lastIndexOf('-') > -1 ? exp.lastIndexOf('-') :
          exp.lastIndexOf('*') > -1 ? exp.lastIndexOf('*') :
            exp.lastIndexOf('/') > -1 ? exp.lastIndexOf('/') : null;

      let currOperator = exp[start];
      const startExp = exp.substring(0, start);
      const endExp = exp.substring(start + 1);
      // console.log('startExp:', startExp);
      // console.log('endOperation:', currOperator);
      // console.log('endExp:', endExp);

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
