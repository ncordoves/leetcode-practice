function pluralize(arr) {
    const newArr = [];
    arr.forEach((el) => {
        newArr.push(el += 's');
    });
    return newArr;
}