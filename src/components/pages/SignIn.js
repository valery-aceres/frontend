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



const SignIn = () => {
    /*
     * This component will have four states:
     * "initial", "sending", "successful", "unsuccessful"
     */
    const [ state, setState ] = useState("initial");

    let emailField;
    let passwordField;


    const register = () => {

        const errors = [];

        // 1. Validate the fields
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

                fetch(
                    `${process.env.REACT_APP_BACKEND}/users/signup`,
                    {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(
                            {
                                email: emailField.value,
                                password: passwordField.value,
                            }
                        )
                    }
                )
                // 2.1 If the Promise resolves, setState("successful")
                .then(
                    () => {
                        setState("successful")
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
                <h1 className="mt-2 mb-2">Sign In</h1>
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
                        
                { 
                    (state !== "sending" && state !== "successful") && 
                    <button style={{borderRadius:"20px"}} onClick={register} type="submit" className="btn btn-primary">Submit</button> 
                }

                {
                    state === "sending" && <p>Sending...</p>
                }

                {
                    state === "successful" && <div className="alert alert-success">Log in Successful</div>
                }

                {
                    state === "unsuccessful" && <div className="alert alert-danger">Invalid Credentials.</div>
                }
            
            <p className="m-auto pt-4">Not yet registered?</p>
            <a className="mb-3" href="/signup">Create an Account</a>
            </div>
            <br/>
            
            {/* <div><Footer/></div> */}
        </div>      
        
    )
}

export default SignIn;
