class Github{
    constructor() {
        this.client_Id='1bab86c6f0eca0f45864';
        this.client_secret='c0b580a0ed892e80004fcd3c8bf17c50a39d42e2';
    }
async getuser(user){
    const profileresponse=await fetch('https://api.github.com/users/${user}?client id={this.client_Id}&client_secret=${this.client_secret}');
    const profile=await profileresponse.json();
    return{
        profile
    }
}
}