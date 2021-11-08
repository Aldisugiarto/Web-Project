/**********************************************************/
/* Section      : Counter Component                       */
/* Author       : Aldi Sugiarto                           */
/* Date         : August, 30th 2021                       */
/**********************************************************/

/**********************************************************/
/*          Import Library for counter component          */
/**********************************************************/
import React from "react";
import react, { Component } from "react"

/**********************************************************/
/*          Create counter component class                */
/**********************************************************/
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            text: ""
        };
    } /* closed parentheses of constructor */

    componentDidUpdate(){
        if(this.state.text === ""){
            this.testMethode()
        }
    } /* closed parentheses of component did update*/

    handleClick = () => {
        this.setState( prev => ({count: prev.count + 1}))
    }/* closed parentheses of handle click */
    testMethode(){
        if (this.state.count === 5) {
            this.setState({
                text: "Life cycle of react"
            })
        }
    }/* closed parentheses of testMethode */

    render(){
        return(
            <>
                <div>
                    <h3>Click button bellow will update value: {this.state.count}</h3>
                    <p>{this.state.text}</p>
                    <button className="block" onClick = {this.handleClick}>Update value</button>
                </div>
            </>
        )
    }/* CLosed parentheses of render */

}/* Closed parentheses of Class counter */

 /* Export this component to App.js */
export default Counter;