import { observable, action } from 'mobx';
import axios from 'axios';

export class RegisterStore {


  constructor(rootStore){
    this.rootStore = rootStore;
  }

    @observable rName= "";
    @observable rEmail= "";
    @observable rPassword= "";
    @observable error="";


    @action registerUser(){
        axios.post("http://localhost:9000/user/register", {
            name: this.rName,
            email: this.rEmail,
            password: this.rPassword
          })
          .then( res =>{
            this.rName="";
            this.rEmail="";
            this.rPassword="";
            this.rootStore.userStore.wantToRegister = false;
           
          })
          .catch(error => {
            
            this.error=error.response.data;
            this.rName="";
            this.rEmail="";
            this.rPassword="";
          });
    }


    @action setName=(p)=>{
        this.rName=p.target.value;
    }

    @action setEmail = (e) => {
        
        this.rEmail=e.target.value;
    }
    @action setPassword=(p)=>{
        this.rPassword=p.target.value;
    }
    
}