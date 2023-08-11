function somaArray (arr) {
    let initialValue = 0;
    let result = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, initialValue)

    return result;
}

export default somaArray;