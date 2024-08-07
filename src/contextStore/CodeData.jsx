import { createContext, useState } from "react";

export const CodeData = createContext();

export const DataProvider = ({ children }) => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
     
    return (
        <CodeData.Provider value={{ html, css, js, setCss, setHtml, setJs }}> 
            {children}
        </CodeData.Provider>
    );
};
