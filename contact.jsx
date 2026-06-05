import React from 'react';
import { cafeInfo } from '../mock';
import { Badge } from './ui/badge';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kunjungi <span className="text-emerald-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami siap melayani Anda setiap hari
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Alamat</h3>
                <p className="text-gray-600 leading-relaxed">{cafeInfo.address}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Jam Buka</h3>
                <p className="text-gray-600">Setiap Hari</p>
                <p className="text-emerald-600 font-semibold text-lg">{cafeInfo.hours}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Telepon</h3>
                <a href={`tel:${cafeInfo.phone}`} className="text-gray-600 hover:text-emerald-600 transition-colors">
                  {cafeInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                <a href={`mailto:${cafeInfo.email}`} className="text-gray-600 hover:text-emerald-600 transition-colors">
                  {cafeInfo.email}
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Ikuti Kami</h3>
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 rounded-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
                  onClick={() => window.open(cafeInfo.social.instagram, '_blank')}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 rounded-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
                  onClick={() => window.open(cafeInfo.social.facebook, '_blank')}
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="w-12 h-12 rounded-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
                  onClick={() => window.open(cafeInfo.social.whatsapp, '_blank')}
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[500px]">
            <iframe
              title="Point Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5!2d110.217!3d-7.4797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjgnNDcuMCJTIDExMMKwMTMnMDEuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
