function makeAnagram(a, b) {
    let lenA = a.length
        
    for(let i = 0; i < lenA; i++) {
        if(b.includes(a[i])) {
            b = b.replace(a[i],'')
            if(i == 0) {
                a = a.slice(1)
            } else {
                a = a.slice(0, i) + a.slice(i+1)
            }
            i--
        }
    }
    
    return a.length + b.length

}