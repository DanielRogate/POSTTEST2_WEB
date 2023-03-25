// let nm = document.getElementById("nm").value;
// let adress = document.getElementById("adress").value;
// let email = document.getElementById("eml").value;
// let Gender = document.querySelector("#Gender").value;
// let package = document.querySelector('input[name="radio"]:checked').value;

// Fungsi simpan data pada session storage
function simpan(){
    // clearing session storage
    sessionStorage.clear()
    
    const userInputNama = document.getElementById('nama');
    const userInputAddress = document.getElementById('address');
    const userInputEmail = document.getElementById('email');
    const userInputGender = document.querySelector('#Gender');
    const userInputRadio = document.querySelector('input[name="radio"]:checked');  
    const userInputCheckbox = document.getElementsByName('checkbox');
    
    
    
    let nama = sessionStorage.getItem("nama");
    let email = sessionStorage.getItem("email");
    let checkbox = sessionStorage.getItem("checkbox") || [];
    let address = sessionStorage.getItem("address");
    let radio = sessionStorage.getItem("radio");
    let Gender = sessionStorage.getItem('#kelamin');


      // push 
      nama = userInputNama.value || nama;
      
     
      email = userInputEmail.value || email;
      
     
      address = userInputAddress.value || address;
      
      Gender = userInputGender.value || Gender;
    
      radio = userInputRadio.value || radio;
      
        
      for (var i=0; i<userInputCheckbox.length; i++) {
          if (userInputCheckbox[i].checked) {
              checkbox.push(userInputCheckbox[i].value);
          }
      }

      let data ={
        'nama': nama,
        'email': email,
        'checkbox' : checkbox,
        'address' : address,
        'radio' : radio,
        'Gender' : Gender
       }

       sessionStorage.setItem("data", JSON.stringify(data));
}