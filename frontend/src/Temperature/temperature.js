import React, { Component } from 'react'
import firebase from 'firebase/compat';
require('firebase/compat/firestore');


export class Temperature extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date: new Date(),
             number:0.0

        }
    }
    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    addTemperature = (e) => {
        e.preventDefault();
        const db = firebase.getFirestore();
        db.settings({
            timestampsInSnapshots: true
          });
        const ref = db.collection("temperature").doc("gCtQcYpVpyfmfrtV36gd").collection("fridge1").add({
            time: this.state.date,
            temperature: this.state.number
        })



        this.setState({
            date: new Date(),
            number: 0.0
        })
    }
    render() {
        return (
            <div>
                test
                <form onSubmit={this.addTemperature} >
                    <input
                        type="datetime-local"
                        name="date"
                        onChange={this.updateInput}
                        value={this.state.date}
                    />
                    <input
                        type="number"
                        name="number"
                        placeholder="0.0"
                        onChange={this.updateInput}
                        value={this.state.number}
                    />
                    <button type="submit">Submit</button>
                    </form>
            </div>
        )
    }
}

export default Temperature
