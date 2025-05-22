import Image from "next/image"
import { RefreshCw } from "lucide-react"
import SectionHeader from "./section-header"

export default function GridFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container max-w-6xl  px-4 md:px-6 mx-auto">
        <div className="flex justify-center mb-8">
        </div>

       <SectionHeader title="Features" heading="All in One Education Management Platform"description="streamline your entireschool operation with our comperehensive suite of integerated modules design specifically for modern educational institution."/>

        <div className="grid md:grid-cols-2 gap-8">
          {/* AI Video Editing Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI Video Editing</h3>
              <p className="text-gray-600">
                Automate complex editing tasks with AI-driven tools that enhance video quality, trim clips, and apply
                effects effortlessly.
              </p>
            </div>
            <div className="bg-gray-50 p-4">
              <div className="rounded-lg overflow-hidden border bg-white">
                <div className="p-3 border-b">
                  <h4 className="text-lg font-medium">AI Video Editing</h4>
                </div>
                <div className="flex">
                  <div className="w-[180px] border-r p-2 bg-gray-50">
                    <div className="space-y-4">
                      <div className="p-2 bg-white rounded border text-center">
                        <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center rounded-full bg-rose-100">
                          <svg
                            className="w-4 h-4 text-rose-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 6L8 12L14 18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="text-xs text-rose-500">Auto-Cut</div>
                      </div>

                      <div className="p-2 bg-white rounded border text-center">
                        <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                            <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                        <div className="text-xs">Smart Scene Detection</div>
                      </div>

                      <div className="p-2 bg-white rounded border text-center">
                        <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div className="text-xs">Auto-Color Correction</div>
                      </div>

                      <div className="p-2 bg-white rounded border text-center">
                        <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="text-xs">Auto-Music Syncing</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Track athlete in starting position"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Video Generation Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI Video Generation</h3>
              <p className="text-gray-600">
                Instantly create videos from scripts, text, or visual prompts using AI to generate professional-grade
                content with minimal input.
              </p>
            </div>
            <div className="bg-gray-50 p-4">
              <div className="rounded-lg overflow-hidden border bg-white p-4 space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Generate a quick tips and tricks video."
                    className="w-full p-3 pr-16 text-sm bg-gray-100 rounded-lg"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">0/2000</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">Examples</h4>
                    <RefreshCw className="h-4 w-4 text-rose-500" />
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 border rounded-lg text-sm hover:bg-gray-50 cursor-pointer">
                      &quot;Create a fun vacation recap video
                    </div>
                    <div className="p-3 border rounded-lg text-sm hover:bg-gray-50 cursor-pointer">
                      &quot;Generate a birthday celebration montage
                    </div>
                    <div className="p-3 border rounded-lg text-sm hover:bg-gray-50 cursor-pointer">
                      &quot;Make a stylish daily vlog
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
