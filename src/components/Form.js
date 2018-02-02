import React from 'react';

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
           <label> UserId </label><input type="text" name="uName" /><br />
           <label> Password </label><input type="password" name="password" /> <br />
           <label>Date:</label><input type="date" name="date" />
           <input type="Submit" value="Submit" />
           </fieldset>
        </div>
    );
    }
  }

  export default Form;
  