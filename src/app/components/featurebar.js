"use client";
import { Shirt, PiggyBank, ShieldCheck, Truck } from "lucide-react";

export default function FeatureBar() {
  const features = [
    { icon: <Shirt size={24} />, title: "In-store Trial" },
    { icon: <PiggyBank size={24} />, title: "Save Money" },
    { icon: <ShieldCheck size={24} />, title: "Quality Assured" },
    { icon: <Truck size={24} />, title: "Convenient Rentals" },
  ];

  return (
    <section className="bg-[#D27F6C] py-2">
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-6 text-white text-center px-4 rounded-lg">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center space-y-1">
            <div className="bg-white/20 p-2 rounded-full">{feature.icon}</div>
            <p className="text-xs sm:text-sm font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
