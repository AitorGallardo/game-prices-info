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
    // TODO: add funcion para generar la paginacion =>utils/generatePagination
    const allPages = [1,2,3,4,6,10]; 

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


        {/* TODO: Listado real de paginas */}

        {/* <div className="flex -space-x-px">
            {
                allPages.map((page,index) => {
                let position: "first" | "middle" | "last" | "single" | "middle" | undefined;
                    if (index === 0) position = "first";
                    if (index === allPages.length - 1) position = "last";
                    if (allPages.length === 1) position = "single";
                    if (index > 0 && index < allPages.length - 1) position = "middle";
                    return (
                        <PaginationItem key={page} >
                            <PaginationLink href={createPageURL(page)} isActive={currentPage===page} >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })
            }            
        </div> */}

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
          {/* TODO: Mirar el work around con este componente */}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          {/* TODO: Mirar de poner property disabled */}
          <PaginationItem>
            <PaginationNext href={createPageURL(currentPage+1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  