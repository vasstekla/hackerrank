function minimumAbsoluteDifference(arr) {
    arr.sort(function(a, b){return a-b})
    let min = arr[arr.length - 1]
    
    for(let i = 0; i < arr.length - 1; i++) {
        let abs = Math.abs(arr[i]-arr[i+1])
        if(abs < min) {
            min = abs
        }
    }
    
    return min
}