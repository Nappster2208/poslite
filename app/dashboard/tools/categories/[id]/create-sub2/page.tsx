"use client";
import { FetchSubCategoryWithId } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Form from "@/app/ui/tools/categories/subcat2-form";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const page = ({ params }: { params: { id: string } }) => {
  const sub = useSearchParams();
  const catId = sub.get("sub");
  const id = params.id;
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
            href: `/dashboard/tools/categories/${catId}/subcategories/`,
          },
          {
            label: "Add Sub Category 2",
            href: ``,
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
};

export default page;
