import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, MessageCircle } from "lucide-react";
import DashboardLayout from "../DashboardLayout";

const SkillDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const skill = {
    title: "UI/UX Design for SaaS Products",
    short:
      "Modern, conversion-focused SaaS dashboard and web app design.",
    rating: 4.8,
    reviews: 23,
    price: 4999,
    category: "Design",
    seller: {
      name: "Rahul Mehta",
      bio: "UI/UX Designer • 5+ years experience",
      response: "Responds within 2 hours",
    },
  };

  return (
    <DashboardLayout mode="earn" title="" subtitle="">
      <div className="pb-28 md:pb-10 space-y-8">

        {/* ===== BACK BUTTON ===== */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* ===== HERO ===== */}
        <div className="space-y-4">

          <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {skill.category}
          </span>

          <h1 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-white">
            {skill.title}
          </h1>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {skill.short}
          </p>

          <div className="flex items-center gap-2 text-sm">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="font-medium">{skill.rating}</span>
            <span className="text-slate-400">
              ({skill.reviews} reviews)
            </span>
          </div>

          <div className="text-lg font-semibold text-slate-800 dark:text-white">
            Starting at ₹{skill.price}
          </div>

          {/* Primary CTA */}
          <button className="w-full md:w-auto bg-[#5A7ACD] text-white px-6 py-2.5 rounded-xl text-sm font-medium active:scale-[0.98] transition">
            Send Request
          </button>

        </div>

        {/* ===== SELLER CARD ===== */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-semibold">
              {skill.seller.name.charAt(0)}
            </div>

            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">
                {skill.seller.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {skill.seller.response}
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 text-sm text-[#5A7ACD] font-medium">
            <MessageCircle size={16} />
            Message
          </button>
        </div>

        {/* ===== TABS ===== */}
        <div className="flex gap-4 border-b border-slate-200 dark:border-slate-800 pb-2 text-sm">
          {["overview", "packages", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize ${
                activeTab === tab
                  ? "text-[#5A7ACD] font-medium"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ===== TAB CONTENT ===== */}
        {activeTab === "overview" && (
          <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            I create structured, scalable UI systems and high-converting SaaS
            interfaces with clear UX flows and design systems.
          </div>
        )}

        {activeTab === "packages" && (
          <div className="space-y-4">
            {["Basic", "Standard", "Premium"].map((tier, index) => (
              <div
                key={tier}
                className="border border-slate-200 dark:border-slate-800 rounded-xl p-4"
              >
                <div className="flex justify-between">
                  <p className="font-medium">{tier}</p>
                  <p className="font-semibold">
                    ₹{skill.price + index * 2000}
                  </p>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Delivery in {3 + index * 2} days
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              ⭐⭐⭐⭐⭐ Amazing work and communication.
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              ⭐⭐⭐⭐⭐ Highly recommended for SaaS UI projects.
            </div>
          </div>
        )}

      </div>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4">
        <button className="w-full bg-[#5A7ACD] text-white py-3 rounded-xl font-medium active:scale-[0.98] transition">
          Send Request
        </button>
      </div>
    </DashboardLayout>
  );
};

export default SkillDetail;