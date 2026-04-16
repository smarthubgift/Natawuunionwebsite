import { Truck, Package, Ship, Plane, Train, Building2, Users, Coffee, Home, Tractor, Wind, Cross, Dumbbell, Shield } from "lucide-react";
import heroBg from "figma:asset/d05f94d4dedd282c3cb03ca4b5616b3c77335424.png";

export default function Sectors() {
  const sectors = [
    { name: "Transport Services", icon: Truck },
    { name: "Maritime Transport", icon: Ship },
    { name: "Aviation", icon: Plane },
    { name: "Rail", icon: Train },
    { name: "Cleaning", icon: Wind },
    { name: "Passenger", icon: Users },
    { name: "Hospitality", icon: Coffee },
    { name: "Retail", icon: Building2 },
    { name: "Construction", icon: Home },
    { name: "Farming", icon: Tractor },
    { name: "Laundry and Dry Cleaning", icon: Wind },
    { name: "Funeral Undertaking", icon: Cross },
    { name: "Sport and Recreation Clubs", icon: Dumbbell },
    { name: "Security", icon: Shield },
    { name: "Road Freight", icon: Package },
    { name: "Terminal Operators", icon: Building2 },
    { name: "Car Parking", icon: Building2 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-[#2d5f3f] text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 95, 63, 0.85), rgba(45, 95, 63, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-6">Sectors</h1>
          <p className="text-xl max-w-3xl">
            NATAWU represents workers across various transport and allied industries
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-green-200 p-6 rounded-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="bg-[#2d5f3f] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl text-[#2d5f3f]">{sector.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Union Openness */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-[#2d5f3f]">Open to All Workers</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              The Union will be open to all workers. We welcome everyone working in transport and allied sectors to join NATAWU and benefit from our collective strength and representation.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center text-[#2d5f3f]">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-2 text-[#2d5f3f]">5,000+</div>
              <p className="text-gray-600">Total Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[#2d5f3f]">17</div>
              <p className="text-gray-600">Major Sectors</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[#2d5f3f]">20+</div>
              <p className="text-gray-600">Employers Covered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[#2d5f3f]">3</div>
              <p className="text-gray-600">Regional Offices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center text-[#2d5f3f]">
            Key Issues We Address
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-[#2d5f3f]">Fair Wages</h3>
              <p className="text-gray-700">
                Negotiating competitive salaries and regular wage increases that keep pace with inflation and recognize workers' contributions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-[#2d5f3f]">Working Hours</h3>
              <p className="text-gray-700">
                Ensuring reasonable working hours, adequate rest periods, and fair overtime compensation for all members.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-[#2d5f3f]">Safety Standards</h3>
              <p className="text-gray-700">
                Advocating for proper safety equipment, training, and protocols to protect workers from occupational hazards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-[#2d5f3f]">Job Security</h3>
              <p className="text-gray-700">
                Fighting against unfair dismissals, supporting permanent employment, and protecting workers from exploitation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-[#2d5f3f]">Benefits & Leave</h3>
              <p className="text-gray-700">
                Ensuring proper annual leave, sick leave, family responsibility leave, and comprehensive benefit packages.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-3 text-[#2d5f3f]">Skills Development</h3>
              <p className="text-gray-700">
                Promoting training opportunities and career advancement for all workers in the transport sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2d5f3f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Is Your Sector Represented?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If you work in transport or an allied industry, NATAWU is here to protect your rights.
          </p>
          <a
            href="/location"
            className="bg-white text-[#2d5f3f] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-block text-lg"
          >
            Contact Your Local Branch
          </a>
        </div>
      </section>
    </div>
  );
}
