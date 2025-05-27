import React from 'react'
import Options from './Option'
function DropDown({
    label,
    onChangeCurrency,
    selectedCurrency
    }) {
  return (
    <div className='h-[84px] w-full border border-solid border-gray-400
    bg-white hover:bg-gray-100 px-4 py-2 text-2xl rounded-2xl flex 
    flex-col justify-center overflow-visible min-w-0'>
      <label className="text-sm font-normal text-zinc-400">{label}</label>
      {/* <select value={selectedCurrency} onChange={(e) => onChangeCurrency && onChangeCurrency(e.target.value)}
        className="text-black">
        <Options />
      </select> */}
      <Options 
        onChangeCurrency={onChangeCurrency}
        selectedCurrency={selectedCurrency}
      />
    </div>
  )
}

export default DropDown

