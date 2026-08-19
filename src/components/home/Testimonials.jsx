import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Vericon Engineering transformed our facility's HVAC system. Their expertise and professional approach ensured we met all regulatory standards while reducing energy costs significantly.",
    name: "Rajesh Kumar",
    title: "Facility Manager",
    company: "TechPark Solutions"
  },
  {
    quote: "The level of detail in their electrical engineering plans was exceptional. The project was delivered on time and exceeded our expectations in terms of safety and quality.",
    name: "Anita Sharma",
    title: "Operations Director",
    company: "Global Pharmaceuticals"
  },
  {
    quote: "Their fire fighting system implementation gave us complete peace of mind. Truly a world-class team of engineers who understand the critical nature of their work.",
    name: "Michael Chen",
    title: "Project Head",
    company: "Zenith Commercial Complex"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-brand-blue mb-6">
            Trusted by <span className="text-brand-red">Industry Leaders</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-8 -translate-y-8 text-brand-blue/10 z-0 hidden md:block">
            <Quote size={120} />
          </div>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-12 z-10"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white shadow-xl text-center">
                  <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-blue/20 mb-4 flex items-center justify-center text-brand-blue font-bold text-xl">
                      {t.name.charAt(0)}
                    </div>
                    <h4 className="font-poppins font-bold text-brand-blue">{t.name}</h4>
                    <p className="text-sm text-brand-blue font-medium">{t.title}</p>
                    <p className="text-xs text-gray-500">{t.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
