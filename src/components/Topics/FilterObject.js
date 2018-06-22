import React, { Component } from 'react';



export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            people: [
                {
                    name: 'Tim',
                    age: 26,
                    hair: 'brown'
                },
                {
                    name: 'Alissa',
                    age: 26,
                    title: 'mother',
                },
            ],
            userInput: "",
            filteredPeople: []
        }
    }

    handleChange(val) {
        this.setState( { userInput: val });
    }   

    filterPeople(prop) {
        var people = this.state.people;
        var filteredPeople = [];

        for (let i=0; i<people.length; i++) {
            if (people[i].hasOwnProperty(prop) ) {
                filteredPeople.push(people[i]);
            }
        }
        this.setState( { filteredPeople: filteredPeople });
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object</h4>
                <span className="puzzletText"> Original: {JSON.stringify(this.state.people, null, 10) } </span>
                <input className="inputLine" onChange= { (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterPeople(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPeople, null, 10) }</span>                
            </div>
        )
    }
}





