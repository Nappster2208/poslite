import { GlobeAltIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function PosliteLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <ShoppingBagIcon className="overflow-y-auto h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Poslite</p>
    </div>
  );
}
