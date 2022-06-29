import { useState } from 'react'

const initialInput = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
}

function CreateAccount() {
    const [input, setInput] = useState(initialInput)

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


    const handleInputChange = (event) => {
        setInput({...input, [event.target.name]: event.target.value})
    }


    return <form className="w-11/12 md:w-6/12 lg:w-5/12 mx-auto space-y-4 mt-12">
        <h1 className="text-2xl"><strong>Create An Account</strong></h1>
        <div className="space-y-2">
            {inputFields.map(field => {
                return (
                    <div className="flex flex-col" key={field.label}>
                        <label className="mr-auto font-semibold">
                            {field.label}
                        </label>
                        <input type={field.inputType} className="border rounded-md p-2" placeholder={field.placeholder} value={input.value} onChange={handleInputChange} name={field.name} />
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