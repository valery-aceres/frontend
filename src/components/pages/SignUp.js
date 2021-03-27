import React, { useState } from 'react';
// import Footer from '../Footer';



const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}



const SignUp = () => {


    /*
     * This component will have four states:
     * "initial", "sending", "successful", "unsuccessful"
     */
    const [ state, setState ] = useState("initial");
    const [ errorsState, setErrorsState ] = useState([]);

    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneNumberField;
    let dobField;
    let addressField;


    //For the form with images
    const formData = new FormData();

    const attachFile = (evt) => {
        const files = Array.from(evt.target.files);

        files.forEach(
            (file, index) => {
                formData.append(index, file);
            }
        )
    }

    const register = () => {

        const errors = [];

        // 1. Validate the fields
            if( firstNameField.value.length === 0 ) {
                errors.push("Please enter your first name")
            }
            if( lastNameField.value.length === 0 ) {
                errors.push("Please enter your last name")
            }
            if( validateEmail(emailField.value) === false ) {
                errors.push("Please enter a valid email address")
            }
            if( validatePassword(passwordField.value) === false ) {
                errors.push("Please enter a password between 8 to 16 characters")
            }
            
            // 1.1 If fields are invalid, setState("unsuccessful")
            if(errors.length > 0) {
                setState("unsuccessful")
            }
            // 1.2 If the fields are valid, setState("sending")
            else {
                
                // 2 Show "sending..." and invoke the fetch()
                setState("sending");

                formData.append("firstName", firstNameField.value);
                formData.append("lastName", lastNameField.value);
                formData.append("email", emailField.value);
                formData.append("password", passwordField.value);
                formData.append("dob", dobField.value);
                formData.append("phoneNumber", phoneNumberField.value);
                formData.append("address", addressField.value);

                fetch(
                    `${process.env.REACT_APP_BACKEND}/users/signup`,
                    {
                        method: 'POST',
                        // headers: {"Content-Type": "application/json"},
                        body: formData
                    }
                )
                // 2.1 If the Promise resolves, setState("successful")
                .then(
                    () => {
                        setState("successful")
                        setErrorsState([])
                    }
                )
                // 2.1 Else if the Promise rejects, setState("unsuccessful")
                .catch(
                    () => {
                        setState("unsuccessful")
                    }
                )
            }
    }

    return (
        <div>
            <div className="container" style={{maxWidth: '600px'}}>
                <h1 className="mt-2 mb-2">Registration <i className="fas fa-file-signature"style={{color:"limegreen"}}></i></h1>
                <div className="mb-3">
                    <label for="formFile" class="form-label">Upload Avatar</label>
                    <input  style={{borderRadius:"20px"}}
                onChange={attachFile} class="form-control" type="file" id="formFile"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputFirstName1" className="form-label">First name</label>
                    <input style={{borderRadius:"20px"}} ref={ (element) => firstNameField = element } type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="firstNameHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputLastName1" className="form-label">Last name</label>
                    <input type="text" 
                    style={{borderRadius:"20px"}}
                    ref={ (element) => lastNameField = element }
                    className="form-control" 
                    id="exampleInputLastName1" 
                    aria-describedby="lastNameHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="email"
                        ref={ (element) => emailField = element }
                        className="form-control" 
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="password" 
                        ref={ (element) => passwordField = element }
                        className="form-control" 
                        id="exampleInputPassword1" 
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputDob1" className="form-label">Date of Birth</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="text" 
                        ref={ (element) => dobField = element }
                        className="form-control" 
                        id="exampleInputDob1" 
                        aria-describedby="dobHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputphoneNumber1" className="form-label">Phone Number</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="text" 
                        ref={ (element) => phoneNumberField = element }
                        className="form-control" 
                        id="exampleInputphoneNumber1" 
                        aria-describedby="phoneNumberHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputaddress1" className="form-label">Address</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="text" 
                        ref={ (element) => addressField = element }
                        className="form-control" 
                        id="exampleInputaddress1" 
                        aria-describedby="addressHelp"
                    />
                    
                </div>
                        
                { 
                    (state !== "sending" && state !== "successful") && 
                    <button  style={{borderRadius:"20px", backgroundColor:"limegreen"}} onClick={register} type="submit" className="btn btn-primary">Submit</button> 
                }

                {
                    state === "sending" && <p>sending...</p>
                }

                {
                    state === "successful" && <div className="alert alert-success">Successful</div>
                }

                {
                    state === "unsuccessful" && <div className="alert alert-danger">Please try again.</div>
                }
                {
                state === "validation failed" && <div className="alert alert-danger">
                    <ul>
                    {
                        errorsState.map(
                        (error) => <li>{error}</li>
                        )
                    }
                    </ul>
                    </div>
            } 
            <p className="m-auto text-center">Already have an account?</p>
            <div className="m-auto text-center">
                <a href="/signin">Please Login</a>
            </div>
            </div>
            <br/>
        </div>      
        
        
    )
}

export default SignUp;
