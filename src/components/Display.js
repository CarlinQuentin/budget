import React from 'react';
import { Chart } from "react-google-charts";
import '../App.css';

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
export default Display;