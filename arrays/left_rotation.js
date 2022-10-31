function rotLeft(a, d) {
    let len = a.length
    let rotationCount = d % len
    let newArr = new Array(len)
    
    for (let i = 0; i < len; i++) {
        let newPosition = i - rotationCount       
        if(newPosition < 0) {
            newPosition += len
        }
        newArr[newPosition] = a[i]   
    }
    return newArr
}