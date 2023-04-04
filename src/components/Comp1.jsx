
import React, { useRef, useState } from 'react'

function Comp1() {
    
    const [number, setNumber] = useState(["", "", "", ""])
    const inputOtp = useRef([])

    const InputChange = (i, e) => {
        const value = e.target.value;
        const newOtp = [...number];
        newOtp[i] = value;
        setOtp(newOtp);
        if (i < number.length - 1 && value) {
            inputOtp.current[i + 1].focus();
        }
    };

    const handleInput = (e) => {
        e.preventDefault();
        const pasteOtp = e.clipboardData.getData('text/plain').slice(0, 4);
        const newOtp = [...number];
        for (let i = 0; i < pasteOtp.length; i++) {
            newOtp[i] = pasteOtp[i];
            if (i < number.length - 1) {
                inputOtp.current[i + 1].focus();
            }
        }
        setNumber(newOtp);
    };

    const submitData = (e) => {
        e.preventDefault();
        console.log(number.join(''));
    }

    const removeData = (e) => {
        e.preventDefault();
        setNumber(['', '', '', ''])
    }
    return (
        <>
            {/* section one */}
            <div className='first'>
                <div className='logo'>LOGO</div>

                <div className='Verification'>Verification</div>

                <div className='smsblock'> <span className='otp'>SMS OTP</span> <span className='senton'>Sent on: 77777-77777 </span> </div>

                {/* Input fields */}
                <form onSubmit={submitData} >
                    <div className='inputdiv'>
                        {number.map((value, inx) => (
                            <input
                                key={inx}
                                type="number"
                                min="0"
                                max="9"
                                value={value}
                                onChange={(event) => InputChange(inx, event)}
                                onPaste={handleInput}
                                ref={(e) => (inputOtp.current[inx] = e)}
                                className='inputfield'
                            />
                        ))}
                    </div>

                    <div className='Enterdiv'><span className='wrong'>Entered Wrong Details?</span><span className='reenter' onClick={removeData}>Re-enter</span></div>

                    <input type='submit' value="Verify" className='btn' />
                </form>

                <div className='goback'> Go back to Home</div>
            </div>
        </>
    )
}

export default Comp1