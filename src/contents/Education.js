import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="“Xhavit Ahmeti” Gymnasium" where="Gjilan" from="Sep 2015" to="May 2018"/>
            <Widecard title="Computer Science and Engineering" where="UBT, Prishtine" from="2018" to="Present"/>
            </div>
            )
        }
    }
    
export default Education
    