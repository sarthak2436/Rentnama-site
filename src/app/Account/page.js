import {
  ShoppingCart,
  MapPin,
  Heart,
  CreditCard,
  Ruler,
  Package,
} from "lucide-react";

export default function AccountPage() {
  const accountOptions = [
    {
      title: "Your Orders",
      subtitle: "View and track your orders",
      icon: <Package className="w-8 h-8" />,
    },
    {
      title: "Cart",
      subtitle: "View your cart items",
      icon: <ShoppingCart className="w-8 h-8" />,
    },
    {
      title: "Wishlist",
      subtitle: "Your saved items",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: "Your Address",
      subtitle: "Manage your saved address",
      icon: <MapPin className="w-8 h-8" />,
    },
    {
      title: "Payment Options",
      subtitle: "Manage cards and UPI",
      icon: <CreditCard className="w-8 h-8" />,
    },
    {
      title: "Your Measurement",
      subtitle: "Save your sizes",
      icon: <Ruler className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Account</h1>
      </header>

      {/* Account Grid */}
      <main className="flex-1 p-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {accountOptions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border rounded-2xl p-6 hover:shadow-lg transition cursor-pointer text-center"
            >
              <div className="text-gray-800 mb-4">{item.icon}</div>
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="hover:text-gray-700">
            Return Policy
          </a>
          <a href="#" className="hover:text-gray-700">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-gray-700">
            Privacy Policy
          </a>
        </div>
        <p>© 2025 YourBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}
