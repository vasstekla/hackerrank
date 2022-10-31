function freqQuery(queries) {
    let result = new Array()
    let map = new Map()
    
    queries.map(query => {
        let number = query[1]
        let value = map.get(number)
        
        switch(query[0]) {
            case 1:
                if(value == undefined) {
                    map.set(number, 1)
                } else {
                    map.set(number, value + 1)
                }
                break;
            case 2:
                if(value != undefined && value > 0) {
                    map.set(number, value - 1)
                }
                break;
            case 3:
                let exists = false
                map.forEach((n, v)=>{
                    if(number == n) {
                        exists = true
                    }
                })
                result.push(exists ? 1 : 0)
                break;
        }
    })

    return result

}
