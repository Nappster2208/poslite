import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { CreateCategory } from "@/app/ui/tools/categories/buttons";
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
            { label: "Categories", href: "/dashboard/tools/categories" },
            {
              label: "Sub Category",
              href: "",
              active: true,
            },
          ]}
        />
      </div>
      <div className="flex w-full items-center justify-between">
        {category?.map((item) => (
          <span
            key={item._id}
            className={clsx(lusitana.className, "flex text-xl md:text-2xl")}
          >
            {item.catName}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search sub category..." />
        <CreateCategory />
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
