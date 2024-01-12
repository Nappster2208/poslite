"use client";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { useSearchParams } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
  const searchParams = useSearchParams();
  const catId = searchParams.get("catid");

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
      {/* <Form /> */}
    </main>
  );
};

export default page;
