import { useNavigate } from "react-router-dom";
import { Bell, Plus } from "lucide-react";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import DashboardLayout from "../DashboardLayout";
import SkillCard from "./components/SkillCard";

const Skills = () => {
  const navigate = useNavigate();
  const unreadCount = 2;

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const stats = [
    { label: "Total Skills", value: 12, color: "text-slate-900 dark:text-white" },
    { label: "Active", value: 8, color: "text-green-500" },
    { label: "Paused", value: 4, color: "text-amber-500" },
  ];

  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <DashboardLayout
      mode="earn"
      title="My Skills"
      subtitle="Manage the skills you offer and track their activity."
    >
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="flex items-center justify-between mb-6 md:hidden">
        <button
          onClick={() => navigate("/dashboard/earn/post-skill")}
          className="p-2 rounded-xl bg-[#5A7ACD] text-white shadow-sm active:scale-95 transition"
        >
          <Plus size={18} />
        </button>

        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          My Skills
        </h2>

        <button
          onClick={() => navigate("/dashboard/earn/notifications")}
          className="relative active:scale-95 transition"
        >
          <Bell size={22} className="text-slate-700 dark:text-slate-200" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#5A7ACD] rounded-full" />
          )}
        </button>
      </div>

      

      {/* ================= DESKTOP HEADER WITH CTA ================= */}
      <div className="hidden md:flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Skills you offer
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Post, edit, or pause skills anytime.
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard/earn/post-skill")}
          className="
            inline-flex items-center gap-2
            bg-[#5A7ACD] text-white
            px-5 py-2.5 rounded-xl
            text-sm font-medium
            hover:opacity-90
            active:scale-95
            transition
          "
        >
          <Plus size={16} />
          Post a Skill
        </button>
      </div>

      {/* ================= MOBILE ANALYTICS ================= */}
      <div className="relative md:hidden mb-10">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-4
            overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth
            pb-4
            no-scrollbar
          "
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              onClick={() => console.log(`Filter by ${stat.label}`)}
              className="
                snap-center
                min-w-[90%]
                bg-white dark:bg-slate-900
                rounded-2xl
                p-6
                border border-slate-200 dark:border-slate-800
                shadow-sm
                cursor-pointer
                transition
                active:scale-[0.98]
              "
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>

              <p className={`text-4xl font-semibold mt-4 ${stat.color}`}>
                <CountUp end={stat.value} duration={1.2} separator="," />
              </p>
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-slate-100 dark:from-slate-900 pointer-events-none" />

        <div className="flex justify-center gap-2 mt-4">
          {stats.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-[#5A7ACD]"
                  : "w-2 bg-slate-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP ANALYTICS ================= */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
            <p className={`text-2xl font-semibold mt-1 ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* ================= SKILL CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <SkillCard
          id="1"
          title="Web Design for Startups"
          category="Design"
          status="active"
          requests={3}
          lastActive="2 days ago"
        />

        <SkillCard
          id="2"
          title="Basic JavaScript Tutoring"
          category="Programming"
          status="paused"
          requests={0}
          lastActive="1 week ago"
        />
      </div>
    </DashboardLayout>
  );
};

export default Skills;