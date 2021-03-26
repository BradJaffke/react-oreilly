import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
//import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        persons: [
            {id: '1234', name: 'Brad', age: 32},
            {id: '4567', name: 'Brittany', age: 30}
        ],
        showPersons: false
    }


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]}
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
            //const persons = this.state.persons.slice();
            //const persons = this.state.persons.slice();
            const persons = [...this.state.persons];
            persons.splice(personIndex,1);
            this.setState({persons:persons});

    }

    // usernameChangedHandler = (event) => {
    //     this.setState({username: event.target.value})
    // }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click = {() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>)
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                {/*<UserInput username={this.state.username} changed={this.usernameChangedHandler}/>*/}
                {/*<UserOutput username={this.state.username}/>*/}
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle People</button>
                <p>This is really working!</p>
                {persons}
            </div>
        );
    }
}

export default App;
