import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { CreateCategory } from "@/app/ui/tools/categories/buttons";
import CategoryTable from "@/app/ui/tools/categories/table";
import { FetchCategoryPage, FetchSubCategoryPage } from "@/app/lib/data";
import Pagination from "@/app/ui/pagination";
import { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";
import SubCategoryTable from "@/app/ui/tools/categories/[id]/subcategories/table";

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
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Sub Categories</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Sub category..." />
        <CreateCategory />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <SubCategoryTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
