import React from 'react';
import '../App.css';

class TotalsCard extends React.Component {
    render(){
      return(
        <div className='total-card'>
          <h3>Income</h3> 
            <input
                onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
          type="number" name="totalIncome" placeholder="Income" onChange={this.props.handleChange}/>
          <ul>Monthly Income : ${this.props.totalIncome}</ul>
          <ul>Not Accounted For : ${this.props.notAccountedFor}</ul>
        </div>
      )
    }
  }
export default TotalsCard;
