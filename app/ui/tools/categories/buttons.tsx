import { deleteCategory } from "@/app/lib/action";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreateCategory() {
  return (
    <Link
      href="/dashboard/tools/categories/create"
      className="flex h-10 items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Category</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCategory({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/tools/categories/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCategory({ id }: { id: string }) {
  const deleteCategoryWithId = deleteCategory.bind(null, id);
  return (
    <form action={deleteCategoryWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function AddSubCategory({
  id,
  otherSub,
}: {
  id: string;
  otherSub: string[];
}) {
  const subString =
    otherSub.length > 1 ? otherSub.join(",") : otherSub[0] || "";
  return (
    <Link
      href={`/dashboard/tools/categories/${id}/subcat?sub=${subString}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <span className="sr-only">Add Sub</span>
      <PlusIcon className="w-5" />
    </Link>
  );
}

export function DropdownRow() {
  return (
    <button type="button" className="rounded-md border p-2 hover:bg-gray-100">
      <svg
        className="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}
