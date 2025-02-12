
function AddArray(Array: any[],value : string) : string[] 
{
    return [value,...Array];
}

let demoArray = [3,4,5];

const returnedValue = AddArray(demoArray,'string');
console.log(returnedValue);

