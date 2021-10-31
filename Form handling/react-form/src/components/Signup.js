import React from 'react'
import {Formik, useFormik} from 'formik'

function Signup() {
    const formik = useFormik({
        initialValues:{
            uname:'Nikki',
            email:'email@gmail.com',
            pass:'passwordishere',
            cpass:'passwordishere',
        },
        onSubmit:values=>{
            console.log('Form data:',values);
        }
    })
    // console.log("The values are: " ,formik.values);
    return (
        <div>
            <h1>Welcome to signup</h1>
           <center>
            <form onSubmit ={formik.handleSubmit}>
               <label htmlFor="uname">Enter Username</label>
                <input type='text' name='uname' onChange={formik.handleChange} values = {formik.values.uname}></input>

                <label htmlFor="email">Enter Email</label>
                <input type='email' name='email' onChange={formik.handleChange} values = {formik.values.email}></input>

                <label htmlFor="pass">Enter Password</label>
                <input type='text' name='pass' onChange={formik.handleChange} values = {formik.values.pass}></input>

                <label htmlFor="cpass">Enter Confirm Password</label>
                <input type='text' name='cpass' onChange={formik.handleChange} values = {formik.values.cpass}></input>
                <button>Click here!</button>
            </form>
            </center>
           </div>
    )
}

export default Signup
