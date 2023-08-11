function multiplicaArray (arr) {
    let initialValue = 1;
    let result = arr.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    }, initialValue)

    return result;
}


export default multiplicaArray;