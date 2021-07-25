import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// export const StateProvider = ({ reducer, initialState, children }) => (
//     <StateContext.Provider value={ useReducer   (reducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// );
export const StateProvider = ({reducer, initialState, children}) =>{

    const state = useReducer(reducer, initialState);
    return (
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    );
}

// this is hook that allows to pull information from data layer

// export const useStateValue = () =>useContext(StateContext);
export const useStateValue = () => useContext(StateContext);
