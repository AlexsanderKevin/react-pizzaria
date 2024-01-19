import React from "react";
import Brand from "../Brand/Brand.tsx";
import PointCounter from "../PointCounter/PointCounter.tsx";
import Container from "../Container/Container.tsx";

export default function Header() {
  return (
    <header className="bg-orange-400 py-1 px-2 flex justify-center">
      <Container>
        <Brand/>
        <PointCounter/>
      </Container>
    </header>
  )
}
