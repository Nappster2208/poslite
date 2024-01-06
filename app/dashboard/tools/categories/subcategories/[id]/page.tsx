import { Metadata } from "next";
import Pagination from "@/app/ui/pagination";
import React from "react";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import SubCategoryTable from "@/app/ui/tools/categories/subcategories/table";
import { FetchSubCategoryPage } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Sub Categories",
};

export default async function Page({ params }: { params: { id: string } }) {
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
      <SubCategoryTable id={params.id} />
    </div>
  );
}
