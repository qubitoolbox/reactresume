import React, {Component} from 'react';
//import NameForm from './Appinit';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import '././bootstrap/bootstrap.css';



class FirstDiv extends Component {

  fillthenumbers = {
    firstnum: 1
  }

  
  render(){
    let servicedPage = {
      howpgbuilt:"Site is based on React framework",
      howpgbuilt1: "Works on Bootstrap, Chartjs, js, json",
      howpgbuilt2: "Github is used for Code repo",
      howpgbuilt3: "aws Amplify for Code Deployment",
      howpgbuilt4: "aws Route 53"
    }
    
    return(
      <div className="FirstDiv bg-light">

        <div className="container bg-light">

          <div className="row bg-secondary ">
            
          </div><p className="introfont">Hi, my name is Osman Morales, I am a soon to graduate in Computer Science from FIU. 
          I am seeking a <i>new</i> life opportunity in the job market; I seek a long term role, fit in a company's work model and ethics, by excelling in completing goals, achieving expertise in the field, bring value to the company, customers and business partners. 
          I think I have gained the skills and confidence to further develop my career and begin applying solutions to
        real world. For example, this site I made it with the use of bootStrap and React Framework. Although I'm frankly not the best UI Designer, you may find I try
        to enhance my skills by doing.</p> 
          <div><br></br></div>
          
          <div className="row ">
              <div className="mx-auto shadow p-3 rounded">
                <a href="https://i.stack.imgur.com/TtOPt.gif" rel="noreferrer"><img src="https://i.stack.imgur.com/TtOPt.gif" alt="enter image description here"></img></a>
              </div>
            </div>
            
          <div><br></br></div>
          <p className="text-center text-white Lemonada bg-dark elmargen shadow p-3 mb-5 rounded"><h6>The Charts below depict my dynamic skills and years learning code</h6></p>
          <div><br></br></div>
          
          <div><br></br></div>
          <div>

          </div>


        </div>

      </div>

    )

  }

}
//export default FirstDiv;
export default FirstDiv;