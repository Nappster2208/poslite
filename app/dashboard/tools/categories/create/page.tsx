import Breadcrumbs from "@/app/ui/breadcrumbs";
import Form from "@/app/ui/tools/categories/create-form";

const page = () => {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Kategori", href: "/dashboard/tools/categories" },
          {
            label: "Tambah",
            href: "/dashboard/tools/categories/create",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
};

export default page;
