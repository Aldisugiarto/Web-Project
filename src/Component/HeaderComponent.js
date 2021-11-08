/**********************************************************/
/* Section      : Header Component                        */
/* Author       : Aldi Sugiarto                           */
/* Date         : August, 30th 2021                       */
/**********************************************************/

/**********************************************************/
/*                        Import Library                  */
/**********************************************************/
import React from "react"
import './StyleComponent.css'
import Logo from './assets/Logo_cropped.png'

/**********************************************************/
/*          Create header class                           */
/**********************************************************/
class Header extends React.Component{
    render(){
    return(
        <>
            <div class="header">
                <img href="#default" src={Logo} alt="Company Logo" className="App-Logo-IKAL" />
                <div class="header-right">
                    <a href="#home" class="active">Home</a>
                    <a href="#Contact">Contact</a>
                    <a href="#About">About</a>
                </div>
            </div>
        </>
    )
    }
}

export default Header;