function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;
}

function loginSubmit(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginData = {
        username: username,
        password: password
    }
    fetch('http://localhost:3000/api/auth',{
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        response = response.json().then(data=>{
            if(data.result==="CookieExists"){
                window.location.href = `/${getCookie('username')}`;
            } else {
                if(data.success){
                    window.location.href = `/${getCookie('username')}`;
                }
            }
        })
    }).catch(error=>{
        console.log(error);
    });
}
function backClick(){
    window.location.href = `/`;
}



