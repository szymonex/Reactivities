import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
// import logo from './logo.svg';
// import './App.css';
// import { cars } from './demo';
// import { CarItem } from './CarItem';
import axios from "axios";

class App extends Component {
  state = {
    values: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/values") //get method returns promise, możemy użyć metod then za pomocą których mówimy co chcemy zrobić jak już dostaniemy dane
      .then(response => {
        //console.log(response);
        this.setState({
          values: response.data
        });
      });

    // this.setState({
    //   values: [{id: 1, name: 'Value 101'}, {id: 2, name: "Value 102"}]
    // })
  }

  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>

      // <div className='App'>
      //   <header className='App-header'>
      //     <img src={logo} className='App-logo' alt='logo' />
      //     <ul>
      //       {this.state.values.map((value: any) => (
      //         <li key={value.id}>{value.name}</li>
      //       ))}
      //     </ul>
      //   </header>
      // </div>

      // <div>
      //   <ul>
      //     {cars.map((car) => (
      //       //<li>{"Model: " + car.model + " ,Color: " + car.color}</li>
      //       <CarItem car = {car}></CarItem>
      //     ))}
      //   </ul>
      // </div>
    );
  }
}

export default App;
