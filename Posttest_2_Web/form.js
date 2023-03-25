form()
function form(){
    let data = sessionStorage.getItem("data");
    data = JSON.parse(data);
    const nama = data['nama'];
    const email = data['email'];
    const checkbox = data['checkbox'];
    const pesan = data['address'];
    const radio = data['radio'];
    const Gender = data['Gender'];
    
    const userInputNama = document.getElementById('nama_form');
    const userInputEmail = document.getElementById('email_form');
    const userInputCheckbox = document.getElementById('checkbox_form');
    const userInputAddress = document.getElementById('pesan_form');
    const userInputRadio = document.getElementById('radio_form');  
    const userInputGender = document.getElementById('gender_form');

    userInputNama.innerHTML =     "Nama                                     : " + nama;
    userInputEmail.innerHTML =    "Email                                    : " + email;
    userInputAddress.innerHTML =   "Alamat                                   : " + pesan;
    userInputRadio.innerHTML =    "Paket                                    : " + radio;
    userInputGender.innerHTML=     "Jenis Kelamin                            : " + Gender;
    userInputCheckbox.innerHTML = "Pastikan data anda benar !               : " + checkbox;
}