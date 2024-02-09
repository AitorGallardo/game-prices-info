"use client";

import { useSearchParams } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  
  const handleSearch = (e: any) => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        onChange={(e) => handleSearch}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
    </div>
  );
}
