import SideNav from "@/app/ui/dashboard/sidenav";
import { Toaster } from "sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex md:h-screen flex-col md:flex-row md:overflow-hidden bg-gradient-to-bl from-cyan-100 to-purple-200">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      <Toaster richColors position="top-right" />
      {/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> */}
    </div>
  );
}
