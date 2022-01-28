import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Trainings extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Trainings</h1>
                <Widecard title="Certified for React JS" where="Bit Academy, Prishtine" from="October 2021" to="December 2021"/>
                <Widecard title="Web development training " where="ODK, Prishtine" from="July 2019" to="July 2019"/>
                <Widecard title="Artificial intelligence" where="UBT, Prishtine" from=" June 2019" to="June 2019"/>
                <Widecard title="Game development" where="UBT, Prishtine" from="June 2019" to="June 2019"/>
                <Widecard title="Development of Cyber Security Applications" where="AAB, Prishtine" from="October 2020" to="November 2020"/>
            </div>
        )
    }
}

export  default Trainings