// import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Form from "@/app/ui/master/products/create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice",
};
export default async function Page() {
  // const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Produk", href: "/dashboard/master/products" },
          {
            label: "Tambah Product",
            href: "/dashboard/master/products/create",
            active: true,
          },
        ]}
      />
      <Form />
      {/* <Form customers={customers} /> */}
    </main>
  );
}
