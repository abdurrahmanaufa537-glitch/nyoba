import React from 'react';
import { Badge } from './ui/badge';
import { Coffee, Users, Award, Clock } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Premium Coffee',
      description: 'Biji kopi pilihan dari petani lokal terbaik'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Baristas',
      description: 'Tim barista berpengalaman dan terlatih'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Signature Dishes',
      description: 'Menu special dengan cita rasa autentik'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fresh Daily',
      description: 'Bahan segar disiapkan setiap hari'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tempat Terbaik untuk
              <span className="text-emerald-600"> Kopi & Kuliner</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Point Cafe hadir sejak 2019 sebagai destinasi favorit pecinta kopi dan kuliner di Magelang. 
              Kami berkomitmen menyajikan pengalaman terbaik dengan kopi berkualitas premium dan 
              hidangan lezat dalam suasana yang nyaman.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Menu signature kami, <span className="font-semibold text-emerald-600">Bistik Babi</span>, 
              telah menjadi favorit pelanggan dengan resep rahasia yang diturunkan dan 
              cita rasa yang tidak akan Anda temukan di tempat lain.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1611323128401-faa8f1b6de24?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgwNjU1MzM4fDA&ixlib=rb-4.1.0&q=85"
                  alt="Cafe Interior"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Coffee"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxjYWZlJTIwZm9vZHxlbnwwfHx8fDE3ODA2NTUzNjl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Food"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/29394552/pexels-photo-29394552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Cafe Ambiance"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
