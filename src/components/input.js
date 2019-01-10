import { useState, useCallback } from "react";

export default function useInputValue(initiateValue, setOr) {
    const [value, setValue] = useState(initiateValue);
    const [disabled, setDisabled] =  useState(false);
    let onChange = useCallback(e => setValue(e.target.value), []);
    if(setOr) return { value, onChange, disabled, setDisabled, setValue };
    return { value, onChange, disabled };
    
}