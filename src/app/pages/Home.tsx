import { ArrowRight, Users, Shield, Award } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroBg from "figma:asset/d05f94d4dedd282c3cb03ca4b5616b3c77335424.png";
import missionImage from "figma:asset/9c2bbe5d6c3c026fdba1c678529fa153ded7fe1f.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-[#2d5f3f] text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 95, 63, 0.85), rgba(45, 95, 63, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6">
              Welcome to NATAWU
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              National Transport and Allied Workers Union - Empowering Workers, Building a Better Future
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="bg-white text-[#2d5f3f] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/location"
                className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#2d5f3f] transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#2d5f3f] text-white rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-4xl mb-2 text-[#2d5f3f]">10,000+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <div className="bg-[#2d5f3f] text-white rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-4xl mb-2 text-[#2d5f3f]">20+</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="bg-[#2d5f3f] text-white rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-4xl mb-2 text-[#2d5f3f]">100%</h3>
              <p className="text-gray-600">Dedicated to Workers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-[#2d5f3f]">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                NATAWU is dedicated to protecting and advancing the rights of transport and allied workers across South Africa. We fight for fair wages, safe working conditions, and dignity in the workplace.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through collective bargaining, advocacy, and solidarity, we ensure that every worker's voice is heard and their rights are protected.
              </p>
              <Link
                to="/about"
                className="bg-[#2d5f3f] text-white px-6 py-3 rounded-lg hover:bg-[#1a3d2a] transition-colors inline-block"
              >
                Read More
              </Link>
            </div>
            <div>
              <img
                src={missionImage}
                alt="NATAWU transport workers"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12 text-[#2d5f3f]">
            Explore NATAWU
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/benefits"
              className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#2d5f3f]"
            >
              <h3 className="text-xl mb-3 text-[#2d5f3f]">
                Member Benefits
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the advantages of NATAWU membership
              </p>
              <ArrowRight className="h-5 w-5 text-[#2d5f3f]" />
            </Link>
            <Link
              to="/sectors"
              className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#2d5f3f]"
            >
              <h3 className="text-xl mb-3 text-[#2d5f3f]">
                Our Sectors
              </h3>
              <p className="text-gray-600 mb-4">
                Industries and sectors we represent
              </p>
              <ArrowRight className="h-5 w-5 text-[#2d5f3f]" />
            </Link>
            <Link
              to="/gallery"
              className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#2d5f3f]"
            >
              <h3 className="text-xl mb-3 text-[#2d5f3f]">
                Gallery
              </h3>
              <p className="text-gray-600 mb-4">
                View our events and activities
              </p>
              <ArrowRight className="h-5 w-5 text-[#2d5f3f]" />
            </Link>
            <Link
              to="/location"
              className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#2d5f3f]"
            >
              <h3 className="text-xl mb-3 text-[#2d5f3f]">
                Find Us
              </h3>
              <p className="text-gray-600 mb-4">
                Visit our branches across South Africa
              </p>
              <ArrowRight className="h-5 w-5 text-[#2d5f3f]" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2d5f3f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Join NATAWU Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stand with thousands of workers fighting for fair treatment, better conditions, and workers' rights.
          </p>
          <Link
            to="/forms"
            className="bg-white text-[#2d5f3f] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-block text-lg"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}