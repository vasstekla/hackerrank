function anagrams(s1, s2) {
    if(s1 == s2) {
        return true
    }
    
    if(s1.length != s2.length) {
        return false
    }
    
    let char = 256    
    let char1 = new Array(char).fill(0)
    let char2 = new Array(char).fill(0)
    
    for(let i = 0; i < s1.length; i++) {
        char1[s1[i].charCodeAt(0)]++
        char2[s2[i].charCodeAt(0)]++
    }
    
    for(let i = 0; i < char; i++) {
        if(char1[i] != char2[i]) {
            return false
        }
    }
    
    return true
}

function sherlockAndAnagrams(s) {
    let l = s.length
    let char = 1
    let count = 0
    
    for(let charCount = 1; charCount <= l; charCount++) {
        for(let i = 0; i < l-charCount; i++) {
            let character1 = s.substring(i, i + charCount)        
            for(let j = i + 1; j <= l-charCount; j++) {
                let character2 = s.substring(j, j + charCount)
                    if(anagrams(character1,character2)) {
                        count++
                    }
            }
        }
    }
    return count
}
