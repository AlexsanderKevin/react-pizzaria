import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext.tsx";

export default function PointCounter() {
  const { stoomPoints } = useContext( GlobalContext )

  return (
    <div className="flex flex-col items-end">
      <p className="text-blue-600 font-bold hidden sm:block">
        Stoom Points
      </p>
      <p className="text-blue-600 font-bold">
        <span className="text-white">{ stoomPoints }</span> Pontos
      </p>
    </div>
  )
}
