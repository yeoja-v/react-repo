import React from 'react'
import { useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

const schema = yup.object().shape({
  firstName: yup.string().min(3, "3+ char").required("required"),
  lastName: yup.string().min(3, "3+ char").required("required"),
  email: yup.string().email().required("valid email required"),
  password: yup.string().min(6, "6+ char").required("pass is required"), 
})

function CreateAccount() {
  const [input, setInput] = useState(initialInput)

  const {
    register,
    handleInputChange

  } = useForm({
    resolver: yupResolver(schema)
  })

  const inputFields = [
      {
          label: "First Name",
          name: "firstName",
          inputType: "text",
          placeholder: "E.g. John",
          inputValue: input.firstName
      },
      {
          label: "Last Name",
          name: "lastName",
          inputType: "text",
          placeholder: "E.g. Doe",
          inputValue: input.lastName
      },
      {
          label: "Email",
          name: "email",
          inputType: "email",
          placeholder: "E.g. johndoe@email.com",
          inputValue: input.email
      },
      {
          label: "Password",
          name: "password",
          inputType: "password",
          placeholder: "Enter your password",
          inputValue: input.password
      },
  ]


  const handleInputChange = (event, input) => {
      setInput({...input, [event.target.name]: event.target.value})
  }

  const submitHandler = (event) => {
    event.preventDefault()
    console.log('submit event', event)
  }

  const onSubmit = (data) => {
    console.log('data', data)
  }

  console.log('errors', errors)


  return <form className="w-11/12 md:w-6/12 lg:w-5/12 mx-auto space-y-4 mt-12" onSubmit={handleSubmit(onSubmit)}>
    {/* mobile screen, md screen, lg screen */}
      <h1 className="text-2xl"><strong>Create An Account</strong></h1>
      <div className="space-y-2">
          {inputFields.map(field => {
              return (
                  <div className="flex flex-col" key={field.label}>
                      <label htmlFor={field.name} className="mr-auto font-semibold">
                          {field.label}
                      </label>
                      <input id={field.name} type={field.inputType} className="border rounded-md p-2" placeholder={field.placeholder} {...register(field.name)}/>
                       {errors[field.name]?.message && <p className='text-red-500 text-left'>{errors[field.name].message}</p> }
                    
                  </div>
              )
          })}
      </div>
      <div className="flex flex-row justify-between px-4">
          <div className="font-semibold">Remember Me</div>
          <a href="#" className="text-indigo-500 font-semibold">Forgot Password</a>
      </div>
      <div>
          <button className="bg-indigo-500 text-white w-full py-3 rounded-md" type="submit">
              Create An Account
          </button>
      </div>
      <div>Have an account? <a href="#" className="text-indigo-500"><strong>Log in</strong></a></div>
  </form>
}

export default CreateAccount