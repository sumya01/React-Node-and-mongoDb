import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component{
  render(){
    return(
      <div>
        <fieldset>
          <legend><h4>Personal information:</h4></legend>
         <label> FirstName </label><input type="text" name="fName" /><br />
         <label> LastName </label><input type="text" name="lName" /><br />
         <input type="radio" name="gender" value="male" checked />Male 
         <input type="radio" name="gender" value="female" />Female
         <input type="radio" name="gender" value="other" />Other <br />
         <label> UserName </label><input type="text" name="uName" /><br />
         <label> Password </label><input type="password" name="password" /> <br />
         <label>Date:</label><input type="date" name="date" />
         <input type="Submit" value="Submit" />
         </fieldset>
      </div>
  );
  }
}
const Lynda = (props) => {
    return(
            <div>
                <h2 className ="text-center">
                    {props.headerName}
                </h2>
            </div>
        );
    };

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div>
            <Lynda headerName="Registration"/>
        </div>
        <div className="form">
          <Form />
        </div>
        <div>
          ...
        </div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
