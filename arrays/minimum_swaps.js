function minimumSwaps(arr) {
    let swap = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] - 1 != i) {
            let helper = arr[i]
            arr[i] = arr[arr[i]-1]
            arr[helper - 1] = helper
            swap += 1
        }
        
        if(arr[i] - 1 != i) {
            i -= 1
        }
    }

    return swap
}