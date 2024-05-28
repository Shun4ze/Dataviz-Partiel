function twoSum(array, target) {
    const numMap = new Map();

   
    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i]; 

       
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        
        numMap.set(array[i], i); 
    }
    return null;
}


const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);

console.log(result); 
