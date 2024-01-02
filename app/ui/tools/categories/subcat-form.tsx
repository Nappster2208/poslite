"use client";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Buttons } from "../../button";
import { lusitana } from "../../fonts";
import clsx from "clsx";
import {
  categorySchema,
  categorySchemaType,
  subcategorySchema,
  subcategorySchemaType,
} from "@/validation/categorySchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { AddSubCategory } from "@/app/lib/action";

const Subcat: React.FC<{ category: any }> = ({ category }) => {
  const sub = useSearchParams();
  const subcat = sub.get("sub");
  let splitSub: string[] = [];

  if (subcat && subcat.trim() !== "") {
    splitSub = subcat?.split(",");
  }

  const categoryData = category.length > 0 ? category[0] : null;
  const { _id, catName } = categoryData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<subcategorySchemaType>({
    resolver: yupResolver(subcategorySchema),
  });

  const onSubmit = async (data: subcategorySchemaType) => {
    try {
      // Call the createCategory function with the form data
      await AddSubCategory(_id, {
        subcatName: data.subcatName,
        subcatDesc: data.subcatDesc,
      });
      toast.success("Sub Category created successfully!");
    } catch (error) {
      toast.success("Error updating sub category: " + error);
    }
  };

  return (
    <>
      <nav className="block">
        <ol className={clsx(lusitana.className, "flex text-xl md:text-2xl")}>
          <span className="mx-1 inline-block">{catName}</span>
          {splitSub.length >= 1 && (
            <span className="mx-1 inline-block">{">"}</span>
          )}
          {splitSub.length === 1 && (
            <span className="mx-1 inline-block">{splitSub}</span>
          )}
          {splitSub.length > 1 &&
            splitSub.map((item, index) => (
              <li key={index}>
                <span className="mx-1 inline-block">{item}</span>
                {index < splitSub.length - 1 ? (
                  <span className="mx-1 inline-block">{">"}</span>
                ) : null}
              </li>
            ))}
        </ol>
      </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md p-4 md:p-6">
          <div className="bg-white shadow-md p-2 rounded-lg">
            {/* Product Code */}
            <div className="mb-4">
              <label
                htmlFor="subcatName"
                className="mb-2 block text-sm font-medium"
              >
                Sub Category
              </label>
              <div className="relative">
                <input
                  id="subcatName"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Enter Category Name"
                  {...register("subcatName")}
                />
                <span className="text-red-400">
                  {errors.subcatName?.message}
                </span>
                <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="subcatDesc"
                className="mb-2 block text-sm font-medium"
              >
                Sub Description
              </label>
              <div className="relative">
                <input
                  id="subcatDesc"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Enter Category Description"
                  {...register("subcatDesc")}
                />
                <span className="text-red-400">
                  {errors.subcatDesc?.message}
                </span>
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
          <Buttons type="submit">Save</Buttons>
        </div>
      </form>
    </>
  );
};

export default Subcat;
