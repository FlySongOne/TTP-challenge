// Question 3 -- getClosingParen(sentence, openingParenIndex): 

// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing." 

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis. 

// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).


// I assumed opening and closing parentheses are in pair. 

let sentence = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";


function getClosingParen(str, index){
  // if a character at index position is opening parenthesis 
  if( str[index] === "("){
    let opening = str[index];
  
    let closing = ")";
    let openingIndexArr = [];
    let closingIndexArr = [];
    let closingIndex = 0;
  
    // push index position of opening parenthesis and closing parenthesis to arrays 
    for(let i =0; i < str.length; i++) {
      if(str[i] === opening) {
   
        openingIndexArr.push(i); 
      }
      if(str[i] === closing){
    
        closingIndexArr.push(i);
      }
    
    }
    // if the index number is the same as one of opening index arr element, closing index will be determmined.
    // by subtracting the matched openingIndexArr index from the last element index. 
    for(let j = 0; j < openingIndexArr.length; j++) {
      if(index === openingIndexArr[j]){
        closingIndex = (closingIndexArr.length-1) - j;   
        console.log(closingIndex);
      }  

    }
    // return closingIndex number 
    return closingIndexArr[closingIndex];
    } else {
      // if there is no opening parenthesis at index position 
      return "No opening parenthesis at index position "+index;
    }
}