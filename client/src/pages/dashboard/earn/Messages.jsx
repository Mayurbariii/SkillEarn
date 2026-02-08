import DashboardLayout from "../DashboardLayout";

/**
 * Messages Page (Earn Mode)
 *
 * UI-only chat layout.
 * Backend, realtime, and routing will be added later.
 */
const Messages = () => {
  // TEMP demo data
  const conversations = [
    {
      id: 1,
      user: "Amit Sharma",
      skill: "Web Design for Startups",
      lastMessage: "Can we discuss the layout today?",
      time: "2h",
    },
    {
      id: 2,
      user: "Neha Patel",
      skill: "JavaScript Tutoring",
      lastMessage: "Thanks, that explanation helped!",
      time: "1d",
    },
  ];

  return (
    <DashboardLayout
      mode="earn"
      title="Messages"
      subtitle="Chat with people who requested your skills."
    >
      <div
        className="
          bg-white dark:bg-slate-900
          border border-slate-200 dark:border-slate-800
          rounded-2xl overflow-hidden
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[500px]">
          
          {/* LEFT: Conversations List */}
          <div className="border-r border-slate-200 dark:border-slate-800">
            <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Conversations
              </h3>
            </div>

            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {conversations.map((chat) => (
                <button
                  key={chat.id}
                  className="
                    w-full text-left px-5 py-4
                    hover:bg-slate-50 dark:hover:bg-slate-800
                    transition
                    flex flex-col gap-1
                  "
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                      {chat.user}
                    </p>
                    <span className="text-xs text-slate-400">
                      {chat.time}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {chat.skill}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                    {chat.lastMessage}
                  </p>
                </button>
              ))}
            </div>

            {conversations.length === 0 && (
              <div className="p-6 text-center text-slate-500 dark:text-slate-400 text-sm">
                No conversations yet
              </div>
            )}
          </div>

          {/* RIGHT: Chat Window */}
          <div className="hidden md:flex flex-col">
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                Select a conversation
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Messages will appear here
              </p>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 flex items-center justify-center text-slate-400 text-sm">
              No conversation selected
            </div>

            {/* Input Area */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800">
              <input
                type="text"
                disabled
                placeholder="Type a message…"
                className="
                  w-full rounded-xl
                  border border-slate-300 dark:border-slate-700
                  px-4 py-3 text-sm
                  bg-slate-100 dark:bg-slate-800
                  text-slate-800 dark:text-slate-100
                  cursor-not-allowed
                "
              />
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;