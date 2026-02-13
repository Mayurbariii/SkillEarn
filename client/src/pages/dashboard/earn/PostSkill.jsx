import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import DashboardLayout from "../DashboardLayout";

const PostSkill = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout
      mode="earn"
      title="Post a Skill"
      subtitle="Share what you know and start getting requests from others."
    >
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="flex items-center gap-4 mb-6 md:hidden">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition active:scale-95"
        >
          <ArrowLeft size={20} />
        </button>

        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          Post Skill
        </h2>
      </div>

      {/* ================= FORM CONTAINER ================= */}
      <div className="max-w-3xl">
        <div
          className="
            bg-white dark:bg-slate-900
            border border-slate-200 dark:border-slate-800
            rounded-2xl
            p-6 sm:p-8
          "
        >
          {/* Section: Basic Info */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
              Skill details
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tell people clearly what you can help them with.
            </p>
          </div>

          {/* Skill Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Skill title
            </label>
            <input
              type="text"
              placeholder="e.g. Web design for small businesses"
              className="
                w-full rounded-xl
                border border-slate-300 dark:border-slate-700
                px-4 py-3 text-sm
                bg-white dark:bg-slate-800
                text-slate-800 dark:text-slate-100
                focus:outline-none focus:ring-2 focus:ring-[#5A7ACD]
              "
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Category
            </label>
            <select
              className="
                w-full rounded-xl
                border border-slate-300 dark:border-slate-700
                px-4 py-3 text-sm
                bg-white dark:bg-slate-800
                text-slate-800 dark:text-slate-100
                focus:outline-none focus:ring-2 focus:ring-[#5A7ACD]
              "
            >
              <option>Select a category</option>
              <option>Design</option>
              <option>Programming</option>
              <option>Marketing</option>
              <option>Writing</option>
              <option>Other</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Briefly describe what you offer."
              className="
                w-full rounded-xl
                border border-slate-300 dark:border-slate-700
                px-4 py-3 text-sm resize-none
                bg-white dark:bg-slate-800
                text-slate-800 dark:text-slate-100
                focus:outline-none focus:ring-2 focus:ring-[#5A7ACD]
              "
            />
          </div>

          {/* Availability */}
          <div className="mb-10">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Skill status
            </label>
            <select
              className="
                w-full rounded-xl
                border border-slate-300 dark:border-slate-700
                px-4 py-3 text-sm
                bg-white dark:bg-slate-800
                text-slate-800 dark:text-slate-100
                focus:outline-none focus:ring-2 focus:ring-[#5A7ACD]
              "
            >
              <option>Active (visible to others)</option>
              <option>Paused (save for later)</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              onClick={() => navigate(-1)}
              className="
                px-6 py-3 rounded-xl text-sm font-medium
                border border-slate-300 dark:border-slate-700
                text-slate-700 dark:text-slate-300
                hover:bg-slate-100 dark:hover:bg-slate-800
                active:scale-95 transition
              "
            >
              Cancel
            </button>

            <button
              className="
                px-6 py-3 rounded-xl text-sm font-medium
                bg-[#5A7ACD] text-white
                hover:opacity-90
                active:scale-95 transition
              "
            >
              Publish skill
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PostSkill;