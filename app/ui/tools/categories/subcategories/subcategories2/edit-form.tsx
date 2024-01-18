"use client";
import {
  subcategorySchema,
  subcategorySchemaType,
} from "@/validation/categorySchema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Form: React.FC<{ data: any }> = ({ data }) => {
  let _id,
    subcatName: string,
    subcatDesc = "";

  data.map((item: any) => {
    _id = item._id;
    subcatName = item.subcatName;
    subcatDesc = item.subcatDesc;
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<subcategorySchemaType>({
    resolver: yupResolver(subcategorySchema),
  });

  React.useEffect(() => {
    setValue("Name", subcatName);
    setValue("Description", subcatDesc);
  }, [subcatName, subcatDesc, setValue]);

  const onSubmit = async (data: subcategorySchemaType) => {
    try {
      //   await updateSubCategory(_id, {
      //     catId: catId,
      //     subcatName: data.Name,
      //     subcatDesc: data.Description,
      //   });
      toast.success("Sub Category updated successfully!");
    } catch (error) {
      toast.error("Error updating sub category: " + error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="id" value={_id} />
        {/* <input type="hidden" name="catId" value={catId} /> */}
        <div className="rounded-md p-4 md:p-6">
          <div className="bg-white shadow-md p-2 rounded-lg">
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
                  placeholder="Enter Sub Category Name"
                  {...register("Name")}
                />
                <span className="text-red-400">{errors.Name?.message}</span>
                <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="subcatDesc"
                className="mb-2 block text-sm font-medium"
              >
                Description
              </label>
              <div className="relative">
                <input
                  id="subcatDesc"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Enter Sub Category Description"
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
            href={`/dashboard/tools/categories/${catId}/subcategories`}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Buttons type="submit">Update</Buttons>
        </div>
      </form>
    </>
  );
};

export default Form;
