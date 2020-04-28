// search input
const searchUser = document.getElementById('search-user');


// searchinput eventlistener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== ''){
        console.log(userText)
    }
});