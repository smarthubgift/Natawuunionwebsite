import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroBg from "figma:asset/d05f94d4dedd282c3cb03ca4b5616b3c77335424.png";
import { useState } from "react";

export default function Location() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    branch: '',
    message: ''
  });

  const branchEmails: { [key: string]: string } = {
    'capetown': 'wc@natawu.net.za',
    'kzn': 'kzn@natawu.net.za',
    'gauteng': 'gp@natawu.net.za'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.branch) {
      alert('Please select a branch');
      return;
    }

    const recipientEmail = branchEmails[formData.branch];
    const subject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Branch Selected: ${formData.branch.toUpperCase()}

Message:
${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      branch: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const branches = [
    {
      name: "Cape Town - HEAD OFFICE",
      address: "Community House, 1st Floor,41 Salt River, Cape Town, 7927",
      phone: "+27 (0) 21 456 7890",
      email: "wc@natawu.net.za",
      email2: "lucky@natawu.net.za",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1525946159414-20188b278a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFmcmljYSUyMGNhcGUlMjB0b3duJTIwc2t5bGluZXxlbnwxfHx8fDE3NzE4Nzc1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      contactPerson: "Lucky Siwani or Admin",
      services: ["Membership Registration", "Legal Assistance", "Grievance Support", "Training Workshops"]
    },
    {
      name: "KZN Branch",
      phone: "+27 (0) 73 834 8457",
      email: "kzn@natawu.net.za",
      email2: "simo@natawu.net.za",
      image: "https://images.unsplash.com/photo-1682065936841-6bb7f68207b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXJiYW4lMjBrem4lMjBzb3V0aCUyMGFmcmljYXxlbnwxfHx8fDE3NzE4Nzc1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      contactPerson: "Simo Fica",
      services: ["Membership Registration", "Collective Bargaining", "Benefits Administration", "Member Support"]
    },
    {
      name: "Gauteng Branch",
      phone: "+27 (0) 61 022 5839",
      email: "gp@natawu.net.za",
      image: "https://images.unsplash.com/photo-1636706519609-988babca3dd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2hhbm5lc2J1cmclMjBjaXR5JTIwYnVpbGRpbmdzfGVufDF8fHx8MTc3MTg3NzU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      contactPerson: "Nonhlanhla Sigubudu",
      services: ["Membership Registration", "Legal Representation", "Skills Development", "Financial Advice"]
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
          <h1 className="text-5xl mb-6">Our Branches</h1>
          <p className="text-xl max-w-3xl">
            Visit us at any of our three regional offices across South Africa
          </p>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {branches.map((branch, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <ImageWithFallback
                    src={branch.image}
                    alt={branch.name}
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-4xl mb-6 text-[#2d5f3f]">{branch.name}</h2>
                  
                  <div className="space-y-4 mb-6">
                    {branch.address && (
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-6 w-6 text-[#2d5f3f] flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700">{branch.address}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-6 w-6 text-[#2d5f3f] flex-shrink-0" />
                      <a href={`tel:${branch.phone}`} className="text-gray-700 hover:text-[#2d5f3f]">
                        {branch.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-6 w-6 text-[#2d5f3f] flex-shrink-0" />
                      <a href={`mailto:${branch.email}`} className="text-gray-700 hover:text-[#2d5f3f]">
                        {branch.email}
                      </a>
                    </div>
                    
                    {branch.hours && (
                      <div className="flex items-center space-x-3">
                        <Clock className="h-6 w-6 text-[#2d5f3f] flex-shrink-0" />
                        <p className="text-gray-700">{branch.hours}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl mb-3 text-[#2d5f3f]">Contact Person</h3>
                    <p className="text-gray-700">{branch.contactPerson}</p>
                  </div>

                  <div>
                    <h3 className="text-xl mb-3 text-[#2d5f3f]">Services Offered</h3>
                    <ul className="space-y-2">
                      {branch.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-[#2d5f3f] rounded-full mr-3"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl mb-8 text-center text-[#2d5f3f]">
              Get In Touch
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]"
                      placeholder="Enter your first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]"
                      placeholder="Enter your last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]"
                    placeholder="your.email@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]"
                    placeholder="+27 XX XXX XXXX"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Select Branch</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                  >
                    <option value="">Choose a branch</option>
                    <option value="capetown">Cape Town Branch</option>
                    <option value="kzn">KZN Branch</option>
                    <option value="gauteng">Gauteng Branch</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5f3f]"
                    placeholder="How can we help you?"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#2d5f3f] text-white py-4 rounded-lg hover:bg-[#1a3d2a] transition-colors text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* National Office Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-[#2d5f3f]">National Office</h2>
            <div className="bg-green-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-4">
                For national matters and head office inquiries:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Address:</strong> Community House, 1st Floor,41 Salt River, Cape Town, 7927</p>
                <p><strong>Phone:</strong> +27 (0) 21 456 7890</p>
                <p><strong>Email:</strong> wc@natawu.net.za</p>
                <p><strong>General Enquiries:</strong> wc@natawu.net</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Notice */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="text-xl mb-3 text-gray-800">Need Directions?</h3>
            <p className="text-gray-700">
              For detailed directions to any of our branches, please call ahead or use the address provided with your preferred navigation app. Our staff can also provide public transport information for easy access to our offices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}