const swap = (arr, t1, t2) => {
    const temp = arr[t1]
    arr[t1] = arr[t2]
    arr[t2] = temp
}

const getMax = (arr, v1, v2) => {
    return arr[v1] > arr[v2] ? v1 : v2

}
const getMaxP = (arr, v1, v2) => {
    return arr[v1].priority > arr[v2].priority ? v1 : v2
}


module.exports ={ 
    swap,
    getMax,
    getMaxP
}