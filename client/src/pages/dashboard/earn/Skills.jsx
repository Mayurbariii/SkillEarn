import { useNavigate } from "react-router-dom";
import DashboardLayout from "../DashboardLayout";
import SkillCard from "./components/SkillCard";

/**
 * Skills Page (Earn Mode)
 *
 * Layout-only implementation.
 * Skill cards and empty state will be added next.
 */
const Skills = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout
      mode="earn"
      title="My Skills"
      subtitle="Manage the skills you offer and track their activity."
    >
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h4 className="text-slate-800 dark:text-slate-100" >
            Skills you offer
          </h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Post, edit, or pause skills anytime.
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard/earn/post-skill")}
          className="
            inline-flex items-center justify-center
            bg-blue-600 text-white
            px-5 py-2.5 rounded-xl
            text-sm font-medium
            hover:bg-blue-700 transition
            w-full sm:w-auto
          "
        >
          + Post a Skill
        </button>
      </div>

      {/* Skills Summary Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-sm text-slate-500 dark:text-slate-400">Total Skills</p>
          <p className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mt-1">0</p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-sm text-slate-500 dark:text-slate-400">Active</p>
          <p className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mt-1">0</p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200">
          <p className="text-sm text-slate-500 dark:text-slate-400">Paused</p>
          <p className="text-2xl font-semibold text-slate-500 dark:text-slate-400 mt-1">0</p>
        </div>
      </div>

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

      {/* Empty State Placeholder */}
      <div className="mt-16 text-center text-slate-600">
        <p className="text-base font-medium text-slate-500 dark:text-slate-400">
          You haven’t added any skills yet
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          Share what you know and start getting opportunities.
        </p>

        <button
          onClick={() => navigate("/dashboard/earn/post-skill")}
          className="
            mt-6 inline-flex items-center justify-center
            bg-blue-600 text-white
            px-6 py-3 rounded-xl
            text-sm font-medium
            hover:bg-blue-700 transition
          "
        >
          Post your first skill
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Skills;