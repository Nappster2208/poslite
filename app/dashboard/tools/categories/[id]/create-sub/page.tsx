import { FetchCategoryWithId } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { notFound } from "next/navigation";
import Form from "@/app/ui/tools/categories/subcat-form";

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
          { label: "Kategori", href: "/dashboard/tools/categories" },
          {
            label: "Sub Kategori",
            href: `/dashboard/tools/categories/${id}/subcategories`,
          },
          {
            label: "Tambah",
            href: ``,
            active: true,
          },
        ]}
      />
      <Form category={category} />
    </main>
  );
}
