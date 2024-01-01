"use client";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const sub = useSearchParams();
  const subcat = sub.get("sub");
  let splitSub: string[] = [];
  if (subcat) {
    splitSub = subcat?.split(",");
  }
  return (
    <div>
      {splitSub.map((item, index) => (
        <div key={index}>
          {item} {params.id}
        </div>
      ))}
    </div>
  );
}
