import React from 'react'
import './PartnerLogin.css'
import {useNavigate} from 'react-router-dom'

const PartnerLogin = () => {
    const Navigate=useNavigate();
    function handleclick(){
        //Navigate
        Navigate('/partner/mainscreen');
    }
    return <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
        <div className='partner-login shadow'>
        <h2 className='mb-3'>Partner Login</h2>
            <form className='needs-validation'>
                <div className="form-floating was-validated mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="User ID" required/>
                    <label for="floatingInput">User ID</label>
                    <div className='invalid-feedback'>Enter your User ID</div>
                </div>
                <div className="form-floating was-validated mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label for="floatingPassword">Password</label>
                        <div className='invalid-feedback'>Enter the Password</div>
                </div>
                <button type ='submit' onClick={handleclick} className='btn btn-success w-100 mt-2'>Submit</button>
                <p className='partner-login-p'><a href='www.google.com'>Forgot Password?</a></p>
            </form>
        </div>
    </div>
}

export default PartnerLogin