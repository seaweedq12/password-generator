// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function reload(){
  reload = location.reload();
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword(){

    var Pchar = "abcdefghijklmnopqrstuvwxyza"; //27 another 'a' was added so that Pchar != PUchar this is important in the equation on the bottom
    var PUchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
    var Pnum = "0123456789"; //10
    var PSchar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" ; // 33
    var Result = "";
    var Plength = prompt("Enter length of Password between 8 and 128");
    
    if(!Plength||Plength>128||Plength<8){
      Result = "Error, Wrong input"
      return Result;
    }
    
    //instead of prompting the user for input, made it easier for the user using confirm 
    if(confirm("Include Lowercase Letters?")){  //L
      Pin = Pchar;
     if(confirm("Include Uppercase Letters?")){  //L, U
        Pin = Pchar.concat(PUchar);
        if(confirm("Include Numbers?")){  //L, U, N
          Pin = Pchar.concat(PUchar).concat(Pnum);
          if(confirm("Include Special Letter?")){  //L, U, N, S
            Pin = Pchar.concat(PUchar).concat(Pnum).concat(PSchar);
          }
        }else if(confirm("Include Special Letter?")){ //L, U, S
          Pin = Pchar.concat(PUchar).concat(PSchar);
        }
      }else if(confirm("Include Numbers?")){  //L, N
        Pin = Pchar.concat(Pnum);
        if(confirm("Include Special Letter?")){  //L, N, S
          Pin = Pchar.concat(Pnum).concat(PSchar);
        }
      }else if(confirm("Include Special Letter?")){  //L, S
        Pin = Pchar.concat(PSchar);
      }
    }else if(confirm("Include Uppercase Letters?")){  //U
      Pin = PUchar;
      if(confirm("Include Numbers?")){  //U, N
        Pin = PUchar.concat(Pnum);
        if(confirm("Include Special Letter?")){  //U, N, S
          Pin = PUchar.concat(Pnum).concat(PSchar);
        }
      }else if(confirm("Include Special Letter?")){ //U, S
        Pin = PUchar.concat(PSchar);
      }
    }else if(confirm("Include Numbers?")){  //N
      Pin = Pnum;
      if(confirm("Include Special Letter?")){  //N, S
        Pin = Pnum.concat(PSchar);
      }
    }else if(confirm("Include Special Letter?")){  //S
      Pin = PSchar;
    }else{
      Result = "Error, Character type not chosen"
      return Result;
    }

    //loop that prints the password in a random manner
    for (var i = 0, n = Pin.length; i < Plength; ++i) {
      Result += Pin.charAt(Math.floor(Math.random() * n));
    }
    
    //this code below ensure that the character types at least appear once when the array is added
    //this method was used instead of the .include method to make coding shorter
    //if another 'a' wasn't added in the variable "Pchar" this method will not work 
    var p = Pin.length;
    var a = Pchar.length;
    var b = PUchar.length;
    var c = Pnum.length;
    var d = PSchar.length;

    if(p == a + b){
      Result = Result.slice(0, Plength - 2) + Pchar.charAt(Math.floor(Math.random() * a)) + PUchar.charAt(Math.floor(Math.random() * b));
      return Result;
    }else if(p == a + c){
      Result = Result.slice(0, Plength - 2) + Pchar.charAt(Math.floor(Math.random() * a)) + Pnum.charAt(Math.floor(Math.random() * c));
      return Result;
    }else if(p == a + d){
      Result = Result.slice(0, Plength - 2) + Pchar.charAt(Math.floor(Math.random() * a)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == b + c){
      Result = Result.slice(0, Plength - 2) + PUchar.charAt(Math.floor(Math.random() * b)) + Pnum.charAt(Math.floor(Math.random() * c));
      return Result;
    }else if(p == b + d){
      Result = Result.slice(0, Plength - 2) + PUchar.charAt(Math.floor(Math.random() * b)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == c + d){
      Result = Result.slice(0, Plength - 2) + Pnum.charAt(Math.floor(Math.random() * c)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == a + b + c){
      Result = Result.slice(0, Plength - 3) + Pchar.charAt(Math.floor(Math.random() * a)) + PUchar.charAt(Math.floor(Math.random() * b)) + Pnum.charAt(Math.floor(Math.random() * c));
      return Result;
    }else if(p == a + b + d ){
      Result = Result.slice(0, Plength - 3) + Pchar.charAt(Math.floor(Math.random() * a)) + PUchar.charAt(Math.floor(Math.random() * b)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == a + c + d ){
      Result = Result.slice(0, Plength - 3) + Pchar.charAt(Math.floor(Math.random() * a)) + Pnum.charAt(Math.floor(Math.random() * c)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == b + c + d){
      Result = Result.slice(0, Plength - 3) + PUchar.charAt(Math.floor(Math.random() * b)) + Pnum.charAt(Math.floor(Math.random() * c)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else if(p == a + b + c + d){
      Result = Result.slice(0, Plength - 4) + Pchar.charAt(Math.floor(Math.random() * a)) + PUchar.charAt(Math.floor(Math.random() * b)) + Pnum.charAt(Math.floor(Math.random() * c)) + PSchar.charAt(Math.floor(Math.random() * d));
      return Result;
    }else{
      return Result;
    }
    
  }
  
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

