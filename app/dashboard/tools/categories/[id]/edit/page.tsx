import { notFound } from "next/navigation";
import { Metadata } from "next";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { FetchCategoryWithId } from "@/app/lib/data";
import Form from "@/app/ui/tools/categories/edit-form";

export const metadata: Metadata = {
  title: "Edit Category",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await FetchCategoryWithId(id);
  const category = JSON.parse(JSON.stringify(data));

  if (!FetchCategoryWithId) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Categories", href: "/dashboard/tools/categories" },
          {
            label: "Edit Category",
            href: `/dashboard/tools/categories/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form category={category} />
    </main>
  );
}
