function Mission1(arr){
    return arr.filter(num=> num%2 === 0)
}

function Mission2(strings){
    let stringsArr = strings.split(" ")
    stringsArr = stringsArr.filter(str => str.length >= 4)
    return stringsArr.length
}

function Mission3(arr){
    return arr.flat()
}

function Mission4(arrd) {
    let sort = true;
    let sortRevers = true;
    for (let i = 0; i < arrd.length - 1; i++) {
        if (arrd[i] > arrd[i + 1]) {
            sort = false;
        }
        if (arrd[i] < arrd[i + 1]) {
            sortRevers = false;
        }
    }

    if(sort)
            return 1;
    if(sortRevers)
            return 2;
    else{
        return 0;
    }
}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}

