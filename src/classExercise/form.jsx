import React,{useState} from "react";
import '../classExercise/form.css'
import { Formik, Form,Field, ErrorMessage } from "formik";

function Formmy(){
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

    return(
        <div className="main">
            <div className="topNav">
                <div className="Company">
                   <h1>AWARDS</h1>
                </div>
                <nav>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">OUR COMPETITIONS</a>
                <div className="sign"> 
                    <a href="">SIGN IN</a>
                <a href="">/SIGN UP</a>
                </div>
               
                </nav>
            </div>
            <div className="innerConatainer">
            <div className="form">
                <p className="Header">Fill the Application</p>
                <input type="text" placeholder="FirstName" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="UserName" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="confirm password" />
            </div>
            <div className="secondConatainer">
                <p>Upload your photo</p>
               <div className="pic"> 
                <input type="file" placeholder="Upload Image"/>
                </div>
                <select value={selectedOption} onChange={handleOptionChange} className="dropDown">
                <option value="" style={{border:'none'}}>Photo Contest Category</option>
                <option value="option1">png</option>
                <option value="option2">jpg</option>
                <option value="option3">img</option>
                </select>
                <p>Payment Option</p>
                <input type="text" placeholder="Name of card"/>
                <br />
                <input type="text" placeholder="Credit Card*       mm/yr  cvc"/>

                    <div className="check">
                <input type="checkBox"/><p>I Agree</p>
                </div> 

                <div className="button">
                <button className="submit" type="submit">Submit</button>
                <button className="cancel" type="submit">Cancel</button>
                </div>
            </div>
            </div>
        </div>

    );
}
export default Formmy