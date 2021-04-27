const input = 'fuc bitc';
const vowels = ['a', 'b', 'c'];
const resultArray = [];
for (let i = 0; i < input.length; i++) {
    for (let v = 0; v < vowels.length; v++) {
        if (input[i] === vowels[v])
            resultArray.push(vowels[v]);
        console.log('i is ' + i);
        console.log('v is ' + v);
    }
}
console.log(resultArray.join('').toUpperCase());