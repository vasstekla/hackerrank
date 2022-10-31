function twoStrings(s1, s2) {
    let s = s1.length
    for(let i = 0; i < s; i++) {
        if(s2.includes(s1[i]))
            return 'YES'
    }
    return 'NO'
}
