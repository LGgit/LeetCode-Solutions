/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   var found = [];
   for(var i=0;i<nums.length-1;i++){
   	for(var j=i+1;j<nums.length;j++){
   		if(nums[i] + nums[j]=== target && found.length<2){
   			found.push(i);
   			found.push(j);
   		}
   	}
   	
   }
   return found;
    
};



twoSum([1,2,3,7,8],9);
