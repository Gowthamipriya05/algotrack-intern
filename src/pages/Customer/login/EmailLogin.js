import React from 'react'

const EmailLogin = () => {
  return (
    <>
      <div className='wrapper bg-light d-flex align-items-center justify-content-center w-100'>
         
         <div className='login shadow' >
             <h2 className='mb-3'>Login With Email Id</h2>
             <form className='needs-validation'> 
               <div className='form-group was-validated mb-2'>
                      <label htmlFor='email' className='form-label'>Email Address</label>
                      <input type='email' className='form-control' required></input>
                      <div className='invalid-feedback'>
                         Please Enter Your Email 
                      </div>
               </div>
               <div className='form-group was-validated mb-2'>
                      <label htmlFor='password' className='form-label'>Password</label>
                      <input type='password' className='form-control' required></input>
                      <div className='invalid-feedback'>
                         Please Enter Your Password 
                      </div>
               </div>
               <button type='submit' className='btn btn-success w-100 mt-2'>Login</button>
             </form>
             
         </div>
        
     </div>
    </>
  )
}

export default EmailLogin