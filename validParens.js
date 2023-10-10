function validParens(s) {
    const expected = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            expected.push(')')
        } 
        else if (s[i] === '[') {
            expected.push(']')
        }
        else if (s[i] === '{') {
            expected.push(']')
        }
        else if (expected.pop() !== s[i]) {
            return false;
        }
    }
    return true;
}