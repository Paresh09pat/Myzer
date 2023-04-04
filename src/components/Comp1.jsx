import React, { useState } from 'react'

function Comp1() {

    const [number, setNumber] = useState("")

    const handleInputChange = (event) => {
        setNumber({ number: event.target.value });
    };

    function handleBtnClick(e) {
        e.preventDefault()
        { number }
        console.log(number)
    }


    return (
        <>
            {/* section one */}
            <div className='first'>
                <div className='logo'>LOGO</div>

                <div className='Verification'>Verification</div>

                <div className='smsblock'> <span className='otp'>SMS OTP</span> <span className='senton'>Sent on: 77777-77777 </span> </div>

                {/* Input fields */}
                <div className='inputdiv'>
                    <input type='text' onChange={handleInputChange} className='inputfield'></input>
                    <input type='text' onChange={handleInputChange} className='inputfield'></input>
                    <input type='text' onChange={handleInputChange} className='inputfield'></input>
                    <input type='text' onChange={handleInputChange} className='inputfield'></input>
                </div>

                <div className='Enterdiv'>
                    <span className='wrong'>Entered Wrong Details? </span><span className='reenter'>Re-enter</span>
                </div>

                <button onClick={handleBtnClick} className='btn'>Verify</button>

                <div className='goback'> Go back to Home</div>
            </div>
        </>
    )
}

export default Comp1