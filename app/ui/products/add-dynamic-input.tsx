import { TagIcon } from "@heroicons/react/20/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";

type CatObject = {
  category: string;
};

type PriceObject = {
  price: number;
};

export function AddSelect() {
  const [val, setVal] = useState<CatObject[]>([{ category: "" }]);

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

export function AddInput() {
  const [inputList, setInputList] = useState<PriceObject[]>([{ price: 0 }]);

  console.log(inputList);

  const addHandle = () => {
    setInputList([...inputList, { price: 0 }]);
  };

  const changeHandle = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    let { value } = e.target;
    let list = [...inputList];
    list[index].price = parseFloat(value);
    setInputList(list);
  };

  const removeHandle = (index: number) => {
    let list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  return (
    <div>
      {inputList.map((value, index) => (
        <div key={index} className="relative flex items-center">
          <input
            type="text"
            name="myinput"
            value={value.price}
            onChange={(e) => changeHandle(e, index)}
          />
          {inputList.length - 1 === index && setInputList.length <= 4 && (
            <button type="button" onClick={addHandle}>
              +
            </button>
          )}
          {inputList.length > 1 && (
            <button type="button" onClick={() => removeHandle(index)}>
              -
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
