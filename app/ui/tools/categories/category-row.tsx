"use client";
import m_categories from "@/app/lib/(models)/m_categories";
import React, { useState } from "react";

export function DropdownRow({ id }: { id: string[] }) {
  console.log(id);
  const [isRowVisible, setRowVisible] = useState(false);

  const toggleRowVisibility = () => {
    setRowVisible((prevVisibility) => !prevVisibility);
  };

  const renderRow = () => {
    return (
      <div>
        <h3>Tes</h3>
      </div>
    );
  };

  return (
    <div>
      <button
        type="button"
        className="rounded-md border p-2 hover:bg-gray-100"
        onClick={toggleRowVisibility}
      >
        <svg
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isRowVisible && renderRow()}
    </div>
  );
}
