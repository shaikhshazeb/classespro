import { ArrowRight } from "lucide-react"
import Link from "next/link"
import SmallTitle from "./small-title"

export default function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container max-w-6xl  px-4 md:px-6 mx-auto flex flex-col items-center text-center">
<SmallTitle title="Welcome To Class Pro"/>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center max-w-4xl mx-auto mb-4">
          Transforming Education with Smart Management
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10">
         Empowering institutions to stay streamlined, connected, and centered on what matters most — learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-neutral-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950"
          >
            See All features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
