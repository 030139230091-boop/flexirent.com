/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Menu, 
  X, 
  Wallet, 
  ShieldCheck, 
  Smartphone, 
  Monitor, 
  Tent, 
  Shirt, 
  Bike, 
  Heart, 
  ArrowRight, 
  Camera, 
  Speaker, 
  Calendar, 
  Hand, 
  PlusSquare, 
  CheckCircle2, 
  PiggyBank, 
  TrendingUp, 
  Shield, 
  HeartPulse, 
  Quote, 
  Globe, 
  Share2, 
  Mail, 
  Apple, 
  PlayCircle,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-slate-200 shadow-sm' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Wallet className="text-blue-600 w-8 h-8" />
            <span className="text-xl font-extrabold tracking-tight text-blue-600">FlexiRent</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold hover:text-blue-600 transition-colors">Khám phá</a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600 transition-colors">Cách hoạt động</a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600 transition-colors">Đăng sản phẩm</a>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-sm">
              Đăng nhập
            </button>
          </nav>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#" className="block text-base font-semibold text-slate-900 hover:text-blue-600">Khám phá</a>
              <a href="#" className="block text-base font-semibold text-slate-900 hover:text-blue-600">Cách hoạt động</a>
              <a href="#" className="block text-base font-semibold text-slate-900 hover:text-blue-600">Đăng sản phẩm</a>
              <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg text-base font-bold hover:bg-blue-700 transition-all shadow-sm">
                Đăng nhập
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 text-slate-900">
            Thuê mọi thứ bạn cần, <span className="text-blue-600">chia sẻ</span> những gì bạn có
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl">
            Nền tảng kinh tế chia sẻ tin cậy giúp bạn tối ưu hóa tài sản và tiết kiệm chi phí mua sắm. Kết nối hàng nghìn người dùng tại Việt Nam.
          </p>
          
          <div className="bg-white p-2 rounded-xl shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-slate-100 py-3">
              <Search className="text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Tìm máy ảnh, lều cắm trại..." 
                className="w-full border-none focus:ring-0 bg-transparent text-sm placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-center px-4 gap-3 py-3 min-w-[160px]">
              <MapPin className="text-slate-400 w-5 h-5" />
              <select className="w-full border-none focus:ring-0 bg-transparent text-sm font-medium text-slate-700">
                <option>TP.HCM</option>
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all whitespace-nowrap">
              Tìm kiếm
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiRdlHotMCmFGnrWDIR9wgxt5C7jMQzt5Zgb84TvXZQ_maN4ku-b4M2XsW3HV7Z39Rh5E8QVbK2nF26MI6C_hrQd9_E0oE4TdALuANS8TW6IkaDTfxIIsEtmP1PD2w77Et-rKE-sonesAjG-SSmwGuWEhnBAkUGWwHzS6deYGF-UsJE_rsSljRo_PxOFnJnqvNZZtSGtSrttrZLjmC1FsiKtHIlNPGEHkgdYaKtiDzugB8VjraO6BnLX6Ptw89cySPUGPRRBklXZKZ" 
              alt="Modern high tech camera and travel equipment" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Giao dịch an toàn</p>
              <p className="text-xs text-slate-500">Bảo hiểm lên đến 20tr</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { icon: <Monitor className="w-5 h-5" />, label: "Thiết bị điện tử", active: true },
    { icon: <Tent className="w-5 h-5" />, label: "Đồ dã ngoại" },
    { icon: <Shirt className="w-5 h-5" />, label: "Trang phục sự kiện" },
    { icon: <Bike className="w-5 h-5" />, label: "Dụng cụ thể thao" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
          {categories.map((cat, idx) => (
            <a 
              key={idx}
              href="#" 
              className={`flex items-center gap-3 px-6 py-3 rounded-full whitespace-nowrap transition-all ${cat.active ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {cat.icon}
              <span className="font-bold text-sm tracking-wide">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ image, category, title, location, price }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-800">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-1 truncate text-slate-900">{title}</h3>
        <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
          <MapPin className="w-3 h-3" /> {location}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-blue-600 font-black">
            {price}đ<span className="text-xs text-slate-400 font-medium">/ngày</span>
          </p>
          <button className="text-slate-300 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKjZ2a9ue97-niav_dJse018dyV4VxA0OQBCvzxAv_xoIjOPDhI009d0yo5bWCEFkv8U7bXYvZYLmYCVvgUTE0hf1ow0mZzMpZWREWIVP9H3dBO7tuWPq_rPqilDid7VhC6YVbs3aw5elDwczOhcJ5SIfvU9qNCaLoBPVC25IeMDqtfJ1LuLK9uVXTj12vBIAKOp6yevhlzfttjiaXFfeEHae98Z3MnW-sMxcna0IiaY3ulsy5Um9KXl6xRJOs9WkhsxYIBLtj4rmO",
      category: "Điện tử",
      title: "Máy ảnh Sony A7III",
      location: "Quận 1, TP.HCM",
      price: "200.000"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIdJ_eBje2v5rkGWntUTZcBtZ4T0hJcr9j0oId2QhKJ0Q34ayVwVUGHhp21XwiC1NTjX2wvoLTswRCqi7Sw3oWSPjJoURJ5Q687FWFQGwb-UN_YqxDr9qe6mPiYRKdkXi3tP8gd8RcIY1_3_6iPXlARXsRez6qYrnLHggl0gAiQ8UXvzaU1rgS4uF93H0BUoML7IlriJzCQkIAUpy-QXxdNc6tU6imaMEg7HDUgVuYtWEdhUeX6HcdnYSmuh1O68iKtfONaOuHewXG",
      category: "Phụ kiện",
      title: "Loa Marshall Killburn II",
      location: "Quận 3, TP.HCM",
      price: "150.000"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq1bZw3w7Ds8o2pY35th1R0W3Ef58ZOx5SpBDb5j5C5z8F8ILcwqPLUIWRleaub4ARkOKyhUSYz0j9ysa97eZJRM8hCmwIh-t3rJhWyGRTOp_-v-_y7k0xcJKujw_n9M_o5RhHOZXwOywE4dV_amQXkAzaGpkFI9UrW5YxJeeHcyUIHGgmp3L4DSprRSGwwL5ovVL23J2aFIDMLGe2_z-NTQDCRSt5_l-qwO1Po2P1j3KRAsqMhjRnvuASLqON39BpxIM98GpbgvhZ",
      category: "Thể thao",
      title: "Xe đạp địa hình Specialized",
      location: "Thủ Đức, TP.HCM",
      price: "120.000"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqwqWoDbwLQK3YT7O8QobTWwwhBNDU4Fs1LH0TLcoyM8FR4CipjYbJBW6z5EXBQFLnda9QRW75d7SVZ6Ks1Jl6UF-3agixrcy8gF6Pm8EX7KM00Ue_oRUwtnWtOcJdIf8BZ_USCNcgLlYftj6BhN34ZnEpDPigX2yREinqZs7gq4lRm7_VAtyq179Nc6G2D6yC58o9ND9JYxEykjToUuAaE3TDDOQHnGCWs31uYDHjXypTjXrdhr_idtX0cx4xuzWyOiRQGlvXkrjH",
      category: "Thời trang",
      title: "Váy dạ hội lụa cao cấp",
      location: "Quận 7, TP.HCM",
      price: "350.000"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Sản phẩm gần bạn (TP.HCM)</h2>
            <p className="text-slate-500">Được đề xuất dựa trên vị trí hiện tại của bạn</p>
          </div>
          <a href="#" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4 text-slate-900">Quy trình đơn giản</h2>
          <p className="text-slate-500">Dễ dàng tham gia cộng đồng kinh tế chia sẻ</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm italic">A</span> Cho người thuê
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 shadow-sm flex items-center justify-center text-blue-600">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900">1. Tìm kiếm</h4>
                  <p className="text-sm text-slate-500">Dễ dàng tìm thấy món đồ ưng ý gần bạn qua bộ lọc thông minh.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 shadow-sm flex items-center justify-center text-blue-600">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900">2. Đặt chỗ</h4>
                  <p className="text-sm text-slate-500">Kiểm tra lịch trống và thanh toán đặt cọc an toàn qua FlexiRent.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 shadow-sm flex items-center justify-center text-blue-600">
                  <Hand className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900">3. Nhận đồ</h4>
                  <p className="text-sm text-slate-500">Gặp chủ sở hữu để nhận đồ và bắt đầu sử dụng ngay lập tức.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900">
              <span className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm italic">B</span> Cho người cho thuê
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 shadow-sm flex items-center justify-center text-blue-600">
                  <PlusSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900">1. Đăng tin</h4>
                  <p className="text-sm text-slate-500">Chụp ảnh, mô tả sản phẩm và đặt giá thuê mong muốn của bạn.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 shadow-sm flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900">2. Duyệt yêu cầu</h4>
                  <p className="text-sm text-slate-500">Kiểm tra thông tin người thuê và chấp nhận yêu cầu thuê đồ.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 shadow-sm flex items-center justify-center text-blue-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900">3. Nhận tiền</h4>
                  <p className="text-sm text-slate-500">Hệ thống tự động chuyển tiền vào ví của bạn sau khi giao dịch hoàn tất.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { icon: <PiggyBank className="w-8 h-8" />, title: "Tiết kiệm chi phí", desc: "Thuê đồ với giá chỉ bằng 1/10 giá mua mới." },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Tăng thu nhập", desc: "Kiếm thêm từ những đồ dùng bạn ít khi sử dụng." },
    { icon: <Shield className="w-8 h-8" />, title: "Giao dịch an toàn", desc: "Mọi quy trình được giám sát và hỗ trợ 24/7." },
    { icon: <HeartPulse className="w-8 h-8" />, title: "Bảo hiểm đồ dùng", desc: "Yên tâm với gói bảo hiểm hư hỏng, mất mát." },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((b, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                {b.icon}
              </div>
              <h4 className="font-bold mb-2 text-slate-900">{b.title}</h4>
              <p className="text-sm text-slate-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
        <p className="text-2xl font-medium leading-relaxed mb-8 italic">
          "FlexiRent giúp mình thuê được chiếc máy ảnh Sony cực chất để đi du lịch Đà Lạt mà không cần bỏ ra hàng chục triệu đồng. Quy trình nhận đồ rất nhanh chóng và tin cậy!"
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
            H
          </div>
          <div className="text-left">
            <p className="font-bold">Hân</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Wallet className="text-blue-500 w-6 h-6" />
              <span className="text-lg font-extrabold tracking-tight text-white">FlexiRent</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Nền tảng cho thuê đồ dùng cá nhân hàng đầu Việt Nam. Tối ưu hóa tài sản, tiết kiệm chi phí.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white">Khám phá</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Thiết bị điện tử</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Đồ dã ngoại</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Sự kiện & Tiệc tùng</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Vị trí gần đây</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white">Hỗ trợ</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Quy định bảo mật</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Bảo hiểm FlexiCare</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-white">Tải ứng dụng</h5>
            <div className="space-y-3">
              <div className="bg-slate-900 border border-slate-800 text-white p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition-all">
                <Apple className="w-6 h-6" />
                <div className="text-[10px] leading-none uppercase">
                  Tải từ <div className="text-sm font-bold mt-1">App Store</div>
                </div>
              </div>
              <div className="bg-slate-900 border border-slate-800 text-white p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition-all">
                <PlayCircle className="w-6 h-6" />
                <div className="text-[10px] leading-none uppercase">
                  Tải từ <div className="text-sm font-bold mt-1">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2024 FlexiRent. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:underline">Bảo mật</a>
            <a href="#" className="hover:underline">Điều khoản</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
        <Process />
        <Benefits />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
