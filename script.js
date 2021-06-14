// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword(){
    var Pchar = "abcdefghijklmnopqrstuvwxyz";
    var Pnum = "0123456789";
    var PUchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var PSchar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" ;
    console.log(PSchar);
    var Result = "";
    var Plength = prompt("Enter length of Password between 8 and 128");
    if(!Plength||Plength>128||Plength<8){
      Result = "error"
      return Result;
    }
    if(confirm("Include Capital Letters?")){
      Pchar = Pchar.concat(PUchar);
      if(confirm("Include Numbers?")){
        Pchar = Pchar.concat(Pnum);
        if(confirm("Include Special Letter?")){
          Pchar = Pchar.concat(PSchar);
        }
      }else if(confirm("Include Special Letter?")){
        Pchar = Pchar.concat(PSchar);
      }
    
    }else if(confirm("Include Numbers?")){
      Pchar = Pchar.concat(Pnum);
      if(confirm("Include Special Letter?")){
        Pchar = Pchar.concat(PSchar);
      }
    }else if(confirm("Include Special Letter?")){
      Pchar = Pchar.concat(PSchar);
    }
    

    for (var i = 0, n = Pchar.length; i < Plength; ++i) {
      Result += Pchar.charAt(Math.floor(Math.random() * n));
  }
    return Result;
  }
 
      
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
