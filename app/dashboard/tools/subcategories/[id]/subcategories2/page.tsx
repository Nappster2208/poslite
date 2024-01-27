import {
  FetchCategoryWithId,
  FetchSubCategory2Page,
  FetchSubCategoryWithId,
} from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { lusitana } from "@/app/ui/fonts";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";
import { TableSkeleton } from "@/app/ui/skeletons";
import { AddSubCategory } from "@/app/ui/tools/categories/buttons";
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
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Kategori", href: "/dashboard/tools/categories" },
            {
              label: "Sub Kategori",
              href: `/dashboard/tools/categories/${catId}/subcategories/`,
            },
            {
              label: "Sub Kategori 2",
              href: "",
              active: true,
            },
          ]}
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <span className={clsx(lusitana.className, "flex text-lg md:text-xl")}>
          {category.catName + " > " + subcatName}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search sub category..." />
        <AddSubCategory
          id={sub.catId.toString()}
          otherSub={[sub._id.toString()]}
          className="flex h-10 items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <SubCategory2Table
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
};

export default Page;
