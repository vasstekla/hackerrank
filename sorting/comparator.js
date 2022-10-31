function processData(input) {
    
    let arr = input.split('\n')
    let length = Number(arr[0])
    arr.splice(0,1)
    for (let i = 0; i < length; i++) {
        arr[i] = arr[i].split(' ')
        arr[i][1] = Number(arr[i][1])
    }

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if(arr[j][1] < arr[j+1][1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            } else if(arr[j][1] == arr[j+1][1]) {
                if(arr[j][0] > arr[j+1][0]) {
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                }
            }
        }
    }
    
    for (let i = 0; i < length; i++) {
        console.log(arr[i][0] + ' ' + arr[i][1])    
    }
    
}