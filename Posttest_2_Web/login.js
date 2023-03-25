let users = []
let form = document.getElementById('form')


form.addEventListener("submit",function (e) {
    document.getElementById('result').innerHTML=""
    e.preventDefault(); 
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value

    //if (username == "" || password == "" || email == "") {
      //  alert("Harap isi semua kolom");}
    
    let user = {
        username: username,
        password: password,
        email: email
    }

    document.getElementById('username').value=""
    document.getElementById('password').value=""
    document.getElementById('email').value=""

    if (localStorage.getItem('users')) {
        users = localStorage.getItem('users')
        users = JSON.parse(users)
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        alert("Yeay, You're one of us now !")
        window.location.href = "login.html"
    }
    else {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        alert("Yeay, You're one of us now !")
        window.location.href = "login.html"
      
    }
})
const tombol = document.getElementById("masuk");
tombol.onclick = login;
function redirect() {
    window.location.href = 'index.html';
}


function login(e){
    const login = document.querySelector('.login');
    e.preventDefault();
    const emailAddress = document.getElementById("email").value;
    const passWord = document.getElementById("password").value;

    // ngambil nilai array dari localstorage
    const users = JSON.parse(localStorage.getItem("users"));
    // localStorage.setItem("username-logged-in", users[i].username)

    //Periksa apakah array users ada dan tidak kosong
    if (users && users.length) {
    // Melakukan perulangan pada array 
    for (let i = 0; i < users.length; i++) {
        if (emailAddress == users[i].email && passWord == users[i].password) {
            localStorage.setItem("username-logged-in", users[i].username)
            window.location.href="motor.html";
            alert("Yeah, You're in!");
            return; 
        }
    }
    }

    // jika salah penginputan
    alert("Invalid Email or Password");
    }
