import React from 'react';
import '../App.css';
import InputFields from './InputFields'

class Card extends React.Component {
    render(){
      return(
        <div>
          <div className='main-card'>
            <InputFields
                rent={this.props.rent}
                car={this.props.car}
                loans={this.props.loans}
                utilites={this.props.utilites}
                giving={this.props.giving}
                gas={this.props.gas}
                groceries={this.props.groceries}
                carMaintainance={this.props.carMaintainance}
                miscilanious={this.props.miscilanious}
                personalSpending={this.props.personalSpending}
                saving={this.props.saving}
                handleChange={this.props.handleChange}
            />
          </div>
        </div>
      )
    }
  }

export default Card;