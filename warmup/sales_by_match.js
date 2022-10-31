function sockMerchant(n, ar) {
    let result = 0
    let maxi = 100
    let occuranceList = new Array(maxi+1).fill(0);
    ar.forEach((a, i) => occuranceList[a] += 1)
    occuranceList.forEach((o, i) => result += Math.floor(o / 2))
    return result

}