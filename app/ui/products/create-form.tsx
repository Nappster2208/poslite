"use client";

import { CustomerField } from "@/app/lib/definitions";
import Link from "next/link";
import {
  ArchiveBoxIcon,
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  FolderOpenIcon,
  PencilSquareIcon,
  QrCodeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
// import { Buttons, ButtonUpload } from "@/app/ui/button";
import { Button } from "@mui/material";
// import { createInvoice } from '@/app/lib/action';
import { useFormState } from "react-dom";
import Image from "next/image";

export default function Form() {
  return (
    <form>
      {/* <form action={dispatch}> */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Product Code */}
        <div className="mb-4">
          <label
            htmlFor="productCode"
            className="mb-2 block text-sm font-medium"
          >
            Product Code
          </label>
          <div className="relative">
            <input
              id="productCode"
              name="productCode"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="productCode-error"
            ></input>
            <QrCodeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Product Barcode */}
        <div className="mb-4">
          <label
            htmlFor="productBarcode"
            className="mb-2 block text-sm font-medium"
          >
            Product Barcode
          </label>
          <div className="relative">
            <input
              id="productBarcode"
              name="productBarcode"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="productCode-error"
            ></input>
            <QrCodeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="flex flex-grow justify-between gap-10 md:gap-52">
          {/* Product Image */}
          <div className="mb-4 w-96">
            <label
              htmlFor="productImage"
              className="mb-2 block text-sm font-medium"
            >
              Produc Image
            </label>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/1160358.png"
                width={70}
                height={70}
                alt="Product Image"
              />
              <Button
                variant="contained"
                component="label"
                className="bg-gradient-to-tr from-cyan-500 to-purple-700"
              >
                Upload File
                <input type="file" accept="image/*" hidden />
              </Button>
            </div>
          </div>
          <div className="w-full">
            {/* Product Name */}
            <div className="mb-4">
              <label
                htmlFor="productName"
                className="mb-2 block text-sm font-medium"
              >
                Product Name
              </label>
              <div className="relative">
                <input
                  id="productName"
                  name="productName"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="productCode-error"
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
                Product Description
              </label>
              <div className="relative">
                <input
                  id="productDescription"
                  name="productDescription"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="productCode-error"
                ></input>
                <PencilSquareIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                aria-describedby="amount-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  aria-describedby="status-error"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
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
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        {/* <Buttons type="submit">Create Invoice</Buttons> */}
      </div>
    </form>
  );
}
