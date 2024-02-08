import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import SimpleLineChart from "@/components/ui/simpleLineChart";
import { Skeleton } from "@/components/ui/skeleton";
import LineChartWrapper from "@/components/ui/ssLineChartWrapper";
import { anyModel } from "@/lib/data";
import { Suspense } from "react";

const navLinks = [
  { href: "/secondPage", label: "SecondPage" },
  { href: "/thirdPage", label: "ThirdPage" },
  { href: "/fourthPage", label: "FourtPage" },
  { href: "/topGames23", label: "TopGames23" },
];
const footerLinks = [
  { href: "/secondPage", label: "About" },
  { href: "/thirdPage", label: "Blog" },
  { href: "/fourthPage", label: "Careers" },
  { href: "/topGames23", label: "Privacy Policy" },
  { href: "/topGames23", label: "Terms of Service" },
  { href: "/topGames23", label: "Contact" },
];

export default async function Home() {
  // const error = console.error;
  // console.error = (...args: any) => {
  //   if (/defaultProps/.test(args[0])) return;
  //   error(...args);
  // };

  return (
    <div className="min-h-screen bg-[#0C0E16] text-white">
      <header className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold leading-tight mb-4">
          Visualize Game Price History
        </h2>
        <p className="text-xl mb-6">
          Track and analyze game prices across top platforms to make informed
          purchasing decisions.
        </p>
        <Button>Get started</Button>
      </header>
      <section className="container mx-auto px-4 py-20 grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Built for gamers</h3>
          <p className="text-lg">
            Easily track the price history of your favorite games with a simple
            and intuitive interface designed with gamers in mind.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Data you can trust</h3>
          <p className="text-lg">
            Get accurate and up-to-date pricing data from multiple sources,
            ensuring you always have the information you need.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-8">
          Price Tracking Made Easy
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <Card className="bg-[#161B22]">
            <CardHeader>
              <CardTitle>Set Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Receive notifications when the price of a game drops to your
                desired level.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-[#161B22]">
            <CardHeader>
              <CardTitle>Compare Prices</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Compare game prices across different platforms to find the best
                deals.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-[#161B22]">
            <CardHeader>
              <CardTitle>Historical Data</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                View a game&apos;s price history to predict future price trends
                and make smart purchases.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Comprehensive Analytics</h2>
        {/* <LineChart className="w-full h-[300px]" /> */}
        <Suspense
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
          <LineChartWrapper />
        </Suspense>
        <div className="flex justify-center items-center h-[400px] w-full bg-purple-500">
          <h1>Chart Placeholder</h1>
        </div>
      </section>
    </div>
  );
}
