import React from 'react'
import { useState } from 'react'

const intialInput = {
  firstName: "",
  lastName: "",
  email: "",
  password:"",

}

function CreateAccount() {
  const [input, setInput] = useState(intialInput)

  const inputFields = [
    {
      label: "First Name",
      inputType: "text",
      placeholder: "E.g. John",
      inputValue: input.firstName,
      name:"firstName"
    },
    {
      label: "Last Name",
      inputType: "text",
      placeholder: "E.g. Doe",
      inputValue: input.lastName
    },
    {
      label: "Email",
      inputType: "email",
      placeholder: "E.g. johndoe@123.com",
      inputValue: input.email
    },
    {
      label: "Password",
      inputType: "text",
      placeholder: "E.g. John",
      inputValue: input.password
    },

  ]

console.log(input)
const handleInputChange = (event) => {
  console.log("event", event)
  setInput({...input, [event.target.name]: event.target.value})

}

  return (
    <form className="border w-11/12 md:w-6/12 lg:w-5/12 mx-auto space-y-2">
        {/* mobile screen, medium screen, large screen */}
        <h1 className="text-2xl"><strong>Create an Account</strong></h1>

        <div className="space-y-2">
          {inputFields.map(field => {
            return (
              <div className="flex flex-col" key={field.label}>
                <label className="mr-auto font-semi-bold">{field.label}
                </label>
                <input type={field.inputType} className="border rounded-md p-2" placeholder={field.placeholder} />

              </div>
            )
          })}
          {/* <div className="flex flex-col"><label className="mr-auto font-semi-bold">First className</label><input type="text" className="border rounded-md p-2" placeholder="E.g. John" /></div>
          <div className="flex flex-col"><label className="mr-auto font-semi-bold">Last Name</label><input type="text" className="border rounded-md p-2" placeholder="E.g. Doe" /></div>
          <div className="flex flex-col"><label className="mr-auto font-semi-bold">Email Address</label><input type="email" className="border rounded-md p-2" placeholder="E.g. johndoe@123.com" /></div>
          <div className="flex flex-col"><label className="mr-auto font-semi-bold">Password</label><input type="text" className="border rounded-md p-2" placeholder="Enter password" /></div> */}


        </div>

        <div className="flex flex-row justify-between px-4">
            <div>Remember Me
            <input type="checkbox" value="remember" /></div>
            <a href="#" className="text-indigo-500">Forgot password?</a>
        </div>
       
        <div>
            <button className="bg-indigo-500 text-white w-full py-3 rounded-md" type="submit">Create An Account</button>
            </div>
        <div>Have an Account?
            <a href="#" className="text-indigo-500"><strong>Log in</strong></a>
        </div>
    </form>
  )
}

export default CreateAccount