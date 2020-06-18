import React, {Component} from 'react';
import './Style.css';
import {observer, inject} from 'mobx-react';


//klasa gdy potrzebuje przechowywac stan obiektu
@inject("dataStore")
@inject("userStore")
@observer
class AddTvSeries extends Component{

   

    handleSubmit=(e)=>{
        e.preventDefault();

        this.props.dataStore.addTvSeries();
        
    }

    render(){
        return this.props.userStore.isLoggedIn ? (
            <div className="container">
                <h3 className="center blue-text">Add new TvSeries to list</h3>
                <form >
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" onChange={this.props.dataStore.setTitle}
                     value={this.props.dataStore.title}  />
                    <label htmlFor="title">Number of seasons: </label>
                    <input type="text" id="number" onChange={this.props.dataStore.setNumber}
                     value={this.props.dataStore.number} />
                    <label htmlFor="title">Grade: </label>
                    <input type="text" id="grade" onChange={this.props.dataStore.setGrade}
                     value={this.props.dataStore.grade}/>
                    <label htmlFor="title">Description(optional): </label>
                    <input type="text" id="grade" onChange={this.props.dataStore.setDesc}
                     value={this.props.dataStore.desc}/>
                    <button onClick={this.handleSubmit}>Add</button>
                </form>
            </div>
        ) :(
            <div className="container">
                <h3 className="center blue-text">Sorry :(</h3>
                <h5 className="center blue-text">You must be logged in to add something to your list</h5>
            </div>
        )

    }
}

export default AddTvSeries