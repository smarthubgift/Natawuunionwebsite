import { FileText, Download } from "lucide-react";
import heroBg from "figma:asset/d05f94d4dedd282c3cb03ca4b5616b3c77335424.png";

export default function Documents() {
  const documents = [
    {
      category: "Constitution & Policies",
      files: [
        { name: "NATAWU Constitution", size: "2.5 MB", type: "PDF" },
        { name: "Code of Conduct", size: "1.2 MB", type: "PDF" },
        { name: "Disciplinary Policy", size: "850 KB", type: "PDF" },
        { name: "Health and Safety Policy", size: "1.8 MB", type: "PDF" }
      ]
    },
    {
      category: "Annual Reports",
      files: [
        { name: "Annual Report 2025", size: "5.2 MB", type: "PDF" },
        { name: "Annual Report 2024", size: "4.8 MB", type: "PDF" },
        { name: "Financial Statement 2025", size: "3.1 MB", type: "PDF" },
        { name: "Financial Statement 2024", size: "2.9 MB", type: "PDF" }
      ]
    },
    {
      category: "Collective Agreements",
      files: [
        { name: "National Bargaining Agreement 2025", size: "3.5 MB", type: "PDF" },
        { name: "Wage Agreement 2025-2027", size: "2.8 MB", type: "PDF" },
        { name: "Transport Sector Agreement", size: "4.2 MB", type: "PDF" },
        { name: "Benefits and Leave Policy", size: "1.5 MB", type: "PDF" }
      ]
    },
    {
      category: "Guidelines & Procedures",
      files: [
        { name: "Grievance Procedures", size: "1.1 MB", type: "PDF" },
        { name: "Strike Action Guidelines", size: "950 KB", type: "PDF" },
        { name: "Member Rights and Responsibilities", size: "1.3 MB", type: "PDF" },
        { name: "Dispute Resolution Process", size: "1.6 MB", type: "PDF" }
      ]
    },
    {
      category: "Educational Materials",
      files: [
        { name: "Workers Rights Handbook", size: "3.8 MB", type: "PDF" },
        { name: "Know Your Rights Guide", size: "2.2 MB", type: "PDF" },
        { name: "Shop Steward Manual", size: "4.5 MB", type: "PDF" },
        { name: "Health and Safety Training", size: "5.1 MB", type: "PDF" }
      ]
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
          <h1 className="text-5xl mb-6">Documents</h1>
          <p className="text-xl max-w-3xl">
            Access important NATAWU documents, policies, and resources
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {documents.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl mb-6 text-[#2d5f3f]">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.files.map((file, fileIndex) => (
                    <div
                      key={fileIndex}
                      className="flex items-center justify-between bg-green-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-green-100"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-[#2d5f3f] p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-800">{file.name}</h3>
                          <p className="text-sm text-gray-600">{file.type} • {file.size}</p>
                        </div>
                      </div>
                      <button className="bg-[#2d5f3f] text-white p-3 rounded-lg hover:bg-[#1a3d2a] transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-[#2d5f3f]">
              Need Additional Documents?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If you can't find the document you're looking for, please contact your regional branch office. Our staff will be happy to assist you.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl mb-4 text-[#2d5f3f]">Document Request Information</h3>
              <div className="text-left space-y-4 text-gray-700">
                <p>
                  <strong>Head Office Email:</strong> wc@natawu.net.za
                </p>
                 <p>
                  <strong>KZN Email:</strong> kzn@natawu.net.za
                </p>
                <p>
                  <strong>Phone:</strong> +27 (0) 11 123 4567
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Please allow 2-3 business days for document requests to be processed. Members may be required to verify their membership status for certain documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="text-xl mb-3 text-gray-800">Important Notice</h3>
            <p className="text-gray-700">
              All documents provided on this page are for informational purposes only. Members should always refer to the most recent versions available at their branch offices. Some documents may require member login credentials to access in full.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}