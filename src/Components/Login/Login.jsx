import React from 'react'

const Login = ({HeadContent, mainContent}) => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="bg-[#ffffff] shadow-2xl w-full max-w-[528px] md:h-[570px] rounded-[20px] relative p-5 md:p-0">
                    <button className="absolute top-5 right-5 text-black hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
                        </svg>
                    </button>

                    <h1 className="roboto-flex mt-5 md:mt-[40px] text-2xl md:text-[32px] text-center md:text-left md:ml-[100px] font-[700] leading-[120%] tracking-[-0.02em]" dangerouslySetInnerHTML={{ __html: HeadContent }}>
                    </h1>
                     {mainContent}
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