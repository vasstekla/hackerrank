function minimumBribes(q) {
    let len = q.length
    let allBribes = 0
    for (let i = len - 1; i >= 0; i--) {   
        if(q[i] - i > 3) {
            console.log('Too chaotic')
            return
        }     
        let bribes = 0
        
        for (let j = q[i] - 2; j < i; j++) {
            if(q[j] > q[i]) {
                bribes += 1
            }
        }
    
        allBribes += bribes
    }
    console.log(allBribes)

}
