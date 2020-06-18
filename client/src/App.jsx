import React, {Component} from 'react';
import TvSeries from './components/TvSeries';
import AddTvSeries from './components/AddTvSeries';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SingleTvSeries from './components/SingleTvSeries';
import {Provider} from 'mobx-react';
import rootStore from './stores/rootStore';



class App extends Component{
  render(){
    return(
      <Provider dataStore={rootStore.dataStore} userStore={rootStore.userStore}
       registerStore={rootStore.registerStore}>
      <BrowserRouter>
        <div className="filmweb">
          <Navbar/>
          <Route exact path='/' render={ (props)=> <TvSeries />} />
          <Route exact path='/add' render={(props)=> <AddTvSeries  />} />
          <Route exact path='/login' render={(props)=> <Login/>} />
          <Route path="/specyfic/:tv_id" component={SingleTvSeries} /> 
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
