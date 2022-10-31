function jumpingOnClouds(c) {
    let len = c.length - 1
    let curr = 0
    let steps = 0
    while(curr != len) {
        if(curr < len - 2) {
            if(c[curr + 2] == 0) {
                curr += 2
            } else {
                curr += 1
            }
        } else {
            curr = len
        }
        steps += 1
        
    }
    
    return steps
}