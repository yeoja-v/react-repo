import React from 'react'

function CreateAccount() {


  return (
    <div className="border w-11/12 md:w-6/12 lg:w-5/12 mx-auto space-y-2">
        {/* mobile screen, medium screen, large screen */}
        <h1 className="text-2xl"><strong>Create an Account</strong></h1>

        <div>
        <div className="flex flex-col"><label className="mr-auto">First className</label><input type="text" className="border" /></div>
        <div className="flex flex-col"><label className="mr-auto">Last Name</label><input type="text" className="border"  /></div>
        <div className="flex flex-col"><label className="mr-auto">Email Address</label><input type="text" className="border"  /></div>
        <div className="flex flex-col"><label className="mr-auto">Password</label><input type="text" className="border"  /></div>
        </div>

        <div className="flex flex-row justify-between px-4">
            <div>Remember Me
            <input type="checkbox" value="remember" /></div>
            <div>Forgot password</div>
        </div>
       
        <div>
            <button className="bg-indigo-500 text-white w-full py-3 rounded-md">Create An Account</button>
            </div>
        <div>Have an Account?
            <a href="#">Log in</a>
        </div>
    </div>
  )
}

export default CreateAccount