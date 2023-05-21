import React, { useState } from "react";
import { Product } from "../../Components/Product/Product";

export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Product props={{ active, setActive }} />
    </>
  );
}
