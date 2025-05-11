import type React from "react"


type Select2Props<T, K extends keyof T> = {
    label?: string;
    options: T[];
    optionLabel: K;
    optionValue: K;
    onChange: (value: T) => void;
};

const Select2 = <T, K extends keyof T>({ label, options, optionLabel, optionValue, onChange }: Select2Props<T, K>) => {

    const handelChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const val = e.target?.value
        const selectedOption = options.find((option) => String(option[optionValue]) === val)
        if (selectedOption) {
            onChange(selectedOption)
        }

    }


    return (
        <div>
            {label && <label className="text-xl font-bold">{label}</label>}

            <select
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                onChange={handelChange}
                defaultValue={String(options[0][optionValue])}



            >

                {
                    options.map((option, idx) => {
                        return (
                            <option key={idx} value={String(option[optionValue])}>
                                {String(option[optionLabel])}
                            </option>
                        )
                    })
                }


            </select>


        </div>
    )
}

export default Select2