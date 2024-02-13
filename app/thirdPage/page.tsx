
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import LineChart from "@/components/lineChart"
import { BarChart } from "@/components/barChart"

export default function ThirdPage(){

  return (
    <div className="bg-[#0C0E16] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold leading-tight mb-4">Game Price Visualizer</h1>
        <p className="text-xl mb-6">Discover the best deals and historical prices for your favorite games.</p>
        <Button className="bg-[#4C51BF] text-white">Get Started</Button>
      </div>
      <div className="bg-[#161B2F] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Unlike any tool you&apos;ve used before</h2>
            <p className="mb-4">Built to help you visualize game prices like never before.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Track historical prices with ease</li>
              <li>Get notified about price drops</li>
              <li>Compare prices across different platforms</li>
            </ul>
          </div>
          <LineChart className="w-full h-[300px]" />
        </div>
      </div>
      <div className="bg-[#1A2035] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Issue tracking you&apos;ll enjoy using</h2>
          <div className="grid grid-cols-3 gap-8">
            <Card className="bg-[#242B45]">
              <CardHeader>
                <CardTitle>Intuitive Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our tool is designed to be user-friendly and intuitive, making game price tracking a breeze.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#242B45]">
              <CardHeader>
                <CardTitle>Comprehensive Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access a vast database of game prices, including special sales and limited-time offers.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#242B45]">
              <CardHeader>
                <CardTitle>Custom Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Set up custom alerts to never miss a game going on sale at your desired price point.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-[#161B2F] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Build momentum with Cycles</h2>
          <p className="text-center mb-8">
            Our unique cycle system helps you stay on top of the latest deals and plan your purchases accordingly.
          </p>
          <BarChart className="w-full h-[300px]" />
        </div>
      </div>
      <div className="bg-[#1A2035] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Set direction with Roadmaps</h2>
          <p className="text-center mb-8">
            Plan your game purchases with our interactive roadmaps that predict when games are likely to go on sale.
          </p>
          <LineChart className="w-full h-[300px]" />
        </div>
      </div>
      <div className="bg-[#161B2F] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Linear workflows. Exponential results.</h2>
          <p className="text-center mb-8">
            Optimize your game purchasing strategy with our streamlined workflow that maximizes your savings.
          </p>
          <LineChart className="w-full h-[300px]" />
        </div>
      </div>
      <div className="bg-[#0C0E16] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Built for the future. Available today.</h2>
          <p className="mb-6">Join thousands of gamers who are already saving with Game Price Visualizer.</p>
          <Button className="bg-[#4C51BF] text-white">Get Started</Button>
        </div>
      </div>
      <footer className="bg-[#0C0E16] py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between">
          <p>Game Price Visualizer © 2023</p>
          <nav>
            <Link className="text-blue-400 hover:text-blue-300" href="#">
              Privacy Policy
            </Link>
            <Link className="ml-4 text-blue-400 hover:text-blue-300" href="#">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
  }

