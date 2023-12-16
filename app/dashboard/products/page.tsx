import { lusitana } from "@/app/ui/fonts";
import { CreateProduct } from "@/app/ui/products/buttons";
import Table from "@/app/ui/products/table";
import Search from "@/app/ui/search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};
export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page || 1);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search products..." />
        <CreateProduct />
      </div>
      <Table query={query} currentPage={currentPage} />
    </div>
  );
}
