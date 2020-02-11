
import React, {Component} from 'react';
import '././bootstrap/bootstrap.css';
class NameForm extends React.Component {
  // ;
  state = {value:null, count:null}
  constructor(props) {
    super(props);
    
    this.setState((props)=>{
      return {value: props
      }
    })

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('Welcome: ' + this.state.value);
      event.preventDefault();
    }

  render() {
    return (
      
      <div className="container-fluid bg-light" onLoad={this.handleSomething} >
        <div className="row">
          <div className="col"><form className="form-group" onSubmit={this.handleSubmit}>
        <label className="text-justify Lemonada">
    <h4>Type NickName or your Name:{this.state.count}</h4>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="" />
      </form></div>
          <div className="col"><div>
        <p><h4>Welcome</h4><h5> {this.state.value?this.state.value:'( ͡° ͜ʖ ͡°)'}</h5></p>
        <br></br>
      </div></div>

        </div>

      
      

    </div>  
    );

  }
}

  export default NameForm;