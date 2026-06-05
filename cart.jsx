import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { cartStorage } from '../mock';
import { toast } from 'sonner';

export const Cart = ({ isOpen, onClose }) => {
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (isOpen) {
      setCart(cartStorage.getCart());
    }
  }, [isOpen]);

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartStorage.updateQuantity(itemId, newQuantity);
    setCart(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartStorage.removeFromCart(itemId);
    setCart(updatedCart);
    toast.success('Item dihapus dari keranjang');
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!customerName || !customerPhone) {
      toast.error('Mohon isi nama dan nomor telepon');
      return;
    }

    if (cart.length === 0) {
      toast.error('Keranjang masih kosong');
      return;
    }

    // Create WhatsApp message
    const orderDetails = cart
      .map((item) => `${item.name} x${item.quantity} - Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`)
      .join('%0A');

    const message = `*PESANAN BARU - Point Cafe*%0A%0A` +
      `Nama: ${customerName}%0A` +
      `No. Telp: ${customerPhone}%0A%0A` +
      `*Detail Pesanan:*%0A${orderDetails}%0A%0A` +
      `*Total: Rp ${total.toLocaleString('id-ID')}*%0A%0A` +
      `${notes ? `Catatan: ${notes}` : ''}`;

    const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Clear cart after order
    cartStorage.clearCart();
    setCart([]);
    setCustomerName('');
    setCustomerPhone('');
    setNotes('');
    toast.success('Pesanan dikirim! Kami akan segera menghubungi Anda.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Keranjang</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Keranjang masih kosong</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-emerald-600 font-semibold mb-2">
                      Rp {item.price.toLocaleString('id-ID')}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 ml-auto text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Form */}
        {cart.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                No. Telepon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="08xxxxxxxxxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catatan (Opsional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Catatan pesanan..."
                rows={2}
              />
            </div>

            {/* Total */}
            <div className="flex justify-between items-center py-4 border-t">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-emerald-600">
                Rp {total.toLocaleString('id-ID')}
              </span>
            </div>

            {/* Checkout Button */}
            <Button
              onClick={handleCheckout}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg rounded-xl transition-all hover:shadow-lg"
            >
              Pesan via WhatsApp
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
