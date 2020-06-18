import { observable, action } from 'mobx';
import axios from 'axios';

export class UserStore {
    constructor(rootStore){
        this.rootStore = rootStore;
    }
    @observable isLoggedIn = "";
    @observable wantToRegister=false;
    @observable email= "";
    @observable password= "";
    @observable error="";

    @action loginUser(){
        axios.post("http://localhost:9000/user/login", {
            email: this.email,
            password: this.password
          })
          .then( res =>{
            this.isLoggedIn =res.data;
            this.wantToRegister=false;
            this.email="";
            this.password="";
          })
          .catch(error => {
            this.error=error.response.data;
            this.wantToRegister=false;
            this.email="";
            this.password="";
        });
    }


    @action setEmail = (e) => {
        
        this.email=e.target.value;
    }
    @action setPassword=(p)=>{
        this.password=p.target.value;
    }

}
