🔐 Frontend Auth & Intent Flow

Branch: feature/frontend-auth

📌 Overview

This branch implements the frontend authentication and intent-based entry flow for SkillEarn.

Users can choose between:

Earn from Skills – for users ready to offer skills and earn

Discover Skills – for users unsure of their skills (quiz-based discovery later)

🧭 Flow Implemented
Intent → Earn / Discover → Login / Register → Dashboard
🔐 Authentication (UI Only)

Login & Register screens

Email + Password UI

Google Sign-In UI with loading states

Basic frontend validation & password visibility toggle

Backend logic is intentionally excluded.

🛠 Tech Stack

React

React Router

Tailwind CSS

Mobile-first responsive UI

🧩 Integration Notes

User intent (earn / discover) is captured in the UI

Backend and database hooks are marked with TODO comments

Detailed handoff notes shared separately with backend & database teams

🚧 Out of Scope

Backend authentication

Dashboard logic

Skill posting

Discover quiz implementation

✅ Status

Frontend flow is complete, stable, and ready for backend integration.
