import React, {useState} from "react";

function InputArea(props){
    const [formData, setFormData] = useState("");
    
    function handleChange(event){
        const newValue = event.target.value;
        setFormData(newValue);
    }
    return (
         <div className="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={formData}
                />
                <button>
                    <span>Add</span>
                </button>
            </div>
    );
}
export default InputArea;