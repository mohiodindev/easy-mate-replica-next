
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Brain, Users, TrendingUp, Star, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">E</span>
          </div>
          <span className="text-xl font-bold text-gray-900">EasyMate</span>
        </div>
        <Button variant="outline" className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
          Meet EasyMate
        </Button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI-Powered</span>
              <br />
              Analyst
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Share your business challenges or request in plain English and receive a tailored senior analyst AI tech solution instantly.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border max-w-md mx-auto">
            <p className="text-gray-700 text-left mb-4">
              What is the best strategy to reduce customer churn in Q4?
            </p>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
              Get Analysis
            </Button>
          </div>

          <p className="text-sm text-gray-500">Already signed in?</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-blue-100">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Describe your Business challenge or needs</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-indigo-100">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. EasyMate architects an AI solution tailored for you</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-blue-100">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. EasyMate helps ease all the boring technology</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-emerald-100">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Your productivity with hourly to real AI help</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why EasyMate Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why EasyMate?</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Badge className="bg-blue-600 text-white min-w-8 h-8 flex items-center justify-center rounded-full">1</Badge>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">No Learning Curve</h3>
                <p className="text-gray-600">No need jargon, No coding. Just share your business need in clear English. EasyMate does the rest.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Badge className="bg-blue-600 text-white min-w-8 h-8 flex items-center justify-center rounded-full">2</Badge>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Solutions</h3>
                <p className="text-gray-600">Skip the messy rat thypte, EasyMate gives you custom solutions in one affordable monthly fee.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Badge className="bg-blue-600 text-white min-w-8 h-8 flex items-center justify-center rounded-full">3</Badge>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tailored Solution to Work</h3>
                <p className="text-gray-600">No One-Mani and one resuits said. Can't Match are achieved easy when working.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Badge className="bg-blue-600 text-white min-w-8 h-8 flex items-center justify-center rounded-full">4</Badge>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Boost Productivity</h3>
                <p className="text-gray-600">Make Smart Analysis made. Air AI helps to automate your internal work.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Badge className="bg-blue-600 text-white min-w-8 h-8 flex items-center justify-center rounded-full">5</Badge>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Always Evolving</h3>
                <p className="text-gray-600">EasyMate learns your specialized invoking creativity & become. Designer to grow at the same pace.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
          <CardContent className="space-y-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                <div className="w-10 h-10 bg-indigo-500 rounded-full"></div>
                <div className="w-10 h-10 bg-blue-400 rounded-full"></div>
              </div>
              <div className="text-left space-y-2">
                <div className="bg-blue-100 rounded p-2 text-sm text-blue-800">Business Analysis</div>
                <div className="bg-indigo-100 rounded p-2 text-sm text-indigo-800">Market Research</div>
                <div className="bg-blue-100 rounded p-2 text-sm text-blue-800">Strategy Planning</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Video Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Watch EasyMate in Action</h2>
          <div className="bg-blue-900/50 rounded-2xl p-16 relative">
            <Button 
              className="bg-white hover:bg-gray-100 text-blue-600 rounded-full w-16 h-16"
              size="lg"
            >
              <Play className="w-6 h-6" />
            </Button>
          </div>
          <Button className="mt-8 bg-white hover:bg-gray-100 text-blue-600">
            Start our analysis
          </Button>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto"></div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Simon Bergmayr, CEO of Meet Sikre</p>
            <p className="text-lg text-gray-800 italic">"It's like having a 24/7 Senior Analyst for your business."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Unlock AI-Powered Efficiency- Get Started Instantly!
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses leveraging AI - powered solutions that revolutionize how they work. Cut operational costs, and drive growth.
          </p>
          <Button 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            size="lg"
          >
            Book My Private Beta
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 text-xs font-bold">E</span>
            </div>
            <span className="font-bold">EasyMate</span>
          </div>
          <p className="text-sm text-blue-200">
            Copyright © 2024 EasyMate. All rights reserved.
          </p>
          <div className="text-sm text-blue-200">
            <span>Terms of use • Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
