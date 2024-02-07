
import { Button } from "@/components/ui/button"
import LineChart from "@/components/ui/lineChart"

export default function FourthPage() {
  return (
    <div className="bg-[#0c0e16] text-white">
      <header className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold">Game Price Visualizer</h1>
        <p className="mt-4 text-lg text-gray-400">
          Discover the best deals and historical prices for your favorite games
        </p>
        <Button className="mt-6" variant="secondary">
          Get Started
        </Button>
      </header>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold">Real-time Price Tracking</h2>
              <p className="mt-4 text-gray-400">
                Monitor game prices across multiple platforms and stores, ensuring you never miss a sale.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold">Historical Price Charts</h2>
              <p className="mt-4 text-gray-400">
                Visualize price trends over time to make informed purchasing decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#161b2f] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold">Price History at a Glance</h2>
          <p className="mt-4 text-center text-gray-400">
            Easily compare historical price data with our intuitive and interactive charts.
          </p>
          <div className="mt-10">
            <LineChart className="w-full h-[300px]" />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold">Supported Platforms</h2>
          <div className="mt-8 grid grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <ComputerIcon className="text-6xl" />
              <p className="mt-2">Steam</p>
            </div>
            <div className="flex flex-col items-center">
              <PlayIcon className="text-6xl" />
              <p className="mt-2">PlayStation</p>
            </div>
            <div className="flex flex-col items-center">
              <XIcon className="text-6xl" />
              <p className="mt-2">Xbox</p>
            </div>
            <div className="flex flex-col items-center">
              <GamepadIcon className="text-6xl" />
              <p className="mt-2">Nintendo Switch</p>
            </div>
            <div className="flex flex-col items-center">
              <EggIcon className="text-6xl" />
              <p className="mt-2">Epic Games</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ComputerIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function EggIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" />
    </svg>
  )
}


function GamepadIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}





function PlayIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
