import React from 'react';
//import LinkedStateMixin from 'react-addons-linked-state-mixin'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            total: 0
        } 
        this.calculate = this.calculate.bind(this);
        this.updateNumber = this.updateNumber.bind(this);
    }

    calculate(e) {
        this.setState({
            total: this.state.number1 + this.state.number2,
        });
        console.log(this.state.number1);
    }

    updateNumber(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({ 
            [name]: value
        })
    }
    /*updateState(e) {
        this.SetState({

        })
    }*/

   render() {
       var total = this.state.total;
      return (
         <div>
             <h1>Adding two numbers together</h1>
             <input type="text" name="num1" value={this.state.number1} onChange={this.updateNumber}/>
             <input name="num2" value={this.state.number2} onChange={this.updateNumber}/>
             <button onClick={this.calculate}>Calculate</button>
             <h1>Sum: {total}</h1>
         </div>
      );
   }
}

export default App;