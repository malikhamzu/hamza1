// var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//  var numbers = '1234567890'

//  var password = prompt('Password')

//  var minLength = false
//  var capitalLetterHe = false
//  var numberHe = false

//  if (password.length >= 8) minLength = true
//  for (var i = 0; i < password.length; i++) {
//      console.log(password[i])
//      if (capitalLetters.indexOf(password[i]) !== -1) {
//          capitalLetterHe = true
//      }
//      if (numbers.indexOf(password[i]) !== -1) {
//          numberHe = true
//      }
//  }

//  if (minLength && capitalLetterHe && numberHe) {
//      alert('Password is ok')
//  } else {
//      alert('Password is not ok')

//  }





const arr1=[11,12,13,14,15,16,17,18];
const arr2=[11,133,13,144,15,188,177,18];
let arr3=[];

for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            arr3.push(arr1[i])
        }
    }
}
console.log(arr3)




let nestedarray =[[1,2],[3,4],[5,6]];
let singlrarray =[];

for(let i=0;i<nestedarray.length;i++){
    for(j=0;j<nestedarray[i].length;j++){
        singlrarray.push(nestedarray[i][j]);
    }
}
console.log(singlrarray); 



function validatepassword(password){
    let hasalphabet=/[a-az-z]/.test(password);

    
    let hasnumber=/[0-9]/.test(password);

    let doesnotstartwithnumber =!/^[0-9]/.test(password);

    let atleastsixcharcterlong = password.lenght >= 6;


    if(hasalphabet && hasnumber && doesnotstartwithnumber && atleastsixcharcterlong){
        return true;
    }else{
        return false;
    }

}



password = prompt ("Enter a password");
while(!validatepassword(password)){
    password =prompt("Enter a valid password and the password cantain atleast six charcter and same number")
}

console.log("password update!")