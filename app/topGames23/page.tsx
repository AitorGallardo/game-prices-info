import Search from "@/components/search";
import { TableDemo } from "@/components/table-demo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TopGames23Page() {
  return (
    <div className="bg-[#0c0e16] text-white">
      <header className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold">Top 50 Games of 2023</h1>
        <p className="mt-4 text-lg text-gray-400">
          Explore the most popular games of the year 2023
        </p>
        <Button className="mt-6" variant="secondary">
          Back to Home
        </Button>
      </header>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold">Games List</h2>
          <Search className="my-8" placeholder="Search"/>
          <TableDemo/>
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
