import { createContext, useState } from "react";

export const CodeData = createContext();

export const DataProvider = ({ children }) => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [width, setWidth] = useState(false);
    const [opcacity, setOpcacity] = useState(false);
     
    return (
        <CodeData.Provider value={{opcacity, setOpcacity,width, setWidth ,html, css, js, setCss, setHtml, setJs }}> 
            {children}
        </CodeData.Provider>
    );
};
