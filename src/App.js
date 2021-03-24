import React, {Component} from 'react';
import './App.css';
//import Person from './Person/Person'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    // state = {
    //     persons: [
    //         {name: 'Brad', age: 32},
    //         {name: 'Brittany', age: 30}
    //     ]
    // }
    //
    // switchNameHandler = (newName) => {
    //     console.log('Was clicked');
    //     this.setState({
    //         persons: [
    //             {name: newName, age: 32},
    //             {name: 'Brittany', age: 30}
    //         ]
    //     })
    // }
    //
    // nameChangedHandler = (event) => {
    //     this.setState({
    //         persons: [
    //             {name: event.target.value, age: 32},
    //             {name: 'Brittany', age: 30}
    //         ]
    //     })
    // }

    state = {
        username: "BJaffke"
    }

    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value})
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <UserInput username={this.state.username} changed={this.usernameChangedHandler}/>
                <UserOutput username={this.state.username}/>

                {/*<p>This is really working!</p>*/}
                {/*<button*/}
                {/*    style={style}*/}
                {/*    onClick={() => this.switchNameHandler('Bradley')}>Switch Name</button>*/}
                {/*<Person*/}
                {/*    name={this.state.persons[0].name}*/}
                {/*    age={this.state.persons[0].age}*/}
                {/*    click={this.switchNameHandler.bind(this, 'Bradley!')}*/}
                {/*    changed={this.nameChangedHandler}/>*/}
                {/*<Person*/}
                {/*    name={this.state.persons[1].name}*/}
                {/*    age={this.state.persons[1].age}>TEST TEST</Person>*/}
            </div>
        );
    }
}

export default App;
