import React from 'react'

function AmountEnter({onChange,Amount,sym}) {
  return (
    <div className='h-[84px] border border-solid border-gray-400
    bg-white hover:bg-gray-100 px-4 py-2 text-2xl rounded-2xl flex 
    flex-col justify-center'>
      <label className="text-sm font-normal text-zinc-400">Amount</label>
      <span className="text-black" >
        {sym}
        <input 
            className="text-md font-semibold text-black ml-3" 
            value={Amount}
            onChange={(e) => onChange(e.target.value)}/>
      </span>
    </div>
  )
}

export default AmountEnter
