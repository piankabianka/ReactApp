import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

//const TvSeries=({tvSeries, deleteTvSeries})=>{

@inject("dataStore")
@observer
class TvSeries extends Component {

    state = {
        tvSeries: []
    }

    deleteTvSeries = (id) => {
        this.props.dataStore.deleteTvSeries(id);
        
    }


    componentDidMount() {
        this.props.dataStore.getTvSeries();
    }

    handleSortByTitle = ()=>{
        this.props.dataStore.sortByTitle();
        
    }

    handleSortByGrade = ()=>{
        this.props.dataStore.sortByGrade();
        
    }

    handleSortByNumber = ()=>{
        this.props.dataStore.sortByNumber();
        
    }

    handleFindByTitle=()=>{
        this.props.dataStore.findByTitle();

    }


    render() {

        const tvSeries = this.props.dataStore.seriesToFind === ""?
        this.props.dataStore.tvSeriesList
        :
        this.props.dataStore.filteredtvSeriesList;
        ;
        const tvSeriesList = tvSeries.length ? (
            tvSeries.map(s => {
                return (
                    <div className="post card" key={s._id}>

                        
                            <Link to={'/specyfic/' + s._id}>
                                <h5 className="collection-item" > {s.title}</h5>
                            </Link>

                            <ul className="collection-item" >
                                <li>Number of seasons: {s.number}</li>
                                <li>Grade: {s.grade}</li>
                            </ul>
                        
                    </div>
                )

            })
        ) : (
                <p className="center">Your list is empty, feel free to add some series</p>
            )

        return (
            <div className="tvSeries container">
                <h3 className="center blue-text">List of your TvSeries</h3>
                <div className="ssearch">
                    <form onChange={this.handleFindByTitle}>
                        <label className="sort-label">Find by title: </label>
                        <input type="text" id="title" onChange={this.props.dataStore.setSeriesToFind}
                         value={this.props.dataStore.seriesToFind}  />
                    </form>
                </div>
                <div className="sort-inputs">
                    <label className="sort-label">
                        <input type="radio" name="sort" onChange={this.handleSortByTitle}/> 
                        Alphabetically
                    </label>
                    <label className="sort-label">
                        <input type="radio" name="sort" onChange={this.handleSortByGrade} /> 
                        Highest rated
                    </label>
                    <label className="sort-label">
                        <input type="radio" name="sort" onChange={this.handleSortByNumber}/> 
                        Number of seasons: high to low
                    </label>
                </div>
                {tvSeriesList} 
            </div>
        )
    }
}

export default TvSeries