function isValid(s) {
    let map = new Map()
    
    let minChar = ''
    let maxChar = ''
    let minOccurance = s.length
    let maxOccurance = 0
    let minOccuranceCount = 0
    let maxOccuranceCount = 0
    
    for(let i = 0; i < s.length; i++) {
        let occurance = map.get(s[i])
        if(occurance == undefined) {
            map.set(s[i], 1)
        } else {
            occurance++
            map.set(s[i], occurance)
        }
    }
    
    map.forEach((v, k) => {
        if(v == minOccurance) {
            minOccuranceCount ++
        }
        if(v == maxOccurance) {
            maxOccuranceCount ++
        }
        if(v < minOccurance) {
            minChar = k
            minOccurance = v
            minOccuranceCount = 1
        }
        if(v > maxOccurance) {
            maxChar = k
            maxOccurance = v
            maxOccuranceCount = 1
        }
    })
    
    if(minOccurance == maxOccurance) {
        if(maxOccurance == 1 || minChar == maxChar) {
            return 'YES'
        } else {
            return 'NO'
        }
    }
    
    if((minOccuranceCount == 1 || maxOccuranceCount == 1) && (Math.abs(minOccurance - maxOccurance) < 2)) {
        return 'YES'
    }


    if(((minOccuranceCount == 1 && minOccurance == 1) || (maxOccuranceCount == 1 && maxOccurance == 1)) && maxOccuranceCount*maxOccurance + minOccuranceCount*minOccurance == s.length) {
        return 'YES'
    }
    return 'NO'
}