import './App.css';
import React from 'react';
import TotalsCard from './components/TotalsCard';
import Display from './components/Display';
import Card from './components/Card';
import Header from './components/Header';


  class App extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        notAccountedFor: 0,
        totalIncome: 0,
        rent: 0,
        loans: 0,
        utilites: 0,
        giving: 0,
        gas: 0,
        groceries: 0,
        carMaintainance: 0,
        miscilanious: 0,
        personalSpending: 0,
        saving: 0,
      }
    }

  updateNotAccountedFor = () => {
      this.setState({
        notAccountedFor: this.state.totalIncome - this.state.rent - this.state.loans - this.state.utilites - this.state.giving - this.state.gas - this.state.groceries - this.state.carMaintainance - this.state.miscilanious - this.state.personalSpending - this.state.saving 
      })
    }

  handleChange = (e) => {
    const key = [e.target.name]
    this.setState({
      [key]: parseInt(e.target.value),
    }, this.updateNotAccountedFor)
  }  

    render(){
      return (
        <div className="App">
            <Header/>
            <div className={"totals-card"}>
              <TotalsCard
                totalIncome={this.state.totalIncome}
                handleChange={this.handleChange}
                notAccountedFor={this.state.notAccountedFor}
              />
            </div>
            <div className={"display-card"}>
          <Display
              rent={this.state.rent}
              loans={this.state.loans}
              utilites={this.state.utilites}
              giving={this.state.giving}
              gas={this.state.gas}
              groceries={this.state.groceries}
              carMaintainance={this.state.carMaintainance}
              miscilanious={this.state.miscilanious}
              personalSpending={this.state.personalSpending}
              saving={this.state.saving}
              />
        </div>
          <Card
            rent={this.state.rent}
            loans={this.state.loans}
            utilites={this.state.utilites}
            giving={this.state.giving}
            gas={this.state.gas}
            groceries={this.state.groceries}
            carMaintainance={this.state.carMaintainance}
            miscilanious={this.state.miscilanious}
            personalSpending={this.state.personalSpending}
            saving={this.state.saving}
            handleChange={this.handleChange}
          />
        </div>
  );
}
}

export default App;
