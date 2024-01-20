import React from "react";
import Brand from "../Brand/Brand.tsx";
import PointCounter from "../PointCounter/PointCounter.tsx";

export default function Header() {
  return (
    <header className="bg-orange-400 py-1 px-4 flex justify-center">
      <div className="max-w-screen-lg w-full flex justify-between">
        <Brand/>
        <PointCounter/>
      </div>
    </header>
  )
}
