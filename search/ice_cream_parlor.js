function whatFlavors(cost, money) {
    let n = cost.length
    let map = new Map()
    for(let i = 0; i < n; i++) {
        map.set(cost[i], i)
    }
    
    for(let i = 0; i < n; i++) {
        let first = cost[i]
        let diff = money - first
        if(map.has(diff)) {
            let diffValue = map.get(diff)
            if(diffValue != i) {
                console.log((i+1)+' '+(diffValue+1))  
                return
            }
        }
    }
}