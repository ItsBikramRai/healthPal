import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Stethoscope, AlertCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import UserDetails from "./UserDetails";
// import RecommendationCard from './RecommendationCard';

function Home() {
 const auth = localStorage.getItem("auth");

  return (
    <div className="bg-gray-800">
      <main className="h-screen max-w-7xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl pt-7 md:text-4xl font-bold text-center text-gray-200 mb-8 md:mb-12 ">
          Your Health Assistant
        </h1>
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 pt-14 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Symptoms Checker Card */}
          <Card className="hover:shadow-red-500 hover:shadow-2xl transition-shadow">
            <CardContent className="p-4 md:p-6 flex flex-col items-center">
              <Heart className="h-10 w-10 md:h-12 md:w-12 text-rose-500 mb-3 md:mb-4" />
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                Symptoms Checker
              </h2>
              <p className="text-slate-600 text-center text-sm md:text-base">
                Check your symptoms and get instant health guidance
              </p>
              <NavLink to="/symptoms-checker">
                <Button className="mt-4 w-full bg-rose-500 hover:bg-rose-600">
                  Check Now
                </Button>
              </NavLink>
            </CardContent>
          </Card>

          {/* First Aid Card */}
          <Card className="hover:shadow-blue-500 hover:shadow-2xl transition-shadow">
            <CardContent className="p-4 md:p-6 flex flex-col items-center">
              <Stethoscope className="h-10 w-10 md:h-12 md:w-12 text-blue-500 mb-3 md:mb-4" />
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                First Aid
              </h2>
              <p className="text-slate-600 text-center text-sm md:text-base">
                Learn essential first aid techniques and procedures
              </p>
              <NavLink to="/first-aid">
                <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600">
                  Learn More
                </Button>
              </NavLink>
            </CardContent>
          </Card>

          {/* Emergency Card */}
          <Card className="hover:shadow-amber-400 hover:shadow-2xl transition-shadow sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 md:p-6 flex flex-col items-center">
              <AlertCircle className="h-10 w-10 md:h-12 md:w-12 text-amber-500 mb-3 md:mb-4" />
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                Emergency
              </h2>
              <p className="text-slate-600 text-center text-sm md:text-base">
                Quick access to emergency services and contacts
              </p>
              <NavLink to="/emergency">
                <Button className="mt-4 w-full bg-amber-500 hover:bg-amber-600">
                  View Services
                </Button>
              </NavLink>
            </CardContent>
          </Card>
        </div>
        {/* <RecommendationCard/> */}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
