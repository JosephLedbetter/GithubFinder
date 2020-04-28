// es6 classes
class Github {
    constructor(){
        this.client_id = '5de6e62ff20d8c537cf1';
        this.client_secret = 'a9c643b0f7775ed1556efb3034405ee79fb70d41';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);
        const profile = await profileResponse.json();
        
        return {
            profile
        } 
    }
}