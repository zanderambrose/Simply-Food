import React from 'react'
import { useState } from 'react'
import ManipulateData from './ManipulateData'


function Input() {

    const [input, setInput] = useState("")
    const [saveState, setSaveState] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSaveState(input)
        setInput('');
    }



    return (
        <div>
            <div className="pantryInput">
                <form onSubmit={handleSubmit} className="pantryForm">
                    <label>Enter the ingredients you have for dinner</label>
                    <input value={input} onChange={handleChange} type='text' placeholder="What's in your pantry?" />
                </form>
            </div>
            {saveState && <ManipulateData saveState={saveState} />}
        </div>
    )
}

export default Input
