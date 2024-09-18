import { useState } from "react";

export default function useInputValue(defaultInput = ''){
    const [value, setValue] = useState(defaultInput)
    return{
        value,
        onChange: (event) => setValue(event.target.value)
    }
}