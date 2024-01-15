import {
  FetchCategoryWithId,
  FetchSubCategory2Page,
  FetchSubCategoryWithId,
} from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { TableSkeleton } from "@/app/ui/skeletons";
import SubCategory2Table from "@/app/ui/tools/categories/subcategories/subcategories2/table";
import clsx from "clsx";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sub Categories 2",
};

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { query?: string; page?: string };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);

  const totalPages = await FetchSubCategory2Page(query, params.id);
  const sub = await FetchSubCategoryWithId(params.id);
  const { catId, subcatName } = sub;
  const category = await FetchCategoryWithId(catId);
  let catName = "";
  category.map((item: any) => {
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
              href: `/dashboard/tools/categories/${catId}/subcategories/`,
            },
            {
              label: "Sub Category 2",
              href: "",
              active: true,
            },
          ]}
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <span className={clsx(lusitana.className, "flex text-xl md:text-2xl")}>
          {catName + " > " + subcatName}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search sub category..." />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <SubCategory2Table />
      </Suspense>
    </div>
  );
};

export default Page;
