import React from 'react'
import {data} from './data'

class Info extends React.Component{
    constructor(){
        super()
        this.state={
            data: data
        }
    }
    

    
    render(){
        console.log(this.props.index)
        // const {data, index} = this.state
        return(
            <div className='theOne'>
        <div className='left'>
        <p className='name'>{this.state.data[this.props.index].name.first} {this.state.data[this.props.index].name.last}</p>
        <div className='stuff'>
        <p>From: {this.state.data[this.props.index].city}, {this.state.data[this.props.index].country}</p>
        <p>Job Title: {this.state.data[this.props.index].title}</p>
        <p>Employer: {this.state.data[this.props.index].employer}</p>
        </div>
        <ul>Favorite Movies:
            <div className='lists'>
        <ul>1. {this.state.data[this.props.index].favoriteMovies[0]}</ul>
        <ul>2. {this.state.data[this.props.index].favoriteMovies[1]}</ul>
        <ul>3. {this.state.data[this.props.index].favoriteMovies[2]}</ul>
            </div>
        </ul>


        </div>
        <div className='right'>
            <p className='index'>{this.state.data[this.props.index].id} / 25</p>
        </div>
            </div>
        )
    }
}
export default Info