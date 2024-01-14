"use client";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Form from "@/app/ui/tools/categories/subcategories/edit-form";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SeacrhParams = () => {
  const catid = useSearchParams();
  return catid?.get("catid");
};

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const catId = SeacrhParams();
  const [data, setData] = useState<
    Array<{
      _id: string;
      catId: string;
      subcatName: string;
      subcatDesc: string;
    }>
  >([]);

  useEffect(() => {
    fetch(`/api/subs/getwithid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Categories", href: "/dashboard/tools/categories" },
          {
            label: "Sub Category",
            href: `/dashboard/tools/categories/${catId}/subcategories`,
          },
          {
            label: "Edit",
            href: "",
            active: true,
          },
        ]}
      />
      <Form subCategory={data} />
    </main>
  );
};

export default Page;
