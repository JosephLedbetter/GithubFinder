// es6 classes
class Github {
    constructor(){
        this.client_id = '5de6e62ff20d8c537cf1';
        this.client_secret = 'a9c643b0f7775ed1556efb3034405ee79fb70d41';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const profile = await repoResponse.json();

        return {
            profile,
            repos
        } 
    }
}