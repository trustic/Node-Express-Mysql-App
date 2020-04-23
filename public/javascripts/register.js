function registerSubmit(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var loginData = {
        username: username,
        password: password,
        name:name,
        email:email
    }
    fetch('http://localhost:3000/api/user/create',{
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        response = response.json().then(data=>{
            if(data.success){
                window.location.href='/login';
            } else {
                window.location.href='/register';
            }
        })
    }).catch(error=>{
        console.log(error);
    });
}
function backClick(){
    window.location.href = `/login`;
}
