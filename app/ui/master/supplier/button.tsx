import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreateSupplier() {
  return (
    <Link
      href="/dashboard/master/supplier/create"
      className="flex h-10 items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Tambah Supplier</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateSupplier({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/master/supplier/${id}/edit`}
      className="rounded-md p-1 hover:bg-gray-100 flex flex-col items-center"
    >
      <PencilIcon className="w-5" />
      <span className="sr-only">Edit</span>
    </Link>
  );
}

export function DeleteSupplier({ id }: { id: string }) {
  // const deleteSupplierWithId = deleteCategory.bind(null, id);
  return (
    <form>
      {/* <form action={deleteSupplierWithId}> */}
      <button className="rounded-md p-1 hover:bg-gray-100 flex flex-col items-center">
        <TrashIcon className="w-5" />
        <span className="sr-only">Delete</span>
      </button>
    </form>
  );
}
