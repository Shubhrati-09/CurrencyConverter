import { useState } from 'react'
import './App.css'
import { AmountEnter,DropDown ,useDetails} from './components'
import useCurrencyConversionRate from './currencyHook'

function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmt,setConvertedAmt] = useState(0);
  const [symbol ,setSymbol] = useState('$');
  
  const currencyInfo = useCurrencyConversionRate(from);
  const [data,flagsMap] = useDetails()

  const convert = () =>{
    console.log(currencyInfo[to.toUpperCase()])
     setConvertedAmt(amount*currencyInfo[to.toUpperCase()]);
  }

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
    setSymbol(flagsMap[to.toUpperCase()].symbol)
  }
  return (

    <>
      <div className='w-full h-screen bg-repeat flex justify-center items-center'
      style = {{backgroundColor: '#050F4D'}}>
      <div className='w-full flex-col justify-center items-center px-5'>
        <div className=' font-semibold text-5xl md:font-extrabold text-center mb-15'>
          <h1>Currency Convertor</h1>
        </div>
        <div className=" flex flex-col gap-6 bg-white p-6 rounded-2xl w-full max-w-6xl mx-auto">
          <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-[33%_1fr] md:grid-rows-1 gap-7 md:gap-2">
            {/* Amount Enter Box */}
            <AmountEnter 
              onChange={(amt) => setAmount(amt)} 
              Amount = {amount}
              sym = {symbol}
            />
            {/* From Dropdown Box */}
            <div className='flex flex-col md:flex-row gap-2 min-w-0 w-full items-center justify-center'>
              <DropDown 
              label="From"
              selectedCurrency={from}
              onChangeCurrency={(currency) => {
                setFrom(currency)
                setSymbol(flagsMap[currency.toUpperCase()].symbol)
              }}/>
              {/* Swap button div */}
              <div className='relative'>
                <button className='h-12 w-12 absolute z-50 -left-5 -top-6 border 
               border-black rounded-full bg-blue-950 flex justify-center items-center
               hover:bg-blue-900 shadow-md hover:shadow-lg'
               onClick = {swap}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                </button>
              </div>
              {/* To DropDown Box */}
              <DropDown 
              label="To"
              selectedCurrency={to}
              onChangeCurrency={(currency) => setTo(currency)}/>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-5 sm:justify-between'>
            <div className=' text-black text-2xl font-semibold'>
              {flagsMap[from.toUpperCase()]?.symbol} {amount} is equal to {flagsMap[to.toUpperCase()]?.symbol} {convertedAmt} 
            </div>
            {/* Convert Button */}
            <button className= "bg-blue-950 w-70 h-12 text-2xl rounded-lg hover:bg-blue-900 shadow-lg shadow-gray-600"
              onClick={convert}>
              Convert
            </button>
          </div>
        </div>
        <div className='text-center mt-10'>
          <p>Designed By Shubhrati. All Rights Reserved.</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
