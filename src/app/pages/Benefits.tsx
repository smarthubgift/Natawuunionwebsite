import { Check, Home, Scale, Users, PiggyBank, Heart, DollarSign, UserCheck, FileText, Award, BookOpen, Baby } from "lucide-react";
import heroBg from "figma:asset/d05f94d4dedd282c3cb03ca4b5616b3c77335424.png";

export default function Benefits() {
  const benefits = [
    {
      title: "Pension Backed Housing Loans",
      icon: Home,
      description: "Access affordable housing loans backed by your pension contributions to help you secure your dream home."
    },
    {
      title: "Legal Representation",
      icon: Scale,
      description: "Free legal representation and support for all employment-related matters and workplace disputes."
    },
    {
      title: "Bargaining Power",
      icon: Users,
      description: "Collective bargaining strength to negotiate better wages, working conditions, and employee rights."
    },
    {
      title: "Savings Scheme",
      icon: PiggyBank,
      description: "Structured savings programs to help you build financial security for your future."
    },
    {
      title: "Funeral Cover",
      icon: Heart,
      description: "Comprehensive funeral cover for members and their immediate family members."
    },
    {
      title: "Personal Loan Debt Consolidation",
      icon: DollarSign,
      description: "Assistance with consolidating your debts into manageable repayment plans."
    },
    {
      title: "Members Welfare Benefits",
      icon: UserCheck,
      description: "Wide range of welfare support services for members in times of need."
    },
    {
      title: "Broker / Medical Aid Cover",
      icon: FileText,
      description: "Access to discounted medical aid schemes through our trusted brokers."
    },
    {
      title: "Members Referral Incentives",
      icon: Award,
      description: "Earn rewards for referring new members to join NATAWU and grow our community."
    },
    {
      title: "Financial Literacy Training",
      icon: BookOpen,
      description: "Free financial education workshops to help you manage your money effectively."
    },
    {
      title: "Paternity and Maternity Cover",
      icon: Baby,
      description: "Support and benefits for new parents, including paternity and maternity leave assistance."
    }
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
          <h1 className="text-5xl mb-6">Benefits Packages</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive benefits and support services for all NATAWU members
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-green-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="bg-[#2d5f3f] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4 text-[#2d5f3f]">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose NATAWU */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center text-[#2d5f3f]">
            Why Choose NATAWU?
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg">
              <Check className="h-6 w-6 text-[#2d5f3f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2 text-[#2d5f3f]">Proven Track Record</h3>
                <p className="text-gray-700">
                  Over 20 years of successfully representing transport workers across South Africa
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg">
              <Check className="h-6 w-6 text-[#2d5f3f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2 text-[#2d5f3f]">Strong Leadership</h3>
                <p className="text-gray-700">
                  Experienced leaders committed to fighting for workers' rights and fair treatment
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg">
              <Check className="h-6 w-6 text-[#2d5f3f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2 text-[#2d5f3f]">Nationwide Presence</h3>
                <p className="text-gray-700">
                  Three regional branches ensuring support wherever you are in South Africa
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg">
              <Check className="h-6 w-6 text-[#2d5f3f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2 text-[#2d5f3f]">Member-Focused</h3>
                <p className="text-gray-700">
                  Every decision we make prioritizes the welfare and interests of our members
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg">
              <Check className="h-6 w-6 text-[#2d5f3f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2 text-[#2d5f3f]">Comprehensive Support</h3>
                <p className="text-gray-700">
                  From legal aid to financial training, we provide holistic support services
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg">
              <Check className="h-6 w-6 text-[#2d5f3f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2 text-[#2d5f3f]">Affordable Membership</h3>
                <p className="text-gray-700">
                  Low membership fees that provide exceptional value and comprehensive benefits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2d5f3f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Ready to Enjoy These Benefits?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of workers who are protected and empowered through NATAWU membership.
          </p>
          <a
            href="/forms"
            className="bg-white text-[#2d5f3f] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-block text-lg"
          >
            Join Now
          </a>
        </div>
      </section>
    </div>
  );
}
