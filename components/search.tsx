"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const DEBOUNCE_TIME = 300;

export default function Search({
  className,
  placeholder,
}: {
  className: string;
  placeholder: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  },DEBOUNCE_TIME);

  return (
    <div className={cn("relative flex flex-1 flex-shrink-0", className)}>
      <label htmlFor="search" className="sr-only text-white">
        Searchsssss
      </label>
      <input
        type="search"
        onChange={(e) => handleSearch(e.target.value)}
        className="peer block w-full rounded-md border bg-gray-800 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get("search")?.toString() || ""}
      />
    </div>
  );
}
