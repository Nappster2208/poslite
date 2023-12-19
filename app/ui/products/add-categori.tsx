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

  const handleChange = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
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
          <div className="flex w-full">
            <select
              id="productCategories"
              name="productCategories"
              aria-describedby="category-error"
              defaultValue=""
              onChange={(e) => handleChange(e, index)}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            >
              <option value="" disabled>
                Select a Category
              </option>
              <option value="Food">Food</option>
              <option value="Nonfood">Non Food</option>
              <option value="Clothes">Clothes</option>
            </select>
            <TagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          {val.length - 1 === index && setVal.length < 4 && (
            <button type="button" onClick={addHandle}>
              <PlusIcon className="right-3 top-1/2 h-[18px] w-[18px] peer-focus:text-gray-900" />
            </button>
          )}
          {val.length > 1 && (
            <button type="button" onClick={() => removeHandle(index)}>
              <MinusIcon className="right-3 top-1/2 h-[18px] w-[18px] peer-focus:text-gray-900" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
