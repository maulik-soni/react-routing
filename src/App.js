import React, { useEffect, useState } from 'react';
import './App.css';

const Input = (props) => {
  const {placeholder, errorMessage, defaultValue, value, onChangeHandler, onBlurHandler, name, type} = props
  return (
    <div>
      <input 
        placeholder={placeholder || ""}
        name = {name}
        type = {type}
        value={value || defaultValue}
        onChange={(e)=>onChangeHandler({fieldName: name, value : e.target.value})}
        onBlur={(e)=>onBlurHandler ? onBlurHandler(e.target.value) : ()=>{}}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

function App() {
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [rePass, setReEnterPass] = useState("")

  useEffect(()=>{
    console.log("App Component Mounted")

    return ()=>{
      // window.confirm("want to reload this page ?")
    }
  }, [])

  useEffect(()=>{
    console.log("First Name : ", fname)
    console.log("Last Name : ", lname)
  }, [fname, lname])

  const onFormFieldValueChange = ({fieldName, value}) => {
    console.log({fieldName, value})
    switch (fieldName) {
      case "firstname":
        setFName(value)
        break;
      case "lastname":
        setLName(value)
        break;
      case "email":
        setEmail(value)
        break;
      case "password":
        setPass(value)
        break;
      case "re_password":
        setReEnterPass(value)
        break;
    
      default:
        console.log("default case", {fieldName})
        break;
    }
  }

  return (
    <div className="App">
      <form onSubmit={(e)=>{e.preventDefault(); console.log(
        {
          fname,
          lname,
          email,
          pass,
          rePass,
        }
      )}}>
        <div>
          <Input 
            type = "text"
            value = {fname}
            name = "firstname"
            placeholder="Please Enter First Name"
            // errorMessage={fname ? "" : "First Name should not be empty"}
            onChangeHandler={onFormFieldValueChange}
          />
          <Input 
            type = "text"
            value = {lname}
            name = "lastname"
            placeholder="Please Enter Last Name"
            // errorMessage={lname ? "" : "Last Name should not be empty"}
            onChangeHandler={onFormFieldValueChange}
          />
          <Input 
            type = "text"
            value = {email}
            name = "email"
            placeholder="Please Enter Email"
            // errorMessage={email ? "" : "Email should not be empty"}
            onChangeHandler={onFormFieldValueChange}
          />
          <Input 
            type = "password"
            value = {pass}
            name = 'password'
            placeholder="Please Enter Password"
            // errorMessage={pass ? "" : "Password should not be empty"}
            onChangeHandler={onFormFieldValueChange}
          />
          <Input 
            type = "password"
            value = {rePass}
            name = 're_password'
            placeholder="Please Re-Enter Password"
            // errorMessage={rePass ? "" : "Password should not be empty"}
            onChangeHandler={onFormFieldValueChange}
          />
          <button type="submit">Sumit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
