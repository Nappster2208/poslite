// import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from "@/app/ui/products/breadcrumbs";
import Form from "@/app/ui/products/create-form";
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
          { label: "Product", href: "/dashboard/products" },
          {
            label: "Create Product",
            href: "/dashboard/products/create",
            active: true,
          },
        ]}
      />
      <Form />
      {/* <Form customers={customers} /> */}
    </main>
  );
}
