import type React from "react";
import { useReducer } from "react";


type FromState = {
    name: string,
    email: string,
    age: number,
    image: File | null;
}

const initialState: FromState = {
    name: "",
    email: "",
    age: 0,
    image: null
}

type FormActions =
    { type: "SET_NAME", payload: string } |
    { type: "SET_EMAIL", payload: string } |
    { type: "SET_AGE", payload: number } |
    { type: "SET_IMAGE"; payload: File } |
    { type: "RESET" };



function reducer(state: FromState, action: FormActions): FromState {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }

        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload
            }


        case "SET_AGE":
            return {
                ...state,
                age: action.payload
            }


        case "SET_IMAGE":
            return { ...state, image: action.payload };

        default:
            return state
    }


}



export const UserForm: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Submitted User:", state);
    }

    const handelImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            dispatch({ type: "SET_IMAGE", payload: file })
        }

    }



    return (
        <form action="" onSubmit={handelSubmit}>
            <input type="text"
                placeholder="name"
                value={state.name}
                onChange={(e) => { dispatch({ type: "SET_NAME", payload: e.target.value }) }}
            />
            <input
                type="email"
                placeholder="Email"
                value={state.email}
                onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
            />
            <input
                type="number"
                placeholder="Age"
                value={state.age}
                onChange={(e) => dispatch({ type: "SET_AGE", payload: Number(e.target.value) })}
            />

            <input type="file"
                accept="image/*"
                onChange={handelImageChange}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
            </button>

        </form>
    )

}