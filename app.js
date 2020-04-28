// init GitHub
const github = new Github;
// init UI class
const ui = new UI;

// search input
const searchUser = document.getElementById('search-user');


// searchinput eventlistener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== ''){
// make http call
    github.getUser(userText)
    .then(data => {
    if(data.profile.message === 'Not Found'){
        // show alert
        alert('user not found')
        
        // show profile
    } else {
        ui.showProfile(data.profile);
    }
        })
    } else {
        // clear profile
    }
});

