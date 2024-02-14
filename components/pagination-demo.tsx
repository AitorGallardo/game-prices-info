"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { usePathname, useSearchParams } from "next/navigation";
  
  export function PaginationDemo() {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    const allPages = 10; // funcion para generar la paginacion

    const createPageURL = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        return `${pathname}?${params.toString()}`;
    }

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={createPageURL(currentPage-1)} />
          </PaginationItem>
          <PaginationItem >
            <PaginationLink href={createPageURL(1)} isActive={currentPage===1} >1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={createPageURL(2)} isActive={currentPage===2} >
                2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={createPageURL(3)} isActive={currentPage===3} >3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={createPageURL(currentPage+1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  