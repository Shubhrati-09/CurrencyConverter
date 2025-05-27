import React, { useState } from 'react'

function CustomDropDown({
        data,
        flagsMap,
        onChangeCurrency,
        selectedCurrency
    }){
        const [open, setOpen] = useState(false);
        return (
             <div className="relative w-full max-w-2xl text-black">
                <div
                    onClick={() => (setOpen(!open))}
                    className="rounded-xl px-4 py-2 bg-white cursor-pointer flex items-center 
                    justify-between border border-gray-200 w-full"
                >  
                    {flagsMap[selectedCurrency] && (
                        <img
                            src={flagsMap[selectedCurrency].flag}
                            alt="flag"
                            className="w-6 h-4 mr-2"
                        />
                        )}
                        <div className='overflow-x-hidden text-ellipsis whitespace-nowrap w-full'>
                        <span> 
                            {selectedCurrency?.toUpperCase()}-{data[selectedCurrency?.toUpperCase()]}
                        </span>
                        </div>
                        <span>▾</span>
                </div>
                {open && (
                    <ul className="absolute bg-white border border-gray-300 mt-2 rounded-xl z-10 max-h-60 overflow-y-auto w-full">
                    {Object.entries(data).map(([code, name]) => (
                        <li
                        key={code}
                        className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                        onClick={() => {
                            onChangeCurrency(code);
                            setOpen(false);
                        }}
                        >
                        {flagsMap[code] && (
                            <img
                            src={flagsMap[code].flag}
                            alt={`${code} flag`}
                            className="w-5 h-3 mr-2"
                            />
                        )}
                        {code} - {name}
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        )
}

export {CustomDropDown}