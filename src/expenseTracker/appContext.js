import { createContext, useReducer } from "react";
import TransectionReducer from './appReducer';

const initialTransections = [

    { amount: 250, desc: 'Mobile phone' },
    { amount: -150, desc: 'phone Charger' },
];

export const TransectionContext = createContext(initialTransections);




export const TransectionProvider = ({ children }) => {

    let [state, dispatch] = useReducer(TransectionReducer, initialTransections);

    function addTransection(transObject) {
        dispatch({
            type: "ADD_TRANSECTION",
            payload: {
                amount: transObject.amount,
                desc: transObject.desc
            }
        })
    }


    return (
        < TransectionContext.Provider value={{ transections: state, addTransection }} >
            {children}
        </TransectionContext.Provider >
    )


}