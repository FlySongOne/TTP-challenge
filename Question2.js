// Question 2 -- stringReformatting(string): The string s contains dashes that split it into groups of characters. 
// You are given an integer k that represents the number of characters in groups that your output should have. 
// Your goal is to return a new string that breaks s into groups with a length of k by placing dashes at the correct intervals. 
// If necessary, the first group of characters can be shorter than k. It is guaranteed that there are no consecutive dashes in s. 
// For s = "2-4a0r7-4k" and k = 4, the output should be stringReformatting(s, k) = "24a0-r74k"; 
// The input string "2-4a0r7-4k" is split into three groups with lengths of 1, 5 and 2. Since k = 4, 
// you need to split the string into two groups of 4 characters each, making the output string "24a0-r74k". 
// For s = "2-4a0r7-4k" and k = 3, the output should be stringReformatting(s, k) = "24-a0r-74k". 
// Given the same input string and k = 3, split the string into groups of 2, 3, and 3 characters to get the output string of "24-a0r-74k".

function stringReformatting(s, k) {
  
    let str ="";
    let reversed = "";
    let counter = 0;
    let result =""; 
    // while this for loop iterates, str will be concatenated without - from s variable
    for(let i = 0; i < s.length ; i++ ){
      
      if( s[i] !== "-" ) {
        str += s[i];
      
      } 
      
    }
  
    // if counter is multiple of k, concat - to reversed variable 
    for(let j = str.length-1; j >= 0; j-- ){
      
      if( counter % k  === 0 && counter !== 0 ){   
        
        reversed += "-"; 
     
      }
      counter++;
     
      reversed += str[j];
      
    }
    // iterating to reverse the reversed string 
    for(let a = reversed.length-1; a >= 0; a --){
      result += reversed[a];
    
    }
    return result;
     
  }
  
  stringReformatting("2-4a0r7-4k", 2);
  stringReformatting("2-4a0r7-4k", 3);
  stringReformatting("2-4a0r7-4k", 4);
  