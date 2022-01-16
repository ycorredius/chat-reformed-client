import React from 'react'
import {  useFormik } from 'formik'
import { object, string } from 'yup'

export default function Login() {
    const userSchema = object({
        email: string().email().required("An email is  required"),
        password: string().required("Password required")
    })

    const formik = useFormik({
        initialValues:{
            email: '',
            password: ''
        },
        validationSchema: userSchema,
        onSubmit: (values) =>{
            console.log(values)
        }
    })
    return (
        <div className='formStyle'>
            <form className='form' onSubmit={formik.handleSubmit}>
                <div className='formItem'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email'onChange={formik.handleChange}/>
                </div>
                <div className='formItem'>
                    <label>Password</label>
                    <input type ='password' id='password' name='password'onChange={formik.handleChange}/>
                </div>
                <button type='submit'>Login</button>
            </form> 
        </div>
    )
}
