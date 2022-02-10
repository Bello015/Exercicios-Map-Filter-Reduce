function filtraPares (arr) {
    return arr.filter(callback);
}

function callback (item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 34, 45, 59, 61, 8]

console.log(filtraPares(meuArray));