import React, { useEffect, useState } from 'react'
import { CustomDropDown } from './customDropDown';
import { useDetails } from './details';
function Options({
    selectedCurrency,
    onChangeCurrency
}){
    const [data,flagsMap] = useDetails()

    
    return (
        <>
        <CustomDropDown 
        data = {data}
        flagsMap = {flagsMap}
        onChangeCurrency = {onChangeCurrency}
        selectedCurrency = {selectedCurrency}
        />
        </>
    )
}

export default Options