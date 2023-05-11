import React from "react";
import '../classExercise/register.css'

function Form(){
    return(
        <div className="main">
            <div className="form">
                <h1 className="Header">REGISTER</h1>
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="FirstName" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="UserName" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="confirm password" />
                <button className="submit" type="submit">Submit</button>

            </div>
        </div>

    );
}
export default Form