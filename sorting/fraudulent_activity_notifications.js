function activityNotifications(expenditure, d) {
    let len = expenditure.length
    let notificationCount = 0
    let countElements = new Array(201).fill(0)
    
    for (let i = 0; i < d; i++) {
        countElements[expenditure[i]]++
    }
    
    for (let i = d; i < len; i++) {
        let count = 0
        let median = 0
        
        for (let j = 0; j < countElements.length; j++) {
            count += countElements[j]
            if (count * 2 === d) {
                median = j * 2 + 1
                break
            } else if (count * 2 > d) {
                median = j * 2 
                break
            }
        }
        
        if(expenditure[i] >= median) {
            notificationCount ++
        }
        countElements[expenditure[i - d]] --
        countElements[expenditure[i]] ++
    }
    return notificationCount
}

