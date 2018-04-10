//Question 1 -- sumOfTwo(a,b,v): You have two integer arrays, a and b, and an integer target value v. 
//Determine whether there is a pair of numbers, where one number is taken from a and the other from b, 
//that can be added together to get a sum of v. 
//Return true if such a pair exists, otherwise return false.


function sumOfTwo(a,b,v){
  
    for(let i =0; i < a.length; i +=1) {
        for(let j =0; j < a.length; j+=1) {
            if( a[i] + b[j] === v) {
                return true;
            }
        }
    }
    return false;
  
  }
  
  sumOfTwo([2,3,0], [1,4,9],5);
  sumOfTwo([2,3,-2], [2,6,3],0);