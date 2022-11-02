function luckBalance(k, contests) {
    let luck = 0
    let importantContests = new Array()

    for(let i = 0; i < contests.length; i++) {
        if(contests[i][1] == 0) {
            luck += contests[i][0]
        } else {
            importantContests.push(contests[i][0])
        }
    }
    
    importantContests.sort(function(a,b){return b-a})
    
    for(let i = 0; i < importantContests.length; i++) {
        if(k > 0) {
            luck += importantContests[i]
            k --
        } else {
            luck -= importantContests[i]
        }
    }
    return luck
}