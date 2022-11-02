function unfairness(arr) {
    return Math.max(arr[0], arr[arr.length-1]) - Math.min(arr[0], arr[arr.length-1])
}

function maxMin(k, arr) {
    arr.sort(function(a,b){return a-b})
    let minUnfairness = arr[arr.length-1]
    
    for(let i = 0; i < arr.length - k + 1; i++) {
        let currUnfairness = unfairness(arr.slice(i, i+k))
        if(currUnfairness < minUnfairness) {
            minUnfairness = currUnfairness
        }
    }
    
    return minUnfairness
}