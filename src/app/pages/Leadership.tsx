import generalSecretaryImg from "../../imports/WhatsApp_Image_2026-03-02_at_17.21.55_(1).jpeg";
import presidentImg from "figma:asset/f0dfee63eeda89603d7342aa8007247014bc29e8.png";
import treasurerImg from "../../imports/WhatsApp_Image_2026-03-03_at_14.09.57.jpeg";
import deputyGeneralSecretaryImg from "figma:asset/237355f8e8bdf8cd581711c68a407ea1afa0da41.png";
import deputyPresidentImg from "figma:asset/8b8626d5c944fff0fa3803e38b9ac9b33210a072.png";
import heroBg from "figma:asset/d05f94d4dedd282c3cb03ca4b5616b3c77335424.png";

export default function Leadership() {
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
          <h1 className="text-5xl mb-6">Our Leadership</h1>
          <p className="text-xl max-w-3xl">
            Meet the dedicated leaders who guide NATAWU in our mission to protect and advance workers' rights across South Africa.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center text-[#2d5f3f]">
            NATAWU Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={generalSecretaryImg}
                alt="General Secretary - Simo Fica"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover object-center"
              />
              <h3 className="text-xl mb-2 text-[#2d5f3f]">General Secretary</h3>
              <p className="text-gray-600">Simo Fica</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={presidentImg}
                alt="President - Lucky Siwani"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover object-center"
              />
              <h3 className="text-xl mb-2 text-[#2d5f3f]">President</h3>
              <p className="text-gray-600">Lucky Siwani</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={treasurerImg}
                alt="Treasurer - Zanele Nyangintaka"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover object-center"
              />
              <h3 className="text-xl mb-2 text-[#2d5f3f]">Treasurer</h3>
              <p className="text-gray-600">Zanele Nyangintaka</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={deputyGeneralSecretaryImg}
                alt="Deputy General Secretary - Nonhlanhla Sigubudu"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover object-center"
              />
              <h3 className="text-xl mb-2 text-[#2d5f3f]">Deputy General Secretary</h3>
              <p className="text-gray-600">Nonhlanhla Sigubudu</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={deputyPresidentImg}
                alt="Deputy President - Lebogang Ngake"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover object-center"
              />
              <h3 className="text-xl mb-2 text-[#2d5f3f]">Deputy President</h3>
              <p className="text-gray-600">Lebogang Ngake</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}