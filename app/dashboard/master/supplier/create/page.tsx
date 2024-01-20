import Breadcrumbs from "@/app/ui/breadcrumbs";
import Form from "@/app/ui/master/supplier/create-form";

const Page = () => {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Supplier",
            href: "/dashboard/master/supplier",
          },
          {
            label: "Tambah Supplier",
            href: "",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
};

export default Page;
