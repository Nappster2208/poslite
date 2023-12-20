import {
  CurrencyDollarIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export function AddInput() {
  const [inputs, setInputs] = useState([{ id: 1, name: "" }]);
  const maxInputs = 3; //batasan jumlah input

  const handleInputChange = (id: number, value: string) => {
    const updateInputs = inputs.map((input) =>
      input.id === id ? { ...input, name: value } : input
    );
    setInputs(updateInputs);
  };

  const handleAddInput = () => {
    if (inputs.length < maxInputs) {
      const newInput = { id: inputs.length + 1, name: "" };
      setInputs([...inputs, newInput]);
    }
  };

  const handleRemoveInput = (id: number) => {
    const updatedInputs = inputs.filter((input) => input.id !== id);
    setInputs(
      updatedInputs.map((input, index) => ({ ...input, id: index + 1 }))
    );
  };

  return (
    <div className="mb-4 w-full">
      <label className="mb-2 block text-sm font-medium">Set Prices</label>
      {inputs.map((input) => (
        <div key={input.id} className="mb-4">
          <label
            htmlFor={`price-${input.id}`}
            className="mb-2 block text-sm font-medium"
          >
            Price {input.id}
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                type="number"
                id={`price-${input.id}`}
                name={`price-${input.id}`}
                value={input.name}
                onChange={(e) => handleInputChange(input.id, e.target.value)}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={`Enter Amount ${input.id}`}
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              {inputs.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveInput(input.id)}
                  className=""
                >
                  <MinusIcon className="right-3 top-1/2 h-[18px] w-[18px] peer-focus:text-gray-900" />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      {inputs.length < maxInputs && (
        <div className="mb-4">
          <button type="button" onClick={handleAddInput}>
            <PlusIcon className="right-3 top-1/2 h-[18px] w-[18px] peer-focus:text-gray-900" />
          </button>
        </div>
      )}
    </div>
  );
}
