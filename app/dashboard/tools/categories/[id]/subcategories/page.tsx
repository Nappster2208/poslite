import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { AddSubCategory } from "@/app/ui/tools/categories/buttons";
import { FetchCategoryWithId, FetchSubCategoryPage } from "@/app/lib/data";
import Pagination from "@/app/ui/pagination";
import { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import SubCategoryTable from "@/app/ui/tools/categories/subcategories/table";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Sub Categories",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);

  const totalPages = await FetchSubCategoryPage(query, params.id);
  const category = await FetchCategoryWithId(params.id);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Kategori", href: "/dashboard/tools/categories" },
            {
              label: "Sub Kategori",
              href: "",
              active: true,
            },
          ]}
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <span
          key={category._id}
          className={clsx(lusitana.className, "flex text-lg md:text-xl")}
        >
          {category.catName}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search sub category..." />
        <AddSubCategory
          id={params.id}
          otherSub={[]}
          className="flex h-10 items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <SubCategoryTable
          id={params.id}
          query={query}
          currentPage={currentPage}
        />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
