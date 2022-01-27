let arr = [1,2,3,4,5]


function miniMaxSum(arr) {

    //sorting the array
    arr= arr.sort()

    
    // to get the sets only
    let maxSet = arr.splice(0,1)
    let minSet = arr.splice(4,1)

    
    //gettiing the sums
    let maxResult = maxSet.reduce((a, b) => a + b, 0)
    let minResult = minSet.reduce((a, b) => a + b, 0)
    
    //logging both outputs to console
    console.log(minResult ,maxResult)

    
}

miniMaxSum()
