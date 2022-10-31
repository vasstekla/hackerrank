function maximumToys(prices, k) {
    prices.sort(function(a, b){return a-b})
    let p = prices.length
    let result = 0
    
    for(let i = 0; i < p; i++) {
        let price = prices[i]
        if(price <= k) {
            k -= price
            result ++
        } else {
            return result
        }
    }
    
    return p
}