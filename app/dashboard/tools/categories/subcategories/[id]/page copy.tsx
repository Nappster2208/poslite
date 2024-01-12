import { Metadata } from "next";
import React from "react";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import SubCategoryTable from "@/app/ui/tools/categories/[id]/subcategories/table";
import { FetchCategoryPage, FetchCategoryWithId } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Sub Categories",
};

export default async function Page({ params }: { params: { id: string } }) {
  const category = await FetchCategoryWithId(params.id);
  let catName = "";
  category.map((item) => {
    catName = item.catName;
  });
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
      <SubCategoryTable id={params.id} catName={catName} />
    </div>
  );
}
