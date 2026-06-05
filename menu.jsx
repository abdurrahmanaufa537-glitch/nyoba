import React, { useState } from 'react';
import { menuItems, menuCategories } from '../mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { toast } from 'sonner';

export const Menu = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    onAddToCart(item);
    toast.success(`${item.name} ditambahkan ke keranjang!`);
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            Our Menu
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pilihan <span className="text-emerald-600">Terbaik</span> Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dari kopi premium hingga hidangan signature kami
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`rounded-full px-6 py-2 transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg scale-105'
                  : 'hover:border-emerald-600 hover:text-emerald-600'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.signature && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 text-white hover:bg-red-500">
                      <Star className="w-3 h-3 mr-1 fill-white" />
                      Signature
                    </Badge>
                  </div>
                )}
                {item.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-500 text-white hover:bg-emerald-500">
                      Popular
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">
                      Rp {item.price.toLocaleString('id-ID')}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                <Button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all hover:shadow-lg"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Tambah ke Keranjang
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
