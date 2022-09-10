import React from 'react';
import '../App.css';

class TotalsCard extends React.Component {
    render(){
      return(
        <div className='total-card'>
          <div className={"totals-content"}>
          <h3>Income</h3> 
            <input
                onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
           type="number" name="totalIncome" placeholder="Income" onChange={this.props.handleChange}/>
            <h4>Monthly Income : ${this.props.totalIncome}</h4>
            <h4>Not Accounted For : ${this.props.notAccountedFor}</h4>
          </div>
        </div>
      )
    }
  }
export default TotalsCard;
