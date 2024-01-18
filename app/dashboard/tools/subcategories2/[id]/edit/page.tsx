"use client";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Form from "@/app/ui/tools/categories/subcategories/subcategories2/edit-form";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchParams = () => {
  let sub = useSearchParams();
  return sub.get("subcatid");
};

const Page = ({ params }: { params: { id: string } }) => {
  let catId = "";
  const subcatId = SearchParams();
  const id = params.id;
  const [data, setData] = useState<
    Array<{
      _id: string;
      subcatId: string;
      subcatName: string;
      subcatDesc: string;
      subs: Array<{ catId: string }>;
    }>
  >([]);

  useEffect(() => {
    fetch(`/api/subs2/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);

  {
    data.map((item) => {
      item.subs.map((sub) => {
        catId = sub.catId;
      });
    });
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Kategori", href: "/dashboard/tools/categories" },
          {
            label: "Sub Kategori",
            href: `/dashboard/tools/categories/${catId}/subcategories`,
          },
          {
            label: "Sub Kategori 2",
            href: `/dashboard/tools/subcategories/${subcatId}/subcategories2`,
          },
          {
            label: "Edit",
            href: "",
            active: true,
          },
        ]}
      />

      <div></div>
      <Form data={data} />
    </main>
  );
};

export default Page;
