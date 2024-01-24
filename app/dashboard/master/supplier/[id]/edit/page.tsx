import Breadcrumbs from "@/app/ui/breadcrumbs";

const Page = () => {
  return (
    <Breadcrumbs
      breadcrumbs={[
        { label: "Supplier", href: "/dashboard/master/supplier/" },
        { label: "Edit", href: "", active: true },
      ]}
    />
  );
};

export default Page;
