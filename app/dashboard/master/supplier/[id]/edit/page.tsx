import { FetchSupplierWithId } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Form from "@/app/ui/master/supplier/edit-form";

const Page = async ({ params }: { params: { id: string } }) => {
  const supplier = await FetchSupplierWithId(params.id);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Supplier", href: "/dashboard/master/supplier/" },
          { label: "Edit", href: "", active: true },
        ]}
      />

      <Form supplier={supplier} />
    </main>
  );
};

export default Page;
