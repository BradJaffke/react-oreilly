import React, {Component} from 'react';

import './App.css';
import Person from './Person/Person';
import Char from './Char/Char';



class App extends Component {
    state = {
        persons: [
            {id: '1234', name: 'Brad', age: 32},
            {id: '4567', name: 'Brittany', age: 30},
            {id: '7890', name: 'Maya', age: 0}
        ],
        userInput: '',
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

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value});
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    }

    render() {
        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char
                character={ch}
                key={index}
                clicked={() => (this.deleteCharHandler(index))} />;
        });

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid black',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
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
                </div>
            );

            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // }
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
                <div className="App">
                    <h1>Hi, I'm a React App</h1>
                    {/*<UserInput username={this.state.username} changed={this.usernameChangedHandler}/>*/}
                    {/*<UserOutput username={this.state.username}/>*/}

                    <StyledButton
                        onClick={this.togglePersonsHandler}
                        alt={this.state.showPersons}
                    >Toggle People</StyledButton>
                    <p className={classes.join(' ')}>This is really working!</p>
                    {persons}

                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    onChange={this.inputChangedHandler}*/}
                    {/*    value={this.state.userInput} />*/}
                    {/*<p>{this.state.userInput}</p>*/}
                    {/*<Validation inputLength={this.state.userInput.length} />*/}
                    {/*{charList}*/}
                </div>
        );
    }
}

export default App;
