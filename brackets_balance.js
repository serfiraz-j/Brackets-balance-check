const areTheParenthesesEqual = (s) => {

    let sArray = s.split('');

    const control = sArray.reduce((prev, curr) => {

        if (curr === '(' || curr === '{' || curr === '[') {
            prev.push(curr)
        }

        if ((curr === ')' || curr === '}' || curr === ']') && prev.length === 0) {
            prev.push('fail')
        }

        if (curr === ')' && prev[0] !== 1 && prev.length > 0) {
            if (prev[prev.length - 1] === '(') {
                prev.pop()
            } else {
                for (let i = prev.length - 2; i >= 0; i--) {
                    if (prev[i] === '(') {
                        prev.splice(i, i + 1)
                    }
                }
                prev.push('fail')
            }
        }

        if (curr === ']' && prev[0] !== 1 && prev.length > 0) {

            if (prev[prev.length - 1] === '[') {
                prev.pop()
            } else {
                for (let i = prev.length - 2; i >= 0; i--) {
                    if (prev[i] === '[') {
                        prev.splice(i, i + 1)
                    }
                }
                prev.push('fail')
            }
        }

        if (curr === '}' && prev[0] !== 1 && prev.length > 0) {
            if (prev[prev.length - 1] === '{') {
                prev.pop()
            } else {
                for (let i = prev.length - 2; i >= 0; i--) {
                    if (prev[i] === '{') {
                        prev.splice(i, i + 1)
                    }
                }
                prev.push('fail')
            }
        }
        return prev

    }, []);

    if (control.length === 0) {
        return true;
    } else {
        return false;
    }

}

console.log(areTheParenthesesEqual(' (( /*+ { -*/ ( ) } xxa )() as) '));
console.log(areTheParenthesesEqual(' ()( xc {(( a) )} ()'));
console.log(areTheParenthesesEqual(' { a (( 56 kl [] ))} '));