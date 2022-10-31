function countSwaps(a) {
    let n = a.length
    let swaps = 0
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - 1; j++) {
            if(a[j] > a[j + 1]) {
                swaps++
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
            }
        }
    }
    console.log('Array is sorted in '+swaps+' swaps.')
    console.log('First Element: '+ a[0])
    console.log('Last Element: '+ a[n-1])
}