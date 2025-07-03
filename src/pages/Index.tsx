
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Star, ShoppingCart, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const donuts = [
    {
      id: 1,
      name: "Glazed Classic",
      price: "Rp 15.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "classic",
      rating: 4.8,
      description: "Donat klasik dengan glazed manis yang lembut"
    },
    {
      id: 2,
      name: "Chocolate Sprinkles",
      price: "Rp 18.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "chocolate",
      rating: 4.9,
      description: "Donat coklat dengan taburan warna-warni"
    },
    {
      id: 3,
      name: "Strawberry Frosted",
      price: "Rp 20.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "fruity",
      rating: 4.7,
      description: "Donat dengan frosting strawberry segar"
    },
    {
      id: 4,
      name: "Caramel Delight",
      price: "Rp 22.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "premium",
      rating: 4.9,
      description: "Donat premium dengan saus karamel"
    },
    {
      id: 5,
      name: "Double Chocolate",
      price: "Rp 25.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "chocolate",
      rating: 5.0,
      description: "Donat coklat dengan isian coklat kaya"
    },
    {
      id: 6,
      name: "Rainbow Sprinkles",
      price: "Rp 19.000",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "classic",
      rating: 4.6,
      description: "Donat dengan taburan pelangi ceria"
    }
  ];

  const categories = [
    { id: "all", name: "Semua", count: donuts.length },
    { id: "classic", name: "Klasik", count: donuts.filter(d => d.category === "classic").length },
    { id: "chocolate", name: "Coklat", count: donuts.filter(d => d.category === "chocolate").length },
    { id: "fruity", name: "Buah", count: donuts.filter(d => d.category === "fruity").length },
    { id: "premium", name: "Premium", count: donuts.filter(d => d.category === "premium").length }
  ];

  const filteredDonuts = selectedCategory === "all" 
    ? donuts 
    : donuts.filter(donut => donut.category === selectedCategory);

  const handleOrder = (platform: string, donut?: any) => {
    const message = donut 
      ? `Halo! Saya ingin memesan ${donut.name} seharga ${donut.price}`
      : "Halo! Saya ingin melihat menu donat yang tersedia";

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'gofood':
        window.open('https://gofood.co.id/jakarta/restaurant/donut-heaven', '_blank');
        break;
      case 'shopee':
        window.open('https://shopee.co.id/donutheaven', '_blank');
        break;
    }
    
    toast({
      title: "Mengarahkan ke " + platform,
      description: "Anda akan diarahkan ke platform pemesanan",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-orange-100 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍩</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Donut Heaven
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-orange-600 transition-colors">Menu</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">Kontak</button>
            </div>

            <div className="flex items-center space-x-2">
              <Button 
                onClick={() => handleOrder('whatsapp')}
                className="bg-green-500 hover:bg-green-600 text-white"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Order
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                ⭐ Donat Terenak di Kota!
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Nikmati
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent block">
                  Donat Segar
                </span>
                Setiap Hari!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dibuat dengan bahan-bahan berkualitas tinggi dan resep rahasia keluarga. 
                Order sekarang dan rasakan kelezatan yang tak terlupakan!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-3"
                  onClick={() => scrollToSection('menu')}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Lihat Menu
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-3"
                  onClick={() => handleOrder('whatsapp')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-orange-500" />
                  Buka 24 Jam
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                  4.9/5 Rating
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop" 
                alt="Delicious Donuts" 
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Platforms */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pesan Melalui Platform Favorit Anda</h3>
            <p className="text-gray-600">Mudah, cepat, dan terpercaya</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => handleOrder('gofood')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
            >
              🍴 GoFood
            </Button>
            <Button 
              onClick={() => handleOrder('shopee')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full"
            >
              🛒 Shopee Food
            </Button>
            <Button 
              onClick={() => handleOrder('whatsapp')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full"
            >
              📱 WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Menu Spesial Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilihan donat segar dengan berbagai rasa yang menggugah selera
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-orange-50 border border-orange-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDonuts.map((donut) => (
              <Card key={donut.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={donut.image} 
                      alt={donut.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-semibold">{donut.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{donut.name}</h3>
                    <p className="text-gray-600 mb-4">{donut.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-orange-600">{donut.price}</span>
                      <Button 
                        onClick={() => handleOrder('whatsapp', donut)}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                      >
                        Pesan Sekarang
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Tentang Donut Heaven</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sejak 2018, Donut Heaven telah menjadi destinasi favorit untuk menikmati donat segar dan berkualitas tinggi. 
                Kami berkomitmen menggunakan bahan-bahan terbaik dan resep yang telah diwariskan turun temurun.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
                  <div className="text-gray-600">Donat Terjual</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">5K+</div>
                  <div className="text-gray-600">Pelanggan Puas</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=400&fit=crop" 
                alt="Our Story" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">Kami siap melayani Anda dengan sepenuh hati</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50">
              <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Alamat</h3>
              <p className="text-gray-600">Jl. Donat Manis No. 123<br/>Jakarta Selatan 12345</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50">
              <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Telepon</h3>
              <p className="text-gray-600">+62 812-3456-7890<br/>+62 21-1234-5678</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50">
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jam Buka</h3>
              <p className="text-gray-600">Senin - Minggu<br/>24 Jam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🍩</span>
                </div>
                <h3 className="text-xl font-bold">Donut Heaven</h3>
              </div>
              <p className="text-gray-400">Donat segar dengan cita rasa yang tak terlupakan</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Donat Klasik</li>
                <li>Donat Coklat</li>
                <li>Donat Buah</li>
                <li>Donat Premium</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Delivery</li>
                <li>Pickup</li>
                <li>Catering</li>
                <li>Custom Order</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                  📘
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                  📷
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                  🐦
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Donut Heaven. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => handleOrder('whatsapp')}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-2xl animate-pulse"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
