"use client";

import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Buttons } from "../../button";
import { createCategory } from "@/app/lib/action";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  categorySchema,
  categorySchemaType,
} from "@/validation/categorySchema";
import { toast } from "sonner";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<categorySchemaType>({
    resolver: yupResolver(categorySchema),
  });
  const onSubmit = async (data: categorySchemaType) => {
    try {
      // Call the createCategory function with the form data
      await createCategory({
        catName: data.Name,
        catDesc: data.Description,
      });
      toast.success("Category created successfully!");
    } catch (error) {
      toast.error("Error creating category: " + error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md p-4 md:p-6">
          <div className="bg-white shadow-md p-2 rounded-lg">
            <div className="mb-4">
              <label
                htmlFor="catName"
                className="mb-2 block text-sm font-medium"
              >
                Category
              </label>
              <div className="relative">
                <input
                  id="catName"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Enter Category Name"
                  {...register("Name")}
                />
                <span className="text-red-400">{errors.Name?.message}</span>
                <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="catDesc"
                className="mb-2 block text-sm font-medium"
              >
                Description
              </label>
              <div className="relative">
                <input
                  id="catDesc"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Enter Category Description"
                  {...register("Description")}
                />
                <span className="text-red-400">
                  {errors.Description?.message}
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
}
