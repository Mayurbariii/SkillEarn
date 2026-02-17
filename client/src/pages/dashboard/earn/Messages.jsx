import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";
import DashboardLayout from "../DashboardLayout";

const Messages = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const [selectedChat, setSelectedChat] = useState(null);
  const [input, setInput] = useState("");

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

  const requests = [
    {
      id: 3,
      user: "Rahul Mehta",
      skill: "Landing Page Design",
      message: "I would like to hire you for my startup.",
      time: "5h",
    },
  ];

  const tabs = [
    { id: "messages", label: "Messages" },
    { id: "requests", label: "Requests" },
  ];

  return (
    <DashboardLayout
      mode="earn"
      title={!selectedChat ? "Messages" : ""}
      subtitle={
        !selectedChat
          ? "Chat with people who requested your skills."
          : ""
      }
      hideMobileNav={!!selectedChat}
    >
      <div className="space-y-6 pb-6">

        {/* Tabs */}
        {!selectedChat && (
          <div className="overflow-x-auto">
            <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative px-5 py-2 text-sm font-medium rounded-full whitespace-nowrap"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="tab-pill"
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 22,
                        }}
                        className="absolute inset-0 bg-slate-300 dark:bg-slate-700 rounded-full"
                      />
                    )}

                    <span
                      className={`relative ${
                        isActive
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {!selectedChat ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden"
            >
              {/* ================= MESSAGES ================= */}
              {activeTab === "messages" &&
                conversations.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className="w-full px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition flex gap-4 items-start text-left"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-semibold shrink-0">
                      {chat.user.charAt(0)}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center">
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
                    </div>
                  </button>
                ))}

              {/* ================= REQUESTS ================= */}
              {activeTab === "requests" &&
                requests.map((req) => (
                  <div
                    key={req.id}
                    className="px-5 py-4 border-t border-slate-200 dark:border-slate-800 space-y-3"
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-semibold shrink-0">
                        {req.user.charAt(0)}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                            {req.user}
                          </p>
                          <span className="text-xs text-slate-400">
                            {req.time}
                          </span>
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {req.skill}
                        </p>

                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {req.message}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 pl-14">
                      <button className="px-4 py-1.5 text-xs rounded-lg bg-[#5A7ACD] text-white active:scale-95 transition">
                        Accept
                      </button>
                      <button className="px-4 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 active:scale-95 transition">
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white dark:bg-slate-900 flex flex-col z-40"
            >
              {/* Header */}
              <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <button onClick={() => setSelectedChat(null)}>
                  <ArrowLeft size={20} />
                </button>

                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-semibold">
                  {selectedChat.user.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {selectedChat.user}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {selectedChat.skill}
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 md:p-6 space-y-3 overflow-y-auto bg-slate-50 dark:bg-slate-800/40">
                <div className="flex">
                  <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm text-sm max-w-xs">
                    Hi 👋
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#5A7ACD] text-white px-4 py-2 rounded-2xl rounded-br-sm shadow-sm text-sm max-w-xs">
                    Hello! How can I help you?
                  </div>
                </div>
              </div>

              {/* Sticky Input */}
              <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message…"
                  className="flex-1 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm bg-slate-100 dark:bg-slate-800"
                />
                <button className="bg-[#5A7ACD] text-white p-3 rounded-xl active:scale-95 transition">
                  <Send size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
};

export default Messages;