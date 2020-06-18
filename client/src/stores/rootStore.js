
import {UserStore} from './userStore';
import {RegisterStore} from './registerStore';
import {DataStore} from './dataStore';

class RootStore{
    constructor(){
        this.dataStore = new DataStore(this);
        this.registerStore = new RegisterStore(this);
        this.userStore = new UserStore(this);
    }
}

const rootStore = new RootStore();
export default rootStore;