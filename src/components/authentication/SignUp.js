import React from "react";
import { useFormik } from "formik";
import { object, string } from "yup";

export default function SignUp() {
  const userSchema = object({
    userName: string().required(),
    email: string().email().required("An email is  required"),
    password: string().required("Password required"),
    confirmPassword: string()
      .required()
      .test("password-match", "Password must match", function (value) {
        return this.parent.password === value;
      }),
  });
const formik = useFormik({
	initialValues:{
		userName: "",
		email: "",
		password: "",
		confirmPassword: "".userName
	},
	onSubmit : (values) =>{
		console.log(values)
	},
	validationSchema: userSchema
})
  return (
    <div className="formStyle">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="formItem">
          <label htmlFor="userName" className="itemLablel">
            User Name
          </label>
          {formik.handleBlur.userName && formik.errors.userName ? (
            <p>{formik.errors.userName}</p>
          ) : null}
          <input
            id="userName"
            name="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
            onBlur={formik.touched}
          />
          <div></div>
        </div>
        <div className="formItem">
          <label htmlFor="email" className="itemLabel">
            Email
          </label>
          {formik.handleBlur.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.touched}
          />
        </div>
        <div className="formItem">
          <label htmlFor="password" className="itemLablel">
            Password
          </label>
          {formik.handleBlur.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.touched}
          />
        </div>
        <div className="formItem">
          <label htmlFor="confirmPassword" className="itemLablel">
            {" "}
            Confirm Password
          </label>
          {formik.handleBlur.confirmPassword && formik.errors.confirmPassword ? <p>{formik.errors.confirmPassword}</p> : null}
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.touched}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
