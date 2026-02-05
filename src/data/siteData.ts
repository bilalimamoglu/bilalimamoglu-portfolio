export const siteData = {
  name: "Bilal Imamoglu",
  title: "MLOps & Platform Engineer",
  location: "Berlin",
  email: "imamogluubilal@gmail.com",
  social: {
    github: "https://github.com/bilalimamoglu",
    linkedin: "https://www.linkedin.com/in/bilalimamoglu/",
  },
  hero: {
    headline: "Building ML platforms that turn ideas into production-grade products",
    description:
      "I'm an MLOps & Platform Engineer who builds and operates cloud-based ML systems—from data ingestion and feature pipelines to automated training, deployment, and monitoring. I focus on making models reliable, scalable, and ready for real-world decision-making.",
    tags: [
      "MLOps",
      "Platform Engineering",
      "Cloud Infrastructure",
      "AI/ML Systems",
      "DevOps",
    ],
  },
  expertise: [
    {
      title: "End-to-End ML Platforms",
      description:
        "Building complete ML infrastructure: data ingestion, feature stores, automated training pipelines, model registries, and production deployment—systems that process hundreds of millions of rows daily.",
      icon: "platform",
    },
    {
      title: "AI/ML Engineering",
      description:
        "From AutoML pipelines and time-series forecasting to LLM integrations and knowledge graphs. Building intelligent systems that solve real problems—with a focus on operational reliability, not just model accuracy.",
      icon: "ai",
    },
    {
      title: "CI/CD & Automation",
      description:
        'Designing GitOps workflows, optimizing build pipelines, and creating "golden paths" that let teams ship ML faster and more safely—without sacrificing reliability or auditability.',
      icon: "cicd",
    },
    {
      title: "Database Infrastructure",
      description:
        "Operating large-scale database systems: migrations, schema management, backup strategies, and disaster recovery. Treating databases as high-risk assets where reliability directly impacts business outcomes.",
      icon: "database",
    },
  ],
  philosophy: {
    intro:
      "I approach ML systems with questions that bridge technical and business domains: Who uses this platform? What operational risk does it reduce? How does it scale when teams change?",
    paragraphs: [
      "My background in Management Information Systems gave me fluency in business models and organizational decision-making. Rather than pursuing a commercial path, I invested in technical depth—with the goal of understanding why systems are built, not just how.",
      "This dual perspective shapes everything I build. I naturally think about second-order consequences: what happens when ownership changes, when priorities shift, when the model that worked yesterday starts drifting.",
    ],
    principles: [
      {
        title: "Observability First",
        description:
          "Debuggability is a design constraint, not an afterthought. If you can't understand why a model failed in production, you haven't finished building it.",
      },
      {
        title: "Design for Failure",
        description:
          "Happy paths are easy. Resilience comes from deeply understanding failure modes and building systems that degrade gracefully.",
      },
      {
        title: "Question Assumptions",
        description:
          "Continuously challenge data quality, model behavior, and operational trust. The best MLOps is skeptical MLOps.",
      },
      {
        title: "Sensible Defaults",
        description:
          "Opinionated platforms with clear escape hatches beat configuration sprawl. Make the right thing easy and the wrong thing hard.",
      },
    ],
  },
  about: {
    paragraphs: [
      "I'm a business-aware engineer who deliberately chose a deep technical path in MLOps and platform engineering.",
      "I studied Management & Technology at TU Munich, with a thesis examining temporal effects of gender bias in transformer models—work that sharpened my ability to reason about second-order consequences of technical decisions.",
      "Before that, I studied Management Information Systems at Boğaziçi University (Turkey's #1), which gave me a foundation in how organizations make decisions and create value.",
      "Outside of engineering, I'm drawn to photography—finding parallels between capturing decisive moments and designing systems that behave predictably under pressure. Currently based in Berlin.",
    ],
    focus: [
      "AI Platform Engineering",
      "Production ML Systems",
      "Data Science",
      "DevOps",
      "Database Infrastructure",
    ],
    interests: ["Systems Thinking", "AI Ethics & Bias", "Photography"],
  },
  writing: [
    {
      date: "2024.12",
      title: "The Hidden Cost of Database Migrations at Scale",
      slug: "database-migrations-at-scale",
    },
    {
      date: "2024.10",
      title: "Why Feature Stores Matter More Than Models",
      slug: "feature-stores-matter",
    },
    {
      date: "2024.08",
      title: "Bias in ML Systems: An Operational Perspective",
      slug: "bias-in-ml-systems",
    },
    {
      date: "2024.05",
      title: "Documentation as a Design Artifact",
      slug: "documentation-as-design",
    },
    {
      date: "2024.02",
      title: "GitOps for ML: Patterns and Anti-Patterns",
      slug: "gitops-for-ml",
    },
  ],
  quote:
    "I help teams ship ML faster and more safely—while continuously questioning assumptions to improve model quality and operational trust.",
  consulting: {
    note: "I'm selectively available for ML infrastructure reviews, platform strategy consulting, and technical advisory engagements. If you're building production ML systems and need an operational perspective, let's talk.",
  },
};

export type SiteData = typeof siteData;
