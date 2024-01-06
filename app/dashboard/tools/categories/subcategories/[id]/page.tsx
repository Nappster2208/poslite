import { Metadata } from "next";
import Search from "@/app/ui/search";
import {
  FetchFilteredSubCategories,
  FetchSubCategoryPage,
} from "@/app/lib/data";
import Pagination from "@/app/ui/pagination";
import React, { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import SubCategoryTable from "@/app/ui/tools/categories/subcategories/table";
import { SubCategoryType } from "@/app/lib/types";

export const metadata: Metadata = {
  title: "Sub Categories",
};

type Subcategory = {
  subcatName: string;
  subcatDesc: string;
  _id: string; // Ini bisa berupa string atau tipe lainnya tergantung implementasi ObjectId Anda
};

export default async function Page({
  searchParams,
  params,
}: {
  searchParams?: { query?: string; page?: string };
  params: { id: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);
  // const totalPages = await FetchSubCategoryPage(query, params.id);
  const subCategories = await FetchFilteredSubCategories(params.id);

  console.log(subCategories);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Categories", href: "/dashboard/tools/categories" },
            {
              label: "Sub Category",
              href: "",
              active: true,
            },
          ]}
        />
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search category..." /> */}
        {/* <CreateCategory /> */}
      </div>
      <SubCategoryTable data={subCategories} />
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
