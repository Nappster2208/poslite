import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Form() {
  return (
    <form>
      {/* <form action={dispatch}> */}
      <div className="rounded-md p-4 md:p-6">
        <div className="bg-white shadow-md p-2 rounded-lg">
          {/* Product Code */}
          <div className="mb-4">
            <label htmlFor="catName" className="mb-2 block text-sm font-medium">
              Category
            </label>
            <div className="relative">
              <input
                id="catName"
                name="catName"
                className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="code-error"
                placeholder="Enter Category Name"
              ></input>
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/tools/categories"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        {/* <Buttons type="submit">Create Invoice</Buttons> */}
      </div>
    </form>
  );
}
