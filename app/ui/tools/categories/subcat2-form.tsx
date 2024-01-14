"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Form = () => {
  const catId = useSearchParams()?.get("sub");
  const [catName, setCatName] = useState("");

  useEffect(() => {
    fetch(`/api/categories/getname/${catId}`)
      .then((res) => res.json())
      .then((data) => {
        setCatName(data);
      });
  }, [catId]);

  return <div>{catName}</div>;
};

export default Form;
