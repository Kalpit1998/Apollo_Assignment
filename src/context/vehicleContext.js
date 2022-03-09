import { createContext, useState } from "react";

export const VehicleContext = createContext();

export const VehicleContextProvider = ({children}) => {

    const [detail, setDetail] = useState([]);

    const handleDetail = (ele) => {
        setDetail(ele);
    }

    return <VehicleContext.Provider value={{handleDetail, detail}}>{children}</VehicleContext.Provider>
}