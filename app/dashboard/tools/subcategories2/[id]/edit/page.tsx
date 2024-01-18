import { FetchSubCategory2 } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Form from "@/app/ui/tools/categories/subcategories/subcategories2/edit-form";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await FetchSubCategory2(params.id);
  console.log(data);
  let catId = "";
  data.map((item: any) => {
    item.subs.map((sub: any) => {
      catId = sub.catId;
      console.log(catId);
    });
  });
  return (
    <main>
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: "Kategori", href: "/dashboard/tools/categories" },
          {
            label: "Sub Kategori",
            href: ``,
            // href: `/dashboard/tools/categories/${data2.catId}/subcategories`,
          },
          {
            label: "Sub Kategori 2",
            href: ``,
            // href: `/dashboard/tools/subcategories/${subcatId}/subcategories2`,
          },
          {
            label: "Edit",
            href: "",
            active: true,
          },
        ]}
      /> */}
    </main>
  );
};

export default Page;
