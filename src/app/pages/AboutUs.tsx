import image_d26438bb5dcf06d0034caeb29de3d6343cf56c36 from 'figma:asset/d26438bb5dcf06d0034caeb29de3d6343cf56c36.png'
import { Target, Eye, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import heroBg from "figma:asset/d05f94d4dedd282c3cb03ca4b5616b3c77335424.png";
import generalSecretaryImg from "figma:asset/8becde26f4194d0e21d6c8a5315ab1339e8ea73c.png";
import presidentImg from "figma:asset/f0dfee63eeda89603d7342aa8007247014bc29e8.png";
import treasurerImg from "figma:asset/2e6bb55a92e90f7cfb06388a638a7c37eb0df3f4.png";
import deputyGeneralSecretaryImg from "figma:asset/237355f8e8bdf8cd581711c68a407ea1afa0da41.png";
import deputyPresidentImg from "figma:asset/8b8626d5c944fff0fa3803e38b9ac9b33210a072.png";

export default function AboutUs() {
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
          <h1 className="text-5xl mb-6">About NATAWU</h1>
          <p className="text-xl max-w-3xl">
           NATAWU defends workers’ rights, opposes privatisation, fights exploitation, and unites transport workers through strong shop stewards and leadership.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-[#2d5f3f]">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4">
                "National African Transport & Allied Workers Union (NATAWU) was formed on 3 May 2024 in response to widespread dissatisfaction among workers with previously recognised unions. Many workers felt that existing unions were no longer acting in their best interests and were compromising workers' rights by prioritising employer interests. NATAWU was therefore established to restore trust, integrity, and genuine representation in the transport and allied sectors.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With over 5,000 active members across three regional branches, NATAWU provides a powerful voice for workers in negotiations with employers and government.
              </p>
              <p className="text-lg text-gray-700">
                We believe in the power of collective action and solidarity. Through unity, we achieve fair wages, safe working conditions, and dignity for all workers.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1623412912058-4e4552dbc10d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29ya2VycyUyMHRlYW0lMjB1bml0eXxlbnwxfHx8fDE3NzE4Nzc1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="NATAWU team"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-[#2d5f3f]" />
              </div>
              <h3 className="text-2xl mb-4 text-[#2d5f3f]">Our Mission</h3>
              <p className="text-gray-700">
                To protect and advance the rights, interests, and welfare of all transport and allied workers through collective bargaining, advocacy, and solidarity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-[#2d5f3f]" />
              </div>
              <h3 className="text-2xl mb-4 text-[#2d5f3f]">Our Vision</h3>
              <p className="text-gray-700">
                A South Africa where all workers enjoy fair wages, safe working conditions, and are treated with dignity and respect in their workplaces.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-[#2d5f3f]" />
              </div>
              <h3 className="text-2xl mb-4 text-[#2d5f3f]">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Solidarity and Unity</li>
                <li>• Integrity and Transparency</li>
                <li>• Democracy and Participation</li>
                <li>• Social Justice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center text-[#2d5f3f]">
            Our History
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="border-l-4 border-[#2d5f3f] pl-6">
                <h3 className="text-2xl mb-2 text-[#2d5f3f]">2024-Present</h3>
                <p className="text-gray-700">
                  National African Transport & Allied Workers Union (NATAWU) was founded on 3 May 2024 in response to widespread dissatisfaction among workers with previously recognised unions. Many workers felt that existing unions were no longer acting in their best interests and were compromising workers' rights by prioritising employer interests. NATAWU was established to restore trust, integrity, and genuine representation in the transport and allied sectors. The union quickly expanded to include allied workers in logistics, warehousing, and distribution sectors, opening regional head offices in Cape Town, KZN, and Gauteng to better serve members across the country. Today, NATAWU has reached over 5,000 active members and continues to be a leading voice for workers' rights in South Africa's transport and logistics industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center text-[#2d5f3f]">
            Our Leadership
          </h2>
          <div className="flex justify-center">
            <Link
              to="/leadership"
              className="bg-[#2d5f3f] text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-xl shadow-lg"
            >
              OUR LEADERSHIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}