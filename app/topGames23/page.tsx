import { NavigationButton } from "@/components/nav-button";
import PaginationDemo from "@/components/pagination-demo";
import Search from "@/components/search";
import { TableDemo } from "@/components/table-demo";
import { Skeleton } from "@/components/ui/skeleton";
import { GameModel } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";

export default async function TopGames23Page({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";
  const game = new GameModel();
  const totalPages = await game.getPagesTotal({ title: search });

  return (
    <div className="bg-[#0c0e16] text-white">
      <header className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold">Top 50 Games of 2023</h1>
        <p className="mt-4 text-lg text-gray-400">
          Explore the most popular games of the year 2023
        </p>
        <NavigationButton linkRef="/">Back to Home</NavigationButton>
      </header>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold">Games List</h2>
          <Search className="my-8" placeholder="Search" />
          <Suspense
            key={currentPage + search} // This is important to re-render the component, if not used key it will just work first time
            fallback={
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            }
          >
            <TableDemo
              query={{ title: search }}
              currentPage={currentPage}
            />
          </Suspense>
          <PaginationDemo className="mt-8" totalPages={totalPages}/>
          {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">

              <Image
                alt="Game 1"
                className="w-full h-64 object-cover rounded-lg shadow-md"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="mt-4 text-xl font-bold">Game 1</h3>
              <p className="mt-2 text-gray-400">Best price: $30</p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export const HomeLink = () => {
  return (
    <Link href="/">
      <a>Home</a>
    </Link>
  );
};
