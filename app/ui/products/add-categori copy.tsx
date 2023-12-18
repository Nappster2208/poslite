import { useState } from "react";

export function AddInput() {
  const [categories, setCategories] = useState([""]);

  const handleChange = (value: any, index: any) => {
    const newCategory = categories.map((categoryItem, categoryIndex) => {
      return categoryIndex === index ? value : categoryItem;
    });
    setCategories(newCategory);
  };

  return (
    <div>
      <button
        onClick={() => {
          setCategories([...categories, ""]);
        }}
      >
        +
      </button>
      {categories.map((item, index) => {
        return (
          <div className="flex">
            <input
              value={item}
              onChange={(e) => handleChange(e.target.value, index)}
            />
            <button
              onClick={() => {
                const newarr = categories.filter((i, j) => {
                  return index !== j;
                });
                setCategories(newarr);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
