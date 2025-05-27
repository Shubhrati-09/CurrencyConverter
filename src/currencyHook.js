import React, { useEffect, useState } from 'react'

function useCurrencyConversionRate(currency) {
    const [data,setData] = useState({});
    useEffect(() => {
        fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["rates"]))
        // console.log("Inside Fetch ",data);
    },[currency]);

    //  console.log("Inside useCurrencyinfo ",data);
     return data;
}

export default useCurrencyConversionRate
