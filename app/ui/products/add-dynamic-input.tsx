import {
  CurrencyDollarIcon,
  MinusIcon,
  PlusIcon,
  ScaleIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { useState } from "react";
import { Add } from "@mui/icons-material";

interface Input {
  id: number;
  name: string;
  unit: string;
  price: number;
  qty: number;
}

export function AddInput() {
  const [inputs, setInputs] = useState<Input[]>([
    { id: 1, name: "", unit: "", price: 0, qty: 0 },
  ]);
  const maxInputs = 5; //batasan jumlah input

  const handleInputChange = (
    id: number,
    field: string,
    value: string | number
  ) => {
    const updatedInputs = inputs.map((input) =>
      input.id === id ? { ...input, [field]: value } : input
    );
    setInputs(updatedInputs);
  };

  const handleAddInput = () => {
    if (inputs.length < maxInputs) {
      const newInput = {
        id: inputs.length + 1,
        name: "",
        unit: "",
        price: 0,
        qty: 0,
      };
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
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium">Set Prices</label>
      <div className="flex flex-col items-center">
        {inputs.map((input) => (
          <div key={input.id} className="mb-4">
            <div className="flex justify-between items-center mt-2 rounded-md gap-4">
              <label
                htmlFor={`qty-${input.id}`}
                className="mb-2 block text-sm font-medium"
              >
                Qty{input.id}
              </label>
              <div className="relative w-full">
                <input
                  type="number"
                  id={`qty-${input.id}`}
                  name={`qty-${input.id}`}
                  value={input.qty}
                  onChange={(e) =>
                    handleInputChange(
                      input.id,
                      "qty",
                      parseFloat(e.target.value)
                    )
                  }
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder={`Qty ${input.id}`}
                />
                <Square3Stack3DIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              <label
                htmlFor={`unit-${input.id}`}
                className="mb-2 block text-sm font-medium"
              >
                Unit{input.id}
              </label>
              <div className="relative w-full">
                <select
                  id={`unit-${input.id}`}
                  name={`unit-${input.id}`}
                  value={input.unit}
                  onChange={(e) =>
                    handleInputChange(input.id, "unit", e.target.value)
                  }
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                >
                  <option value="" disabled>
                    Select a Unit
                  </option>
                  <option value="PCS">PCS</option>
                  <option value="LSN">LSN</option>
                  <option value="BOX">BOX</option>
                </select>
                <ScaleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              <label
                htmlFor={`price-${input.id}`}
                className="mb-2 block text-sm font-medium"
              >
                Price{input.id}
              </label>
              <div className="relative w-full">
                <input
                  type="number"
                  id={`harga-${input.id}`}
                  name={`harga-${input.id}`}
                  value={input.price}
                  onChange={(e) =>
                    handleInputChange(
                      input.id,
                      "price",
                      parseFloat(e.target.value)
                    )
                  }
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder={`Enter Amount ${input.id}`}
                />
                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              {inputs.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveInput(input.id)}
                >
                  <MinusIcon className="right-3 top-1/2 h-[18px] w-[18px] peer-focus:text-gray-900" />
                </button>
              )}
            </div>
          </div>
        ))}
        {inputs.length < maxInputs && (
          <Button
            variant="contained"
            type="button"
            onClick={handleAddInput}
            className="ml-2 rounded-full bg-blue-500 hover:bg-blue-600 px-3 py-1.5 text-xs font-medium text-white"
            endIcon={<Add />}
          >
            <span>Add more prices</span>
          </Button>
        )}
      </div>
    </div>
  );
}
