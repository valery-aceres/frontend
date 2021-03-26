import React, { useState } from 'react';


// const validateEmail = (email) => {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

// const validatePassword = (password) => {
//     const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
//     return re.test(password);
// }



const ProductCreation = () => {


    /*
     * This component will have four states:
     * "initial", "sending", "successful", "unsuccessful"
     */
    const [ state, setState ] = useState("initial");
    const [ errorsState, setErrorsState ] = useState([]);

    let _idField;
    let titleField;
    // let srcField;
    // let src2Field;
    // let src3Field;
    let osField;
    let ramField;
    let brandField;
    let dimensionField;
    let boxField;
    let weightField;
    let modelField;
    let descriptionField;
    let discountField;
    let priceField;
    let colorsField;
    let countField;

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

    const upload = () => {

        const errors = [];

        // 1. Validate the fields
            if( _idField.value.length === 0 ) {
                errors.push("Please enter the ID number")
            }
            if( titleField.value.length === 0 ) {
                errors.push("Please enter your title")
            }
            // if( srcField.value.length === 0 ) {
            //     errors.push("Please enter the src")
            // }
            // if( src2Field.value.length === 0 ) {
            //     errors.push("Please enter your src2")
            // }
            // if( src3Field.value.length === 0 ) {
            //     errors.push("Please enter the src3")
            // }    
            if( osField.value.length === 0 ) {
                errors.push("Please enter your OS")
            }
            if( ramField.value.length === 0 ) {
                errors.push("Please enter the Ram")
            }
            if( brandField.value.length === 0 ) {
                errors.push("Please enter your Brand")
            }
            if( dimensionField.value.length === 0 ) {
                errors.push("Please enter the Dimension")
            }
            if( boxField.value.length === 0 ) {
                errors.push("Please enter your Box")
            }
            if( weightField.value.length === 0 ) {
                errors.push("Please enter your Weight")
            }
            if( modelField.value.length === 0 ) {
                errors.push("Please enter your Model")
            }
            if( descriptionField.value.length === 0 ) {
                errors.push("Please enter your Description")
            }
            if( discountField.value.length === 0 ) {
                errors.push("Please enter your Discounted Price")
            }
            if( priceField.value.length === 0 ) {
                errors.push("Please enter your List Price")
            }
            if( colorsField.value.length === 0 ) {
                errors.push("Please enter the Color")
            }
            if( countField.value.length === 0 ) {
                errors.push("Please enter the Count")
            }
            // 1.1 If fields are invalid, setState("unsuccessful")
            if(errors.length > 0) {
                setState("unsuccessful")
            }
            // 1.2 If the fields are valid, setState("sending")
            else {
                
                // 2 Show "sending..." and invoke the fetch()
                setState("sending");

                formData.append("_id", _idField.value);
                formData.append("title", titleField.value);
                // formData.append("src", srcField.value);
                // formData.append("src2", src2Field.value);
                // formData.append("src3", src3Field.value);
                formData.append("os", osField.value);
                formData.append("ram", ramField.value);
                formData.append("brand", brandField.value);
                formData.append("dimension", dimensionField.value);
                formData.append("box", boxField.value);
                formData.append("weight", weightField.value);
                formData.append("model", modelField.value);
                formData.append("brand", brandField.value);
                formData.append("description", descriptionField.value);
                formData.append("discount", discountField.value);
                formData.append("price", priceField.value);
                formData.append("colors", colorsField.value);
                formData.append("count", countField.value);


                fetch(
                    `${process.env.REACT_APP_BACKEND}/products`,
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
                <h1 className="mt-2 mb-2">Upload your product image</h1>
                
                {/* <div className="mb-3">
                    <label for="formFile" class="form-label">Upload Image 1</label>
                    <input  style={{borderRadius:"20px"}}
                onChange={attachFile} class="form-control" type="file" id="formFile"/>
                </div>
                <div className="mb-3">
                    <label for="formFile" class="form-label">Upload Image 2</label>
                    <input  style={{borderRadius:"20px"}}
                onChange={attachFile} class="form-control" type="file" id="formFile"/>
                </div>
                <div className="mb-3">
                    <label for="formFile" class="form-label">Upload Image 3</label>
                    <input  style={{borderRadius:"20px"}}
                onChange={attachFile} class="form-control" type="file" id="formFile"/>
                </div> */}

                <div className="mb-3">
                    <label for="exampleInputId1" className="form-label">ID Number</label>
                    <input style={{borderRadius:"20px"}} ref={ (element) => _idField = element } type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="firstNameHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputFirstName1" className="form-label">titleField</label>
                    <input style={{borderRadius:"20px"}} ref={ (element) => titleField = element } type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="firstNameHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputFirstName1" className="form-label">osField</label>
                    <input style={{borderRadius:"20px"}} ref={ (element) => osField = element } type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="firstNameHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputFirstName1" className="form-label">ramField</label>
                    <input style={{borderRadius:"20px"}} ref={ (element) => ramField = element } type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="firstNameHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputFirstName1" className="form-label">brandField</label>
                    <input style={{borderRadius:"20px"}} ref={ (element) => brandField = element } type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="firstNameHelp"/>
                </div>
                {/* <div className="mb-3">

                    <label for="exampleInputLastName1" className="form-label"></label>
                    <input type="text" 
                    style={{borderRadius:"20px"}}
                    ref={ (element) => brandField = element }
                    className="form-control" 
                    id="exampleInputLastName1" 
                    aria-describedby="lastNameHelp"/>
                </div> */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">dimensionField</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="email"
                        ref={ (element) => dimensionField = element }
                        className="form-control" 
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">boxField</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="email"
                        ref={ (element) => boxField = element }
                        className="form-control" 
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputDob1" className="form-label">weightField</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="text" 
                        ref={ (element) => weightField = element }
                        className="form-control" 
                        id="exampleInputDob1" 
                        aria-describedby="dobHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputphoneNumber1" className="form-label">modelField</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="text" 
                        ref={ (element) => modelField = element }
                        className="form-control" 
                        id="exampleInputphoneNumber1" 
                        aria-describedby="phoneNumberHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputaddress1" className="form-label">descriptionField</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="text" 
                        ref={ (element) => descriptionField = element }
                        className="form-control" 
                        id="exampleInputaddress1" 
                        aria-describedby="addressHelp"
                    />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputaddress1" className="form-label">discountField</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="text" 
                        ref={ (element) => discountField = element }
                        className="form-control" 
                        id="exampleInputaddress1" 
                        aria-describedby="addressHelp"
                    />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputaddress1" className="form-label">priceField</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="text" 
                        ref={ (element) => priceField = element }
                        className="form-control" 
                        id="exampleInputaddress1" 
                        aria-describedby="addressHelp"
                    />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputaddress1" className="form-label">colorsField</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="text" 
                        ref={ (element) => colorsField = element }
                        className="form-control" 
                        id="exampleInputaddress1" 
                        aria-describedby="addressHelp"
                    />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputaddress1" className="form-label">countField</label>
                    <input 
                        style={{borderRadius:"20px"}}
                        type="text" 
                        ref={ (element) => countField = element }
                        className="form-control" 
                        id="exampleInputaddress1" 
                        aria-describedby="addressHelp"
                    />
                    
                </div>
                        
                { 
                    (state !== "sending" && state !== "successful") && 
                    <button  style={{borderRadius:"20px"}} onClick={upload} type="submit" className="btn btn-primary">Upload</button> 
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
            </div>
            <br/>
        </div>      

    )
}

export default ProductCreation;
