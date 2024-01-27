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
  const category = await FetchCategoryWithId(id);

  if (!FetchCategoryWithId) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Kategori", href: "/dashboard/tools/categories" },
          {
            label: "Edit",
            href: `/dashboard/tools/categories/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form category={category} />
    </main>
  );
}
