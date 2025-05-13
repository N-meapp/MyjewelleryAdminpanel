import React from 'react'

const Login = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="bg-[#ffffff] shadow-2xl w-full max-w-[528px] md:h-[570px] rounded-[20px] relative p-5 md:p-0">
                    <button className="absolute top-5 right-5 text-black hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
                        </svg>
                    </button>

                    <h1 className="roboto-flex mt-5 md:mt-[40px] text-2xl md:text-[32px] text-center md:text-left md:ml-[100px] font-[700] leading-[120%] tracking-[-0.02em]">
                        Sign in <br /> discover timeless <br /> elegance
                    </h1>

                    <div className="relative w-full max-w-[340px] mt-5 gap-8 mx-auto md:mx-0 md:ml-[100px]">
                        <input
                            className="robo shadow appearance-none border border-gray-500 placeholder-gray-700 rounded-[8px] w-full py-3 px-5 mt-5 gap-6 leading-tight text-center focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Continue with Google"
                            readOnly
                        />
                        <img
                            src="/assets/Images/logo/Google Logo.png"
                            alt="Google logo"
                            className="absolute left-5 md:left-5 top-[43px] transform -translate-y-1/2 w-[24px] h-[24px]"
                        />
                    </div>

                    <div className="relative w-full max-w-[340px] gap-8 mx-auto md:mx-0 md:ml-[100px]">
                        <input
                            className="robo shadow appearance-none border border-gray-500 placeholder-gray-700 rounded-[8px] w-full py-3 px-5 mt-5 gap-6 leading-tight text-center focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Continue with Apple"
                            readOnly
                        />
                        <img
                            src="/assets/Images/logo/apple-logo.png"
                            alt="Apple logo"
                            className="absolute left-5 md:left-5 top-[43px] transform -translate-y-1/2 w-[24px] h-[24px]"
                        />
                    </div>

                    <p className="flex justify-center mt-[20px] roboto-flex">or</p>

                    <div className="relative w-full max-w-[340px] gap-8 mx-auto md:mx-0 md:ml-[100px]">
                        <input
                            className="robo shadow appearance-none border text-center border-gray-500 rounded-[8px] w-full py-3 px-5 mt-5 gap-6 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="+91 Enter number to login"
                        />
                        <img
                            src="/assets/Images/logo/india-logo.png"
                            alt="India logo"
                            className="absolute left-5 md:left-5 top-[43px] transform -translate-y-1/2 w-[24px] h-[24px]"
                        />
                    </div>

                    <div className="w-full max-w-[340px] mx-auto md:mx-0 md:ml-[100px] mt-6">
                        <button className="bg-[#854836] text-white w-full font-bold py-3 px-5 rounded-[8px] robo text-[16px]">
                            Continue
                        </button>
                    </div>

                    <p className="robo text-gray-700 mt-3 text-[12px] text-center mx-auto px-4 md:px-0">
                        By signing up, you agree to our, Terms of Use and confirm <br className="hidden sm:block" /> you have read
                        our Privacy and Cookie Statement.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login