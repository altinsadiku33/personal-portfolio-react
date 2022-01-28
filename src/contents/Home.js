import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/as-photo.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Altin Sadiku','I am a Front-End Developer']} speed={100} eraseDelay={600}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    