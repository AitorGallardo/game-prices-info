
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import Link from "next/link"

export default function SecondPage() {
  return (
    <div className="bg-[#0C0E16] text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Game Price History</h1>
          <div className="space-x-4">
            <Button className="bg-[#7D4AEA] text-white">Sign In</Button>
            <Button className="border border-white text-white" variant="outline">
              Get Started
            </Button>
          </div>
        </nav>
      </header>
      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Visualize game price trends</h2>
          <p className="text-xl mb-6">
            Discover the best time to purchase your favorite games with our comprehensive price history charts.
          </p>
          <Button className="bg-[#7D4AEA] text-white">Explore Now</Button>
        </section>
        <section className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Unlike any tool you&apos;ve used before</h3>
          <p className="text-lg mb-6">Built to help you monitor game prices effectively and make informed decisions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#161B22]">
              <CardHeader>
                <CardTitle>Built to your keyboard</CardTitle>
                <CardDescription>Quickly navigate through price history with keyboard shortcuts.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-[#161B22]">
              <CardHeader>
                <CardTitle>Extraordinarily fast</CardTitle>
                <CardDescription>Real-time updates ensure you never miss a price drop.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Issue tracking you&apos;ll enjoy using</h3>
          <p className="text-lg mb-6">
            Create watchlists in seconds, discuss deals in context, and breeze through your backlog in one tailored app
            for you and your team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#161B22]">
              <CardHeader>
                <CardTitle>List and board views</CardTitle>
                <CardDescription>Choose how you view your tracked games with flexible display options.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-[#161B22]">
              <CardHeader>
                <CardTitle>Make it yours</CardTitle>
                <CardDescription>Customize notifications and alerts to suit your shopping habits.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-[#161B22]">
              <CardHeader>
                <CardTitle>Automated alerts</CardTitle>
                <CardDescription>Get notified when games hit your target price range.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Set direction with Roadmaps</h3>
          <p className="text-lg mb-6">
            Plan visually, collaborate on cross-team projects, and make better decisions with price insights and game
            updates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#161B22]">
              <CardHeader>
                <CardTitle>Project outlines</CardTitle>
                <CardDescription>View upcoming sales and anticipated price drops for your games.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-[#161B22]">
              <CardHeader>
                <CardTitle>Focus on the big picture</CardTitle>
                <CardDescription>
                  Track long-term price trends and historical lows for smarter purchases.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Linear workflows. Exponential results.</h3>
          <p className="text-lg mb-6">
            From casual shopper to professional collector, optimize your purchasing strategy with our platform.
          </p>
          <Button className="bg-[#7D4AEA] text-white">Get Started</Button>
        </section>
        <section className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Built for the future. Available today.</h3>
          <p className="text-lg mb-6">Join a growing community of gamers who save money and play more.</p>
          <Button className="bg-[#7D4AEA] text-white">Join Now</Button>
        </section>
      </main>
      <footer className="bg-[#161B22] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Game Price History</h2>
              <p className="text-sm">© 2023 Game Price History. All rights reserved.</p>
            </div>
            <div className="space-x-4">
              <Link className="text-white" href="#">
                Privacy Policy
              </Link>
              <Link className="text-white" href="#">
                Terms of Service
              </Link>
              <Link className="text-white" href="#">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

