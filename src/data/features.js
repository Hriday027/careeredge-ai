// ─────────────────────────────────────────────────────────────────────────────
// FEATURES DATA
// Each object configures one AI tool card + chat session.
// Replace voiceflowUrl with your actual Voiceflow project API key per tool.
// ─────────────────────────────────────────────────────────────────────────────

export const FEATURES = [
  {
    id: "mock-interview",
    icon: "🎯",
    title: "Mock Interview",
    subtitle: "Practice with real-time AI feedback",
    description:
      "Enter a company name and get a structured interview simulation with scoring and detailed feedback after each answer.",
    tags: ["Score-based", "Company-specific", "Feedback"],
    gradient: "linear-gradient(135deg, #1a1a4e 0%, #2d2d8f 50%, #4a3fa8 100%)",
    accent: "#7c6ef5",
    lightAccent: "#c4bbff",
    voiceflowUrl: "YOUR_MOCK_INTERVIEW_VOICEFLOW_URL",
    placeholder: "e.g. I want to practice for Google SWE interview...",
    badge: "Most Popular",
  },
  {
    id: "resume-review",
    icon: "📄",
    title: "Resume Review",
    subtitle: "Line-by-line expert analysis",
    description:
      "Paste your resume and get detailed feedback on every section, ATS optimization tips, and missing elements.",
    tags: ["ATS Score", "Line-by-line", "Optimization"],
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a6b50 50%, #2a9d7a 100%)",
    accent: "#2dd4a0",
    lightAccent: "#a8f0da",
    voiceflowUrl: "YOUR_RESUME_REVIEW_VOICEFLOW_URL",
    placeholder: "Paste your resume here or describe what you'd like reviewed...",
    badge: null,
  },
  {
    id: "ats-scoring",
    icon: "⚡",
    title: "Resume ATS Scoring",
    subtitle: "Beat the applicant tracking system",
    description:
      "Get your ATS compatibility score, keyword analysis, and actionable improvements to pass automated screening.",
    tags: ["ATS Score", "Keywords", "Format Check"],
    gradient: "linear-gradient(135deg, #2d1a00 0%, #6b3a00 50%, #c26200 100%)",
    accent: "#f59e0b",
    lightAccent: "#fde68a",
    voiceflowUrl: "YOUR_ATS_SCORING_VOICEFLOW_URL",
    placeholder: "Paste your resume for ATS scoring...",
    badge: "New",
  },
  {
    id: "career-path",
    icon: "🗺️",
    title: "Career Path Advisor",
    subtitle: "Your personalized 12-month roadmap",
    description:
      "Share your degree, year, and interests to get a detailed career roadmap with free learning resources and milestones.",
    tags: ["12-Month Plan", "Free Resources", "Milestones"],
    gradient: "linear-gradient(135deg, #1a0d2e 0%, #3d1a6b 50%, #6b2fa0 100%)",
    accent: "#c084fc",
    lightAccent: "#e9d5ff",
    voiceflowUrl: "YOUR_CAREER_PATH_VOICEFLOW_URL",
    placeholder: "Tell me about your degree, year, and career interests...",
    badge: null,
  },
  {
    id: "english-coach",
    icon: "💬",
    title: "English Communication Coach",
    subtitle: "Fluent professional communication",
    description:
      "Practice sentence correction, email writing, HR small talk, and get a new communication drill every day.",
    tags: ["Daily Drills", "Email Writing", "HR Talk"],
    gradient: "linear-gradient(135deg, #001a2e 0%, #003d6b 50%, #0066b2 100%)",
    accent: "#38bdf8",
    lightAccent: "#bae6fd",
    voiceflowUrl: "YOUR_ENGLISH_COACH_VOICEFLOW_URL",
    placeholder: "Start with a sentence to correct or ask for today's exercise...",
    badge: null,
  },
  {
    id: "company-prep",
    icon: "🏢",
    title: "Company-Specific Prep",
    subtitle: "Targeted preparation for your dream company",
    description:
      "Enter a company name to get top 10 HR questions, technical round guidance, and last-minute interview tips.",
    tags: ["Top 10 HR Qs", "Technical Guidance", "Last-minute Tips"],
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #5c1a1a 50%, #9b2c2c 100%)",
    accent: "#f87171",
    lightAccent: "#fecaca",
    voiceflowUrl: "YOUR_COMPANY_PREP_VOICEFLOW_URL",
    placeholder: "Which company are you preparing for?",
    badge: null,
  },
];

// Filter map used by Dashboard filter tabs
export const FILTER_MAP = {
  All: FEATURES,
  Interview: FEATURES.filter((f) => ["mock-interview", "company-prep"].includes(f.id)),
  Resume: FEATURES.filter((f) => ["resume-review", "ats-scoring"].includes(f.id)),
  Career: FEATURES.filter((f) => ["career-path"].includes(f.id)),
  Communication: FEATURES.filter((f) => ["english-coach"].includes(f.id)),
};
