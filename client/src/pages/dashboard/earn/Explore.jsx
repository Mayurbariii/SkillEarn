import { useState } from "react";
import { Search, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../DashboardLayout";

const Explore = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const skills = [
    {
      id: 1,
      title: "UI/UX Design for SaaS Products",
      description:
        "Modern SaaS dashboards with clean UX and conversion-focused layouts.",
      user: "Rahul Mehta",
      rating: 4.8,
      reviews: 23,
      price: 4999,
      category: "Design",
    },
    {
      id: 2,
      title: "React JS Mentorship",
      description:
        "Live mentorship sessions for beginner to intermediate developers.",
      user: "Neha Patel",
      rating: 4.6,
      reviews: 18,
      price: 2999,
      category: "Programming",
    },
  ];

  const filtered = skills.filter(
    (skill) =>
      (category === "All" || skill.category === category) &&
      skill.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout mode="earn" title="" subtitle="">
      <div className="space-y-6 pb-10">

        {/* ===== TOP HEADER ===== */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-slate-800 dark:text-white">
            SkillEarn
          </h1>
        </div>

        {/* ===== SEARCH ===== */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full pl-10 pr-4 py-2.5
              rounded-xl
              border border-slate-300 dark:border-slate-700
              bg-white dark:bg-slate-900
              text-sm
              focus:outline-none focus:ring-2 focus:ring-[#5A7ACD]
            "
          />
        </div>

        {/* ===== FILTERS ===== */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {["All", "Design", "Programming"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`
                px-3 py-1.5 text-xs rounded-full whitespace-nowrap transition
                ${
                  category === cat
                    ? "bg-[#5A7ACD] text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== SKILL CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

          {filtered.map((skill) => (
            <div
              key={skill.id}
              onClick={() =>
                navigate(`/dashboard/earn/explore/${skill.id}`)
              }
              className="
                group
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                rounded-xl
                p-4
                cursor-pointer
                transition-all duration-200
                hover:shadow-md
                hover:-translate-y-0.5
              "
            >
              {/* Category */}
              <span className="text-[10px] px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {skill.category}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-sm font-semibold text-slate-800 dark:text-white leading-snug">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {skill.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-3 text-xs">
                <Star size={12} className="text-amber-500 fill-amber-500" />
                <span className="font-medium text-slate-800 dark:text-white">
                  {skill.rating}
                </span>
                <span className="text-slate-400">
                  ({skill.reviews})
                </span>
              </div>

              {/* Seller + Price */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-semibold">
                    {skill.user.charAt(0)}
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {skill.user}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-800 dark:text-white">
                  ₹{skill.price}
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </DashboardLayout>
  );
};

export default Explore;