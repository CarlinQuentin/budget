import React from 'react';
import '../App.css';

class Header extends React.Component {
    render(){
      return(
        <div className={"header"}>
            <h1 className={"header-txt"}>
              Budget Creator
            </h1>
        </div>
      )
    }
  }
export default Header;