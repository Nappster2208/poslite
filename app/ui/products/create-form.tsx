"use client";

import { CustomerField } from "@/app/lib/definitions";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PencilSquareIcon,
  QrCodeIcon,
  ScaleIcon,
  Square3Stack3DIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
// import { Buttons, ButtonUpload } from "@/app/ui/button";
import { Button } from "@mui/material";
// import { createInvoice } from '@/app/lib/action';
import { useFormState } from "react-dom";
import Image from "next/image";
import { AddInput } from "./add-dynamic-input";

export default function Form() {
  return (
    <form>
      {/* <form action={dispatch}> */}
      <div className="rounded-md p-4 md:p-6">
        <div className="bg-white shadow-md p-2 rounded-lg">
          {/* Product Code */}
          <div className="mb-4">
            <label
              htmlFor="productCode"
              className="mb-2 block text-sm font-medium"
            >
              Code
            </label>
            <div className="relative">
              <input
                id="productCode"
                name="productCode"
                className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="code-error"
                placeholder="Enter unique product code"
              ></input>
              <QrCodeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
            <Button>Generate Code</Button>
          </div>

          {/* Product Barcode */}
          <div className="mb-4">
            <label
              htmlFor="productBarcode"
              className="mb-2 block text-sm font-medium"
            >
              Barcode
            </label>
            <div className="relative">
              <input
                id="productBarcode"
                name="productBarcode"
                className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="barcode-error"
                placeholder="Enter product barcode here"
              ></input>
              <QrCodeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="mt-2 bg-white shadow-md p-2 rounded-lg">
          <div className="flex flex-grow justify-between gap-10 md:gap-52">
            {/* Product Image */}
            <div className="mb-4 w-full">
              <label
                htmlFor="productImage"
                className="mb-2 block text-sm font-medium"
              >
                Image
              </label>
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-full max-w-md aspect-[70/45]">
                  <Image
                    className="rounded-md"
                    src="/1160358.png"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    alt="Product Icon"
                  />
                </div>
                <Button
                  variant="contained"
                  component="label"
                  className="bg-gradient-to-tr from-cyan-500 to-blue-700"
                >
                  Upload Image
                  <input type="file" accept="image/*" hidden />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 bg-white shadow-md p-2 rounded-lg">
          <div className="w-full">
            {/* Product Name */}
            <div className="mb-4">
              <label
                htmlFor="productName"
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>
              <div className="relative">
                <input
                  id="productName"
                  name="productName"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="name-error"
                  placeholder="Enter Name"
                ></input>
                <PencilSquareIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Product Name */}
            <div className="mb-4">
              <label
                htmlFor="productDescription"
                className="mb-2 block text-sm font-medium"
              >
                Description
              </label>
              <div className="relative">
                <textarea
                  id="productDescription"
                  name="productDescription"
                  rows={5}
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="description-error"
                  placeholder="Enter description"
                ></textarea>
                <PencilSquareIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 flex-grow justify-between">
            {/* Product Categories */}
            <div className="mb-4 w-full">
              <label
                htmlFor="productCategories"
                className="mb-2 block text-sm font-medium"
              >
                Category
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="flex w-full">
                  <select
                    id="productCategories"
                    name="productCategories"
                    aria-describedby="category-error"
                    defaultValue=""
                    className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
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
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 bg-white shadow-md p-2 rounded-lg">
          <div className="grid">
            {/* Product Price */}
            <label
              htmlFor="purchasePrice"
              className="mb-2 block text-sm font-medium"
            >
              Purchase Price
            </label>
            <div className="relative">
              <input
                id="purchasePrice"
                name="purchasePrice"
                type="number"
                className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="name-error"
                placeholder="Enter purchase amount"
              ></input>
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
            <AddInput />
            {/* <input
                    id="productPrice"
                    name="productPrice"
                    type="number"
                    step="0.01"
                    placeholder="Enter IDR amount"
                    aria-describedby="price-error"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  /> */}
          </div>

          {/* Product Stock */}
          <div className="mb-4 w-full">
            <label
              htmlFor="productStock"
              className="mb-2 block text-sm font-medium"
            >
              Stock of goods
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="productStock"
                  name="productStock"
                  type="number"
                  step="0.01"
                  placeholder="Enter Stock"
                  aria-describedby="stock-error"
                  defaultValue=""
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <Square3Stack3DIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

          {/* Product Status */}
          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              Set the product status
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="nonactive"
                    name="status"
                    type="radio"
                    value="nonactive"
                    aria-describedby="status-error"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="nonactive"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    Non Active <ClockIcon className="h-4 w-4" />
                  </label>
                </div>
                {/* <div id="status-error" aria-live="polite" aria-atomic="true">
                {state.errors?.status &&
                  state.errors.status.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div> */}
                <div className="flex items-center">
                  <input
                    id="active"
                    name="status"
                    type="radio"
                    value="active"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="active"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Active <CheckIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/products"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        {/* <Buttons type="submit">Create Invoice</Buttons> */}
      </div>
    </form>
  );
}
