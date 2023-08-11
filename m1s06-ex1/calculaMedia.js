function calculaMedia (arr) {
    let initialValue = 0;
    let sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, initialValue)

    return sum / arr.length;
}


export default calculaMedia;