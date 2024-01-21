"use client";
import { PencilIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Buttons } from "../../button";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import { EmailOutlined, WarehouseOutlined } from "@mui/icons-material";
import { addSupplier } from "@/app/lib/action";

const Form = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedName, setSelectedName] = useState<String | undefined>("");
  const [selectedImageURL, setSelectedImageURL] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImageURL(imageUrl);
      setSelectedFile(file);
      setSelectedName(file?.name);
    } else {
      setSelectedImageURL(null);
      setSelectedFile(null);
      setSelectedName(undefined);
    }
  };

  const altText = selectedFile ? `Selected Image: ${selectedName}` : "";

  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form action={addSupplier}>
        <div className="rounded-md p-4 md:p-6">
          <div className="bg-white shadow-md p-2 rounded-lg">
            <div className="mb-4">
              <label htmlFor="code" className="mb-2 block text-sm font-medium">
                Kode Supplier
              </label>
              <div className="relative">
                <input
                  id="code"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Kode harus unik"
                  //   {...register("Name")}
                />
                {/* <span className="text-red-400">{errors.Name?.message}</span> */}
                <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
              <button
                type="button"
                className="text-cyan-500 hover:text-cyan-600 mx-2 mt-1"
              >
                Generate Code
              </button>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nama
              </label>
              <div className="relative">
                <input
                  id="name"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Masukkan Nama Supplier"
                  //   {...register("Description")}
                />
                <span className="text-red-400">
                  {/* {errors.Description?.message} */}
                </span>
                <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Foto/Logo
              </label>
              <div className="rounded-lg box-border flex items-center w-full h-[50vh] md:h-[60vh] bg-[#e9f3fe] justify-center">
                <div className="w-[450px] m-auto p-8 bg-white rounded-[25px] shadow-[7px_20px_20px_rgb(210,227,244)]">
                  <label
                    htmlFor="upload-input"
                    className="text-center border-[3px] border-[rgb(210,227,244)] border-dashed p-6 flex flex-col items-center cursor-pointer"
                  >
                    <Image
                      src={selectedImageURL || "/icons/cloud-computing.png"}
                      alt={altText}
                      width={100}
                      height={100}
                      className="rounded-full aspect-square"
                      priority={true}
                    />
                    <h3 className="font-bold text-lg">
                      {selectedName || "Klik box untuk upload"}
                    </h3>
                    <p className="text-sm mt-[10px] text-[#bbcada]">
                      Max ukuran file 2 mb
                    </p>
                    <input
                      id="upload-input"
                      name="upload-input"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".png, .jpg, .jpeg"
                    />
                  </label>
                  <div
                    className={clsx("flex mt-2", {
                      hidden: altText === "",
                    })}
                  >
                    <label htmlFor="altInput" className="text-sm mt-[10px]">
                      alt:
                    </label>
                    <input
                      type="text"
                      defaultValue={altText}
                      id="altInput"
                      className="peer block w-full cursor-text rounded-md py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="alamat"
                className="mb-2 block text-sm font-medium"
              >
                Alamat
              </label>
              <div className="relative">
                <textarea
                  id="alamat"
                  rows={3}
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Masukkan Alamat Supplier"
                  //   {...register("Description")}
                />
                <span className="text-red-400">
                  {/* {errors.Description?.message} */}
                </span>
                <WarehouseOutlined className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Masukkan Email Supplier"
                  //   {...register("Description")}
                />
                <span className="text-red-400">
                  {/* {errors.Description?.message} */}
                </span>
                <EmailOutlined className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="telp" className="mb-2 block text-sm font-medium">
                No Telp / HP
              </label>
              <div className="relative">
                <input
                  id="telp"
                  className="peer block w-full cursor-text rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder="Masukkan No Telp / HP Supplier"
                  //   {...register("Description")}
                />
                <span className="text-red-400">
                  {/* {errors.Description?.message} */}
                </span>
                <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/master/supplier"
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
