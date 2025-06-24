import React, { useEffect, useState } from 'react'

//Gives the name of Currencies available, with country flag and symbol
function useDetails(){
    const [data,setData] = useState({})
    const [flagsMap, setFlagsMap] = useState({}); 

    //for getting all the currencies available with our api
    useEffect(() => {
        fetch(`https://api.frankfurter.app/currencies`)
        .then((res) => res.json())
        .then((res) => setData(res))
    },[]);

    //getting flgs for each currencies we hai
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=flags,currencies')
        .then((res) => res.json())
        .then(countries => {
            const mapc = {}
            countries.forEach(country => {
                if(country.currencies){
                    Object.keys(country.currencies).forEach(code =>{
                        if(data[code]){
                            mapc[code] = {
                                flag: country.flags?.png || country.flags?.svg || '',
                                symbol : country.currencies[code].symbol || ''
                            }
                        }
                    })
                }
            });
            setFlagsMap(mapc)
        })
    },[data]); //depends on data because it useEffect work asynchronously
    //run this only when data is updated, else it will run before data
    //is updated and hence empty

    return [data,flagsMap];

}
export {useDetails}