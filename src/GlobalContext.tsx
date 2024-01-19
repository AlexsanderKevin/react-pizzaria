import React, { ReactNode, SetStateAction, useEffect, useState } from "react";

interface IContextTypes {
  stoomPoints: number;
  addStoomPoints: ( newPoints: number ) => void;
}
export const GlobalContext = React.createContext<IContextTypes>({ stoomPoints: 0, addStoomPoints: () => {} }); 

interface IProviderProps {
  children: ReactNode
}
export const GlobalProvider = ({ children }: IProviderProps ) => {
  const [ stoomPoints, setStoomPoints ] = useState<number>(Number(localStorage.getItem('stoomPoints')))

  useEffect(() => {
    localStorage.setItem('stoomPoints', stoomPoints.toString() )
  }, [stoomPoints])

  const addStoomPoints = (newPoints:number) : void => {
    setStoomPoints(stoomPoints + newPoints)
  }

  return (
    <GlobalContext.Provider 
      value={{ stoomPoints, addStoomPoints }}
    >
      { children }
    </GlobalContext.Provider>
  )
}
