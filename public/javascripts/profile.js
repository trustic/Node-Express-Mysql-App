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
function checkLoggedIn() {
    var usernameCookie = getCookie("username");
    if (usernameCookie == undefined) {
        window.location.href = '/login';
    }
}
function displayUserData() {
    fetch('http://localhost:3000/api/user').then(result => {
        result = result.json().then(data => {
            document.getElementById("email").innerHTML = data.result[0].email;
        });
    });
}
function displayPosts() {
    fetch('http://localhost:3000/api/posts').then(result => {
        result = result.json().then(data => {
            document.getElementById("posts").innerHTML = '';
            if(data.success){
                for (post of data.result) {
                    document.getElementById("posts").innerHTML += `<div class="post-card">
                                                                        <div class="post-header">
                                                                            <div class="username">User: ${post.username}</div>
                                                                            <div class="time">Post Created at: ${post.last_updated}</div>
                                                                        </div>
                                                                        <div class="post-content">
                                                                            ${post.content}
                                                                        </div>
                                                                    </div>`
                }
            }
        });
    });
}
function signoutClick() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '/login';
}
function displayContent() {
    displayUserData();
    displayPosts();
}

function createPostClick(){
    var username = getCookie("username")
    var postContent = document.getElementById("post-content").value;
    fetch('http://localhost:3000/api/posts/new',{
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:username,
            content: postContent
        })
    }).then(result => {
        result = result.json().then(data => {
            if(data.success){
                displayContent();
            } else {
                console.log(data.message);
            }
        });
    });
}
window.onload=function(){
    displayContent();
}