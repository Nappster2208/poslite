import { TagIcon } from "@heroicons/react/20/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";

type MyObject = {
  category: string;
};

export function AddInput() {
  const [val, setVal] = useState<MyObject[]>([{ category: "" }]);

  console.log(val);

  const addHandle = () => {
    setVal([...val, { category: "" }]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const list = [...val];
    list[index].category = value;
    setVal(list);
  };

  const removeHandle = (index: any) => {
    const list = [...val];
    list.splice(index, 1);
    setVal(list);
  };
  return (
    <div className="flex flex-col">
      {val.map((value, index) => (
        <div key={index} className="relative flex items-center">
          <input
            type="text"
            name="myinput"
            value={value.category}
            onChange={(e) => handleChange(e, index)}
          />
          {val.length - 1 === index && setVal.length < 4 && (
            <button type="button" onClick={addHandle}>
              +
            </button>
          )}
          {val.length > 1 && (
            <button type="button" onClick={() => removeHandle(index)}>
              -
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
