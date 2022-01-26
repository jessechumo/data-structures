// finding whether a target number 'k', exists in an array
function findNumber(arr,k)
{
    var count=arr.length;
    for(var i=0;i<count;i++)
    {
        if(arr[i]===k){return true;}
    }
    return false;
}