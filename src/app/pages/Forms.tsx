import { FileText, CheckCircle, Download } from "lucide-react";
import heroBg from "figma:asset/d05f94d4dedd282c3cb03ca4b5616b3c77335424.png";

export default function Forms() {
  // Handle PDF download
  const handleDownload = (formType: string) => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/MEMBERSHIP APPLICATION FORM.pdf';
    link.download = 'NATAWU_Membership_Application_Form.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const forms = [
    {
      title: "Membership Application Form",
      description: "Join NATAWU and start enjoying member benefits today",
      fields: ["Personal Information", "Employment Details", "Contact Information"],
      color: "bg-green-100",
      downloadable: true
    },
    {
      title: "Grievance Form",
      description: "Report workplace issues or disputes for union assistance",
      fields: ["Incident Details", "Parties Involved", "Desired Outcome"],
      color: "bg-blue-100",
      downloadable: false
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
          <h1 className="text-5xl mb-6">Forms</h1>
          <p className="text-xl max-w-3xl">
            Download and submit forms for membership, assistance, and union services
          </p>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {forms.map((form, index) => (
              <div key={index} className={`${form.color} p-8 rounded-lg shadow-lg`}>
                <div className="flex items-start mb-4">
                  <FileText className="h-8 w-8 text-[#2d5f3f] mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl mb-2 text-[#2d5f3f]">{form.title}</h3>
                    <p className="text-gray-700">{form.description}</p>
                  </div>
                </div>
                <div className="mt-6 mb-6">
                  <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Required Information:</h4>
                  <ul className="space-y-2">
                    {form.fields.map((field, fieldIndex) => (
                      <li key={fieldIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-[#2d5f3f] mr-2" />
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>
                {form.downloadable ? (
                  <button 
                    onClick={() => handleDownload(form.title)}
                    className="bg-[#2d5f3f] text-white px-6 py-3 rounded-lg hover:bg-[#1a3d2a] transition-colors w-full flex items-center justify-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Download PDF Form
                  </button>
                ) : (
                  <button className="bg-gray-400 text-white px-6 py-3 rounded-lg w-full cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Application Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center text-[#2d5f3f]">
              Become a NATAWU Member
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl mb-6 text-[#2d5f3f]">Membership Requirements</h3>
              <div className="space-y-4 text-gray-700 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#2d5f3f] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Employment:</strong> Must be employed in the transport or allied industries
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#2d5f3f] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Age:</strong> Must be 18 years or older
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#2d5f3f] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Documents:</strong> Valid ID, proof of employment, and recent payslip
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#2d5f3f] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Fees:</strong> Once-off joining fee of R50 and monthly subscription of R120
                  </div>
                </div>
              </div>

              <h3 className="text-2xl mb-6 text-[#2d5f3f]">How to Apply</h3>
              <ol className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="bg-[#2d5f3f] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>Download and complete the membership application form</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#2d5f3f] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>Attach copies of required documents (ID, proof of employment, payslip)</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#2d5f3f] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>Submit your application to your nearest NATAWU branch office</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#2d5f3f] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>Pay the joining fee and first month's subscription</div>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#2d5f3f] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>Receive your membership card within 2 weeks</div>
                </li>
              </ol>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl mb-3 text-[#2d5f3f]">Need Help?</h4>
                <p className="text-gray-700 mb-4">
                  Our branch offices are ready to assist you with the application process.
                </p>
                <a
                  href="/location"
                  className="bg-[#2d5f3f] text-white px-6 py-3 rounded-lg hover:bg-[#1a3d2a] transition-colors inline-block"
                >
                  Find Your Nearest Branch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8 text-center text-[#2d5f3f]">
              Form Submission Guidelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-[#2d5f3f]">In-Person Submission</h3>
                <p className="text-gray-700 mb-4">
                  Visit any of our three branch offices during business hours (Monday-Friday, 8:00 AM - 5:00 PM).
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Bring original documents for verification</li>
                  <li>• Make copies available for our records</li>
                  <li>• Staff will assist with form completion</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-[#2d5f3f]">Email Submission</h3>
                <p className="text-gray-700 mb-4">
                  Scan completed forms and supporting documents, then email to: forms@natawu.org.za
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Use clear, legible scans</li>
                  <li>• Include all required documents</li>
                  <li>• Expect confirmation within 48 hours</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-[#2d5f3f]">Postal Submission</h3>
                <p className="text-gray-700 mb-4">
                  Mail completed forms to your regional branch office (addresses on Location page).
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Use registered mail for security</li>
                  <li>• Include return contact details</li>
                  <li>• Allow 5-7 business days for processing</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-[#2d5f3f]">Urgent Requests</h3>
                <p className="text-gray-700 mb-4">
                  For urgent matters, please contact your branch office directly by phone.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Call during business hours</li>
                  <li>• Explain the urgency of your request</li>
                  <li>• Follow up with written documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}