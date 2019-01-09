import { useState, useCallback } from "react";

export default function useInputValue(initiateValue) {
    const [value, setValue] = useState(initiateValue);
    const [disabled, setDisabled] =  useState(false);
    let onChange = useCallback(e => setValue(e.target.value), []);
    return { value, onChange, setValue, disabled, setDisabled };
}