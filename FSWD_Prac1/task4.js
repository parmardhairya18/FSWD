let array = [10000,20000,30,400,5000];
let maxsal = dhairya(array);
console.log(maxsal);
function dhairya(array)
{
    let max = 0;
    for(let i=0;i <= array.length;i++)
    {
        if(array[i]>max)
        {
            max = array[i];
        }
    }
    return max;
}
