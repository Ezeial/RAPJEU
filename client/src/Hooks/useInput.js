import { useState } from 'react'

const useInput = (initialValue = '') => {
    const [input, setInput] = useState(initialValue)

    const setText = (e) => setInput(e.target.value)

    return [
        input,
        setText
    ]
}

export default useInput