import type React from "react"

type InputProps<T> = {
    label?: string,
    type: "text" | "number" | "email" | "password",
    value: T,
    onChange: (value: T) => void,
    palaceholder?: string,
}


const Input = <T extends string | number>({ label, type, value, onChange, palaceholder }: InputProps<T>): React.ReactElement => {

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const val = e.target?.value;

        if (type === "number") {
            onChange(Number(val) as T);
        } else {
            onChange(val as T);
        }

    }



    return (
        <>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={handelChange}
                placeholder={palaceholder}
                className="border border-gray-300 rounded-md p-2 mb-4 w-full"

            />
        </>

    )
}

export default Input



// const Input: React.FC<InputProps<T extends string | number>> = ({ label, type, value, onChange, palaceholder }): React.ReactElement => {
//  TypeScript doesn't allow defining type parameters (<T>) inline inside other types like React.FC<...>. It expects only resolved types, not declarations.


// ✅ You must define T at the function level:

// const Input = <T extends string | number>(props: InputProps<T>) => {
// Now T is available here
// }
// This is valid because:

// 1. The generic is declared before the function body
// 2. TypeScript knows how to resolve T inside InputProps<T>





// 🤔 What happens if you remove <T extends string | number>?
// Then T becomes undefined — TypeScript won't know what it is.

// You’ll get an error like:
// Cannot find name 'T'

// That's because you're using T in InputProps<T>, but never declared what T is.
