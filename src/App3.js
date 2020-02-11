import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import '././bootstrap/bootstrap.css';
import './newcss.css';
class PercDiv extends Component {
  render (){

    return (
        
      <div className="container-fluid elmargen">
          <div class="row ">
          <div className="col">
            <div class="flex-wrapper">
                <div class="single-chart">
                    <p class="text-center font-effect-anaglyph"><h4>LSTM</h4></p>
                    <svg viewBox="0 0 36 36" class="circular-chart green">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                        stroke-dasharray="70, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">70%</text>
                    </svg>
                </div>
                
                <div class="single-chart">
                    <p class="text-center font-effect-anaglyph"><h4>RL</h4></p>
                    <svg viewBox="0 0 36 36" class="circular-chart blue">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                        stroke-dasharray="40, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">40%</text>
                    </svg>
                </div>

                <div class="single-chart">
                    <p class="text-center font-effect-anaglyph	"><h4>CNN</h4></p>
                    <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                        stroke-dasharray="65, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">70%</text>
                    </svg>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
          <div className="col">
            <div class="flex-wrapper">
                <div class="single-chart">
                    <p class="text-center font-effect-anaglyph"><h4>GAN</h4></p>
                    <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                        stroke-dasharray="30, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">30%</text>
                    </svg>
                </div>
                
                <div class="single-chart">
                    <p class="text-center font-effect-anaglyph"><h4>SVM</h4></p>
                    <svg viewBox="0 0 36 36" class="circular-chart green">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                        stroke-dasharray="24, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">24%</text>
                    </svg>
                </div>

                <div class="single-chart">
                    <p class="text-center font-effect-anaglyph	"><h4>AdaDelta</h4></p>
                    <svg viewBox="0 0 36 36" class="circular-chart blue">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                        stroke-dasharray="40, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">40%</text>
                    </svg>
                </div>
                </div>
            </div>
        </div>
        <div className="row elmargen">

        <div class="list-group mx-auto">
            <a href="#" class="list-group-item list-group-item-action active">
                <b><i>Also, </i></b> some of my favorite Sites
            </a>
            <a href="http://neuralnetworksanddeeplearning.com/chap2.html" class="list-group-item list-group-item-action">Deep Learning by Michael Nielsen</a>
            <a href="https://www.youtube.com/watch?v=ArPaAX_PhIs&list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF" class="list-group-item list-group-item-action">CV by Andrew Ng</a>
            <a href="https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/" class="list-group-item list-group-item-action">Backprop by Matt Mazur</a>
            <a href="https://machinelearningmastery.com/blog/" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">Machine Learning Mastery by Jason Brownlee</a>
            <a href="https://www.pyimagesearch.com/" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">OpenCV by Adrian Rosebrock</a>
            <a href="https://www.youtube.com/watch?v=ifma8G7LegE" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">RL UC Berkeley Prof. Pieter Abbeel</a>
            <a href="https://ayearofai.com/rohan-lenny-3-recurrent-neural-networks-10300100899b" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">Derived LSTMS, by Rohan and Lenny</a>
           
        </div>
        </div>
      </div>

    )
  }
}

//export default FirstDiv;
export default PercDiv;