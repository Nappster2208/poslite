import {
  deleteCategory,
  deleteSubCategory,
  deleteSubCategory2,
} from "@/app/lib/action";
import {
  ArrowTopRightOnSquareIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreateCategory() {
  return (
    <Link
      href="/dashboard/tools/categories/create"
      className="flex h-10 items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create New</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCategory({
  id,
  sub1,
  sub2,
}: {
  id: string;
  sub1: string;
  sub2: string;
}) {
  let href = "";
  if (sub1 !== "" && sub2 === "") {
    href = `/dashboard/tools/subcategories/${sub1}/edit?catid=${id}`;
  } else if (sub2 !== "") {
    href = `/dashboard/tools/subcategories2/${sub2}/edit?subcatid=${sub1}`;
  } else {
    href = `/dashboard/tools/categories/${id}/edit`;
  }
  return (
    <Link
      href={href}
      className="rounded-md p-1 hover:bg-gray-100 flex flex-col items-center"
    >
      <PencilIcon className="w-5" />
      <span className="sr-only">Edit</span>
    </Link>
  );
}

export function DeleteCategory({ id }: { id: string }) {
  const deleteCategoryWithId = deleteCategory.bind(null, id);
  return (
    <form action={deleteCategoryWithId}>
      <button className="rounded-md p-1 hover:bg-gray-100 flex flex-col items-center">
        <TrashIcon className="w-5" />
        <span className="sr-only">Delete</span>
      </button>
    </form>
  );
}

export function DeleteSubCategory({
  id,
  catId,
}: {
  id: string;
  catId: string;
}) {
  const deleteWithId = deleteSubCategory.bind(null, id, catId);

  return (
    <form action={deleteWithId}>
      <button className="rounded-md p-1 hover:bg-gray-100 flex flex-col items-center">
        <TrashIcon className="w-5" />
        <span className="sr-only">Delete</span>
      </button>
    </form>
  );
}

export function DeleteSubCategory2({ id }: { id: string }) {
  const deleteWithId = deleteSubCategory2.bind(null, id);

  return (
    <form action={deleteWithId}>
      <button className="rounded-md p-1 hover:bg-gray-100 flex flex-col items-center">
        <TrashIcon className="w-5" />
        <span className="sr-only">Delete</span>
      </button>
    </form>
  );
}

export function AddSubCategory({
  id,
  otherSub,
  className,
}: {
  id: string;
  otherSub: string[];
  className: string;
}) {
  let subString = "";
  let href = "";
  if (otherSub.length > 0) {
    subString = otherSub.length > 1 ? otherSub.join(",") : otherSub[0] || "";
    href = `/dashboard/tools/categories/${otherSub[0]}/create-sub2?sub=${id}`;
  } else {
    href = `/dashboard/tools/categories/${id}/create-sub`;
  }
  return (
    <Link href={href} className={className}>
      <PlusIcon className="w-5" />
      <span className="sr-only">Add Sub</span>
    </Link>
  );
}

export function SubCategoriesBtn({ id, sub2 }: { id: string; sub2: boolean }) {
  let href = "";
  if (!sub2) {
    href = `/dashboard/tools/categories/${id}/subcategories/`;
  } else {
    href = `/dashboard/tools/subcategories/${id}/subcategories2/`;
  }
  return (
    <Link
      href={href}
      className="rounded-md p-1 hover:bg-gray-100 flex flex-col items-center"
    >
      <ArrowTopRightOnSquareIcon className="w-5" />
      <span className="sr-only">Sub</span>
    </Link>
  );
}
