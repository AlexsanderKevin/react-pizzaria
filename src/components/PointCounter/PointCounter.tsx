import React, { useEffect, useState } from "react";

export default function PointCounter() {
  const [ points, setPoints ] = useState<number>(0)

  useEffect(() => {
    const storedPoints = Number(localStorage.getItem('stoomPoints'))
    setPoints(storedPoints || 0)
  }, [])

  return (
    <div className="flex flex-col items-end">
      <p className="text-blue-500 font-bold hidden sm:block">
        Stoom Points
      </p>
      <p className="text-blue-500 font-bold">
        <span className="text-white">{ points }</span> Pontos
      </p>
    </div>
  )
}
