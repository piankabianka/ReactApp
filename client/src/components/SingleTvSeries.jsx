import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import './Button.css';



@inject("dataStore")
@inject("userStore")
@observer
class SingleTvSeries extends Component{

    deleteTvSeries=(id)=>{     
        this.props.dataStore.deleteTvSeries(id);   
      } 

    render(){


        const id = this.props.match.params.tv_id;
        
        const s = this.props.dataStore.tvSeriesList.find((s)=>{
            return s._id === id;
        })

        const oneSeries = s ? (
            this.props.userStore.isLoggedIn ? (
                <div>
                <div className="post card">
                    
                    <h3 className="center blue-text">{s.title}</h3>
                    <div align="center">
                        <label>Grade: {s.grade}</label>
                        <label>  Number of seasons: {s.number} </label>
                        <p className="display">{s.desc}</p>
                    </div>                   
                    
                </div>
                <div align="right">
                    <button className="test" onClick={()=>{this.deleteTvSeries(s._id)}}>Delete</button>
                </div>
            </div>
            ) : (
                <div>
                <div className="post card">
                    
                    <h3 className="center blue-text">{s.title}</h3>
                    <div align="center">
                        <label>Grade: {s.grade}</label>
                        <label>  Number of seasons: {s.number} </label>
                        <p className="display">{s.desc}</p>
                    </div>                   
                    
                </div>
            </div>
            )
            
        ):(
            <div className="tvSeries collection">
                <h4 className="center blue-text">Nothing to show here :(</h4>
                <p className="display" align="center">Select a TvSeries to see the details</p> 
            </div>
        )
        

        return(
            <div className="container">
                <h4>{oneSeries}</h4>
            </div>
        )
    }
}

export default SingleTvSeries