import { PlusIcon } from "@heroicons/react/24/outline";
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
