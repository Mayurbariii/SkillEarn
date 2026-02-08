import { useNavigate } from "react-router-dom";
import DashboardLayout from "../DashboardLayout";

/**
 * PostSkill Page
 *
 * UI-only implementation.
 * Backend integration will be added later.
 */
const PostSkill = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout
      mode="earn"
      title="Post a Skill"
      subtitle="Share what you know and start getting requests from others."
    >
      {/* Form Container */}
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
                focus:outline-none focus:ring-2 focus:ring-blue-500
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
                focus:outline-none focus:ring-2 focus:ring-blue-500
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
              placeholder="Briefly describe what you offer, how you help, and who this is for."
              className="
                w-full rounded-xl
                border border-slate-300 dark:border-slate-700
                px-4 py-3 text-sm resize-none
                bg-white dark:bg-slate-800
                text-slate-800 dark:text-slate-100
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            />
          </div>

          {/* Section: Availability */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
              Availability
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Let people know how active this skill is.
            </p>
          </div>

          {/* Status */}
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
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            >
              <option>Active (visible to others)</option>
              <option>Paused (save for later)</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              onClick={() => navigate("/dashboard?mode=earn")}
              className="
                px-6 py-3 rounded-xl text-sm font-medium
                border border-slate-300 dark:border-slate-700
                text-slate-700 dark:text-slate-300
                hover:bg-slate-100 dark:hover:bg-slate-800
                transition
              "
            >
              Cancel
            </button>

            <button
              className="
                px-6 py-3 rounded-xl text-sm font-medium
                bg-blue-600 text-white
                hover:bg-blue-700 transition
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