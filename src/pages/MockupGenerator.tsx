import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload, Download, User, Phone, Package, Hash, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Product options for the interested product dropdown
const PRODUCT_OPTIONS = [
  "T-Shirt",
  "Hoodie",
  "Formal Shirt",
  "Polo T-Shirt",
  "Sweatshirt",
  "Cap / Hat",
  "Mug",
  "Corporate Gifts",
  "Other",
];

// Placeholder images for blank white apparel
const PRODUCTS = {
  tshirt: {
    id: "tshirt",
    name: "T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    designArea: { top: "30%", left: "35%", width: "30%", height: "40%" },
  },
  hoodie: {
    id: "hoodie",
    name: "Hoodie",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    designArea: { top: "35%", left: "35%", width: "30%", height: "30%" },
  },
  shirt: {
    id: "shirt",
    name: "Formal Shirt",
    image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e23?auto=format&fit=crop&q=80&w=800",
    designArea: { top: "30%", left: "60%", width: "15%", height: "20%" },
  },
};

const COLORS = [
  { name: "White", value: "#ffffff" },
  { name: "Black", value: "#1a1a1a" },
  { name: "Navy", value: "#0a192f" },
  { name: "Red", value: "#dc2626" },
  { name: "Grey", value: "#e5e7eb" },
];

// ─── Lead Capture Form ───────────────────────────────────────────────────────

interface UserInfo {
  name: string;
  phone: string;
  product: string;
  quantity: string;
}

const LeadCaptureForm = ({ onSubmit }: { onSubmit: (info: UserInfo) => void }) => {
  const [form, setForm] = useState<UserInfo>({
    name: "",
    phone: "",
    product: "",
    quantity: "",
  });
  const [errors, setErrors] = useState<Partial<UserInfo>>({});

  const validate = (): boolean => {
    const newErrors: Partial<UserInfo> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (!form.product) newErrors.product = "Please select a product";
    if (!form.quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (parseInt(form.quantity) < 1) {
      newErrors.quantity = "Quantity must be at least 1";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(form);
    }
  };

  const updateField = (field: keyof UserInfo, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-lg"
        >
          {/* Decorative top bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary/40 rounded-t-2xl" />

          <div className="bg-white rounded-b-2xl shadow-2xl border border-gray-100 p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4"
              >
                <Sparkles size={28} />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Design Visualizer
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                Fill in your details to start visualizing your custom designs on our products.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="lead-name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User size={14} className="text-primary" />
                  Your Name
                </Label>
                <Input
                  id="lead-name"
                  placeholder="e.g. Ravi Kumar"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={`h-11 ${errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label htmlFor="lead-phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone size={14} className="text-primary" />
                  Phone Number
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 select-none">+91</span>
                  <Input
                    id="lead-phone"
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                    className={`h-11 pl-12 ${errors.phone ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                    type="tel"
                    inputMode="numeric"
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Interested Product */}
              <div className="space-y-1.5">
                <Label htmlFor="lead-product" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Package size={14} className="text-primary" />
                  Interested Product
                </Label>
                <select
                  id="lead-product"
                  value={form.product}
                  onChange={(e) => updateField("product", e.target.value)}
                  className={`flex h-11 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    errors.product ? "border-red-400 focus-visible:ring-red-400" : "border-input"
                  } ${!form.product ? "text-muted-foreground" : "text-foreground"}`}
                >
                  <option value="" disabled>Select a product</option>
                  {PRODUCT_OPTIONS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                {errors.product && <p className="text-xs text-red-500 mt-1">{errors.product}</p>}
              </div>

              {/* Quantity */}
              <div className="space-y-1.5">
                <Label htmlFor="lead-quantity" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Hash size={14} className="text-primary" />
                  Quantity
                </Label>
                <Input
                  id="lead-quantity"
                  placeholder="e.g. 50"
                  value={form.quantity}
                  onChange={(e) => updateField("quantity", e.target.value.replace(/\D/g, ""))}
                  className={`h-11 ${errors.quantity ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                  type="text"
                  inputMode="numeric"
                />
                {errors.quantity && <p className="text-xs text-red-500 mt-1">{errors.quantity}</p>}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold mt-2 gap-2 shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform"
              >
                Open Design Tool
                <ArrowRight size={18} />
              </Button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-6">
              Your details help us serve you better. We'll never spam you.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

// ─── Design Visualizer (Main Tool) ──────────────────────────────────────────

const DesignVisualizer = ({ userInfo }: { userInfo: UserInfo }) => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS.tshirt);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [designImage, setDesignImage] = useState<string | null>(null);
  const [designScale, setDesignScale] = useState([50]);
  const [designPosition, setDesignPosition] = useState({ x: 0, y: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setDesignImage(url);
    }
  };

  const removeDesign = () => {
    setDesignImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl px-5 py-3 mb-6 flex items-center justify-between flex-wrap gap-2"
          >
            <p className="text-sm text-gray-700">
              Welcome, <span className="font-semibold text-gray-900">{userInfo.name}</span>! You're viewing designs for{" "}
              <span className="font-semibold text-primary">{userInfo.product}</span> — Qty: {userInfo.quantity}
            </p>
          </motion.div>

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Design Visualizer</h1>
            <p className="text-lg text-gray-600">See your artwork come to life on our premium apparel.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Visualizer Preview Area */}
            <div className="lg:col-span-7 relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex items-center justify-center min-h-[500px] lg:min-h-[600px] overflow-hidden">
              <div
                className="relative w-full max-w-[500px] aspect-[4/5] rounded-xl overflow-hidden shadow-sm transition-all duration-500 ease-in-out"
                style={{ backgroundColor: selectedColor.value }}
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  style={{
                    mixBlendMode: selectedColor.value !== "#ffffff" ? "multiply" : "normal",
                    opacity: selectedColor.value !== "#ffffff" ? 0.9 : 1,
                    filter: selectedColor.value !== "#ffffff" ? "grayscale(100%) contrast(1.2)" : "none",
                  }}
                  crossOrigin="anonymous"
                />

                {designImage && (
                  <div
                    className="absolute border border-dashed border-gray-400/50 group"
                    style={{
                      top: selectedProduct.designArea.top,
                      left: selectedProduct.designArea.left,
                      width: selectedProduct.designArea.width,
                      height: selectedProduct.designArea.height,
                    }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                      <img
                        src={designImage}
                        alt="Your design"
                        className="object-contain drop-shadow-md cursor-move pointer-events-none transition-transform duration-200"
                        style={{
                          width: `${designScale[0]}%`,
                          height: `${designScale[0]}%`,
                          transform: `translate(${designPosition.x}px, ${designPosition.y}px)`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Controls Panel */}
            <div className="lg:col-span-5 flex flex-col gap-8 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
              {/* Product Selection */}
              <div>
                <Label className="text-base font-semibold text-gray-900 mb-3 block">1. Select Product</Label>
                <Tabs
                  defaultValue="tshirt"
                  className="w-full"
                  onValueChange={(val) => setSelectedProduct(PRODUCTS[val as keyof typeof PRODUCTS])}
                >
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="tshirt">T-Shirt</TabsTrigger>
                    <TabsTrigger value="hoodie">Hoodie</TabsTrigger>
                    <TabsTrigger value="shirt">Shirt</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Color Selection */}
              <div>
                <Label className="text-base font-semibold text-gray-900 mb-3 block">2. Choose Color</Label>
                <div className="flex flex-wrap gap-3">
                  {COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 shadow-sm transition-transform hover:scale-110 ${
                        selectedColor.value === color.value
                          ? "border-primary ring-2 ring-primary/20 scale-110"
                          : "border-gray-200"
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Upload Design */}
              <div>
                <Label className="text-base font-semibold text-gray-900 mb-3 block">3. Upload Your Design</Label>
                {!designImage ? (
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:bg-gray-50 transition-colors bg-white flex flex-col items-center justify-center gap-4 group cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="bg-primary/10 text-primary p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Upload size={24} />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">Click to upload your artwork</p>
                      <p className="text-xs text-gray-500 mt-1">
                        PNG, JPG or SVG (Max. 5MB). Use transparent background for best results.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded border bg-white flex items-center justify-center p-1">
                          <img src={designImage} alt="Thumbnail" className="max-w-full max-h-full object-contain" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Design uploaded</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={removeDesign}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>Scale Image</span>
                          <span>{designScale[0]}%</span>
                        </div>
                        <Slider
                          value={designScale}
                          onValueChange={setDesignScale}
                          min={10}
                          max={150}
                          step={1}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  id="design-upload"
                  ref={fileInputRef}
                  accept="image/png, image/jpeg, image/svg+xml"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex gap-4 mt-auto">
                <Button className="w-full py-6 text-base font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform">
                  <Download size={18} />
                  Download Mockup
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// ─── Main Page Component ─────────────────────────────────────────────────────

const MockupGenerator = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  return (
    <AnimatePresence mode="wait">
      {!userInfo ? (
        <motion.div key="form" exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
          <LeadCaptureForm onSubmit={setUserInfo} />
        </motion.div>
      ) : (
        <motion.div
          key="tool"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <DesignVisualizer userInfo={userInfo} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MockupGenerator;
