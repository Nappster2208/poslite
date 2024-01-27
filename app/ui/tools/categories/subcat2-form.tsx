"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { lusitana } from "../../fonts";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Buttons } from "../../button";
import { createSub2 } from "@/app/lib/action";
import { useForm } from "react-hook-form";
import {
  subcategorySchema,
  subcategorySchemaType,
} from "@/validation/categorySchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";

const Form = ({ data }: { data: any }) => {
  const catId = useSearchParams()?.get("sub");
  const [catName, setCatName] = useState("");
  const { _id, subcatName } = data;

  useEffect(() => {
    fetch(`/api/categories/getname/${catId}`)
      .then((res) => res.json())
      .then((data) => {
        setCatName(data);
      });
  }, [catId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<subcategorySchemaType>({
    resolver: yupResolver(subcategorySchema),
  });

  const onSubmit = async (data: subcategorySchemaType) => {
    try {
      await createSub2({
        subcatId: _id.toString(),
        subcatName: data.Name,
        subcatDesc: data.Description,
      });
      toast.success("Sub Category created successfully!");
    } catch (error) {
      toast.error("Error updating sub category: " + error);
    }
  };

  return (
    <>
      <div className="block">
        <div className={clsx(lusitana.className, "flex text-lg md:text-xl")}>
          <label className="mx-1 inline-block">{catName}</label>
          <label className="mx-1 inline-block">{">"}</label>
          <label className="mx-1 inline-block">{subcatName}</label>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-lg p-4 md:p-6">
          <div className="bg-white shadow-md p-2 rounded-lg">
            <div className="mb-4 ">
              <label
                htmlFor="subcatName2"
                className="mb-2 block text-sm font-medium"
              >
                Sub Category 2
              </label>
              <div className="relative">
                <input
                  id="subcatName2"
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
                htmlFor="subcatDesc2"
                className="mb-2 block text-sm font-medium"
              >
                Sub Description 2
              </label>
              <div className="relative">
                <input
                  id="subcatDesc2"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Enter Description"
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
            href={`/dashboard/tools/subcategories/${_id}/subcategories2/`}
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

export default Form;
