import React, { useRef, useEffect } from 'react';

const OTPVerification = () => {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current.forEach((input, index) => {
      input.addEventListener('input', handleInput);
      input.addEventListener('keydown', handleKeyDown);
      input.addEventListener('focus', handleFocus);
      input.addEventListener('paste', handlePaste);
    });

    return () => {
      inputRefs.current.forEach((input) => {
        input.removeEventListener('input', handleInput);
        input.removeEventListener('keydown', handleKeyDown);
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('paste', handlePaste);
      });
    };
  }, []);

  const handleKeyDown = (e) => {
    if (!/^[0-9]{1}$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && !e.metaKey) {
      e.preventDefault();
    }

    if (e.key === 'Delete' || e.key === 'Backspace') {
      const index = inputRefs.current.indexOf(e.target);
      if (index > 0) {
        inputRefs.current[index - 1].value = '';
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e) => {
    const index = inputRefs.current.indexOf(e.target);
    if (e.target.value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    if (!new RegExp(`^[0-9]{${inputRefs.current.length}}$`).test(text)) return;

    const digits = text.split('');
    inputRefs.current.forEach((input, index) => input.value = digits[index]);
    document.querySelector('button[type=submit]').focus();
  };

  return (
    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow mt-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
        <p className="text-[15px] text-slate-500">
          Enter the 4-digit verification code that was sent to your phone number.
        </p>
      </header>

      <form id="otp-form" onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center justify-center gap-3">
          {[0, 1, 2, 3].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[i] = el)}
              className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-[#5c3d3d] hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              pattern="\d*"
            />
          ))}
        </div>

        <div className="max-w-[260px] mx-auto mt-4">
          <button
            type="submit"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#906a6a] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
          >
            Verify Account
          </button>
        </div>
      </form>

      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?{' '}
        <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">
          Resend
        </a>
      </div>
    </div>
  );
};

export default OTPVerification;
