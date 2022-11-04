function pairs(k, arr) {
    let a = arr.length
    let map = new Map()
    let pairs = 0
    
    for(let i = 0; i < a; i++) {
        let key = arr[i]
        if(map.has(key)) {
            map.set(key, map.get(key) + 1)
        } else {
            map.set(key, 1)
        }
    }
    
    for(let i = 0; i < a; i++) {
        let firstNumber = arr[i] 
        let diff = firstNumber - k
        if(map.has(diff)) {
            pairs += map.get(firstNumber) * map.get(diff)
        }
    }
    return pairs
}