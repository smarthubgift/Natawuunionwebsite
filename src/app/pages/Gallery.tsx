import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroBg from "figma:asset/d05f94d4dedd282c3cb03ca4b5616b3c77335424.png";
import galleryImg1 from "figma:asset/30d910e40eeaaaaac4fb74a52411d708eb39b106.png";
import galleryImg2 from "figma:asset/f1514fc712e7819ec9c0612081b4d6f98cfec366.png";
import galleryImg3 from "figma:asset/de8f03e064cb4acb660dbc8261fc9462b9f212a0.png";
import galleryImg4 from "figma:asset/b69c98121a6593c905963b5734057ac6cad397e2.png";
import galleryImg5 from "figma:asset/e023e1a6b12b18d384d5ceae1175dbff709ee16d.png";
import galleryImg6 from "figma:asset/056abd6fdd99bfa81f6e6f7e70fccda127ee915f.png";
import galleryImg7 from "../../imports/WhatsApp_Image_2026-01-25_at_16.03.56_(1).jpeg";
import galleryImg8 from "../../imports/WhatsApp_Image_2026-01-25_at_16.03.58.jpeg";
import galleryImg9 from "../../imports/WhatsApp_Image_2026-01-25_at_16.01.59_(1).jpeg";

export default function Gallery() {
  const images = [
    {
      src: galleryImg1,
      alt: "NATAWU members gathering at office",
      title: "Team Meeting"
    },
    {
      src: galleryImg2,
      alt: "NATAWU union members showing solidarity",
      title: "Unity in Action"
    },
    {
      src: galleryImg3,
      alt: "NATAWU conference meeting",
      title: "Member Conference"
    },
    {
      src: galleryImg4,
      alt: "NATAWU members outdoor gathering showing unity",
      title: "Community Gathering"
    },
    {
      src: galleryImg5,
      alt: "NATAWU team with banner at community event",
      title: "Community Outreach"
    },
    {
      src: galleryImg6,
      alt: "NATAWU leadership meeting",
      title: "Strategy Session"
    },
    {
      src: galleryImg7,
      alt: "NATAWU union activities",
      title: "Union Activities"
    },
    {
      src: galleryImg8,
      alt: "NATAWU members event",
      title: "Members Event"
    },
    {
      src: galleryImg9,
      alt: "NATAWU team collaboration",
      title: "Team Collaboration"
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
          <h1 className="text-5xl mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl">
            Explore images from NATAWU events and activities
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center text-[#2d5f3f]">
            Our Events & Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}