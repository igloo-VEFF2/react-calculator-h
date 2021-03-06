import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            total: 0
        } 
        this.calculate = this.calculate.bind(this);
        this.updateFirstNumber = this.updateFirstNumber.bind(this);
        this.updateSecondNumber = this.updateSecondNumber.bind(this);
    }

    calculate(event) {
        let calcTotal = parseInt(this.state.number1) + parseInt(this.state.number2);

        this.setState({
            total: calcTotal
        });
    }

    updateFirstNumber(event) {
        this.setState({ 
            number1: event.target.value
        });
    }

    updateSecondNumber(event) {
        this.setState({
            number2: event.target.value
        });
    }

   render() {
       var total = this.state.total;
       var number1 = this.state.number1;
       var number2 = this.state.number2;
      return (
         <div>
             <h1>Adding two numbers together</h1>
             <input type="number" name="num1" value={number1} onChange={this.updateFirstNumber}/>
             <input type="number" name="num2" value={number2} onChange={this.updateSecondNumber}/>
             <button onClick={this.calculate}>Calculate</button>
             <h1>Sum: {total}</h1>
         </div>
      );
   }
}

export default App;