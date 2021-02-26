module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];

  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++){

      if(bracketsConfig[j][0] === bracketsConfig[j][1]){
        if(str[i] === bracketsConfig[j][0]){
          if(str[i] === stack[stack.length - 1]){
            stack.pop();
          } else {
            stack.push(str[i]);
          }
        }
      }
      else if(str[i] === bracketsConfig[j][0]){
        stack.push(str[i]);
      }
      else if(str[i] === bracketsConfig[j][1] && stack.pop() != bracketsConfig[j][0]){
        return false;
      }
    }
  }

  if(stack.length === 0)
    return true;
  else
    return false;
}
