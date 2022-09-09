import './App.css';
import React from 'react';
import { Chart } from "react-google-charts";


  class App extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        notAccountedFor: 0,
        totalIncome: 0,
        rent: 0,
        car: 0,
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
        notAccountedFor: this.state.totalIncome - this.state.rent - this.state.car - this.state.loans - this.state.utilites - this.state.giving - this.state.gas - this.state.groceries - this.state.carMaintainance - this.state.miscilanious - this.state.personalSpending - this.state.saving 
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
              car={this.state.car}
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
            car={this.state.car}
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

class Display extends React.Component {
  render(){
    const data = [
      ["Budget", "Cost"],
      ["Rent", this.props.rent],
      ["Car", this.props.car],
      ["Loans", this.props.loans],
      ["Utilities", this.props.utilites],
      ["Giving", this.props.giving],
      ["Gas", this.props.gas],
      ["Groceries", this.props.groceries],
      ["Car Maintainance", this.props.carMaintainance],
      ["Miscilanious", this.props.miscilanious],
      ["Personal Spending", this.props.personalSpending],
      ["Saving", this.props.saving],
    ]
    const options = {
      title: "Monthly Budget",
    };

    return(
      <div className={"chart"}>
      <Chart
       chartType="PieChart"
       options={options}
       data={data}
       width={"100%"}
       height={"50vh"}
       />
       </div>
    );
  };
}

class InputFields extends React.Component {
render(){
    return(
      <form>
        <div className={"input-fields"}>
        <h3>Rent</h3> 
          <input 
             onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
        type="number" name="rent" placeholder="Rent" onChange={this.props.handleChange}/>
        <h3>Car</h3> 
          <input
              onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
        type="number" name="car" placeholder="Car" onChange={this.props.handleChange}/>
        <h3>Loans</h3>
           <input
              onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
        type="number" name="loans" placeholder="Loans" onChange={this.props.handleChange}/>
        <h3>Utilites</h3>
           <input
              onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
        type="number" name="utilites" placeholder="Utilites" onChange={this.props.handleChange}/>
        <h3>Giving</h3>
           <input
              onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
        type="number" name="giving" placeholder="Giving" onChange={this.props.handleChange}/>
        <h3>Gas</h3>
           <input
              onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
        type="number" name="gas" placeholder="Gas" onChange={this.props.handleChange}/>
        <h3>Groceries</h3>
           <input
              onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
        type="number" name="groceries" placeholder="Groceries" onChange={this.props.handleChange}/>
        <h3>Car Maintainance</h3>
           <input
              onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
        type="number" name="carMaintainance" placeholder="Car Maintainance" onChange={this.props.handleChange}/>
        <h3>Miscilanious</h3>
           <input
              onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
        type="number" name="miscilanious" placeholder="Miscilanious" onChange={this.props.handleChange}/>
        <h3>Personal Spending</h3>
           <input
              onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
        type="number" name="personalSpending" placeholder="Personal Spending" nChange={this.props.handleChange}/>
        <h3>Saving</h3>
           <input
              onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            type="number" name="saving" placeholder="Saving" onChange={this.props.handleChange}/>
        </div>
      </form>
    )
  }
}

export default App;
