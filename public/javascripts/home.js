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
function showIfLoggedIn() {
    var username = getCookie("username");
    if (username) {
        fetch('http://localhost:3000/api/user').then(result => {
            result = result.json().then(data => {
                var loggedIn = document.getElementById("loggedIn");
                loggedIn.style.display = "block";
                document.getElementById("email").innerHTML = data.result[0].email;
            })
        })
    }
}
function checkLoggedIn() {
    var usernameCookie = getCookie("username");
    if (usernameCookie) {
        window.location.href = `/${usernameCookie}`;
    } else {
        window.location.href = '/login';
    }
}
function signoutClick(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '/login';
}
showIfLoggedIn();