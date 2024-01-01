import { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { CreateCategory } from "@/app/ui/tools/categories/buttons";
import CategoryTable from "@/app/ui/tools/categories/table";
import { FetchCategoryPage } from "@/app/lib/data";
import Pagination from "@/app/ui/pagination";
import { Suspense } from "react";
import { TableSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
  title: "Categories",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);

  const totalPages = await FetchCategoryPage(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Categories</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search category..." />
        <CreateCategory />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <CategoryTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
