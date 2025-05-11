import type React from "react";

type props = {
    options: string[] | number[],  // array of options
    label?: string, // label for the select
    onChange: (value: string | number) => void, // function to call when the value changes

}


const Select: React.FC<props> = ({ options, label, onChange }): React.ReactElement => {

    return (
        <div>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
            <select onChange={e => onChange(e.target.value)} >
                {
                    options.map((option, index) => {
                        return (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        )
                    })
                }

            </select>

        </div>
    )

}

export default Select;