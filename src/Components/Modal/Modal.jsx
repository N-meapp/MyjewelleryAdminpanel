import React from 'react';
import './Modal.css'

const Modal = ({ isOpen, onClose, content, mainModalClass, modalWrapDiv }) => {
    if (!isOpen) return null;

    return (
        <div
            tabIndex={-1}
            aria-hidden="true"
            className={modalWrapDiv}
        >
            <div className={mainModalClass}>
                <div className="relative bg-white rounded-2xl dark:bg-gray-700 grow " style={{ 'box-shadow': '4px 0px 50px 0px rgba(0, 0, 0, 0.1)' }} >
                    <button
                        onClick={onClose}
                        type="button"
                        className="absolute top-3 right-2.5 bg-[#452a1b] text-gray-400 z-50 hover:bg-[#5e3620] rounded-full text-sm w-8 h-8 flex justify-center items-center "
                    >
                        <svg
                            className="w-3 h-3 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5">
                      {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
