// init GitHub
const github = new Github;

// search input
const searchUser = document.getElementById('search-user');


// searchinput eventlistener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== ''){
// make http call
    github.getUser(userText)
    .then(data => {
        console.log(data)
    })
    }
});

