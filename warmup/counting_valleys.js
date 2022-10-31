function countingValleys(steps, path) {
    if(steps < 2)
    {
        return 0
    }
    let stack = [] 
    let valleys = 0
    
    for(let step of path) {
        if(stack.length != 0) {
           if(step == 'D' && stack[0] == 'U') {
                stack.pop()
            } else {
                if(step == 'U' && stack[0] == 'D') {
                    stack.pop()
                    if(stack.length == 0) {
                        valleys += 1
                    }
                } else {
                    stack.push(step)
                }
            }
        } else {
            stack.push(step)
        }
    }
    
    return valleys
}
