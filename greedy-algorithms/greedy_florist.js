function getMinimumCost(k, c) {
    let n = c.length
    let minimumCost = 0
    if(k >= n) {
        for(let i = 0; i < n; i++) {
            minimumCost += c[i]
        }
        return minimumCost
    }
    
    let originalK = k
    let addOn = 0
    c.sort(function(a,b){return b-a})

    for(let i = 0; i < n; i++) {
        if(k > 0) {
            minimumCost += (addOn + 1) * c[i]
            k--
        } else {
            k = originalK
            addOn += 1
            i --
        }
    }    
    
    return minimumCost

}