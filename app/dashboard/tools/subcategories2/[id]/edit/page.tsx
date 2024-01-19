import { FetchSubCategory2 } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Form from "@/app/ui/tools/categories/subcategories/subcategories2/edit-form";

const Page = async ({ params }: { params: { id: string } }) => {
  const rawData = await FetchSubCategory2(params.id);
  let catId = "";
  let subcatId = "";

  const data = rawData.map((item: any) => {
    const cleanedItem = JSON.parse(JSON.stringify(item));
    return cleanedItem;
  });

  rawData.map((item: any) => {
    subcatId = item.subcatId;
    item.subs.map((sub: any) => {
      catId = sub.catId;
    });
  });
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
      <Form data={data} />
    </main>
  );
};

export default Page;
