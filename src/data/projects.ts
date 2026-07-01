export type Project = {
  title: string
  category: string
  summary: string
  problem: string
  solution: string
  impact: string
  tech: string[]
}

export const projects: Project[] = [
  {
    title: "Multi-Source KPI Automation Platform",
    category: "Data Engineering / Automation",
    summary:
      "Automation process designed to collect, transform, validate, and consolidate performance metrics from multiple client accounts and data sources.",
    problem:
      "Operational teams needed a more reliable way to unify agent performance metrics coming from different systems, formats, and client accounts.",
    solution:
      "Built Python-based transformation workflows to extract information from multiple sources, clean and standardize the data, validate key fields, and consolidate the results into a unified destination for reporting.",
    impact:
      "Reduced manual consolidation work, improved reporting consistency, and created a stronger foundation for multi-client KPI analysis.",
    tech: [
      "Python",
      "SQL",
      "ETL",
      "Data Validation",
      "Automation",
      "Power BI Support",
    ],
  },
  {
    title: "AI Appointment Scheduling API",
    category: "AI Development / Backend",
    summary:
      "Serverless API workflow for appointment management, integrating external services, authentication, and AI-ready scheduling logic.",
    problem:
      "A scheduling workflow needed backend services capable of validating data, handling appointment operations, and supporting AI-driven conversation flows.",
    solution:
      "Implemented and tested API endpoints for appointment actions such as availability checks, booking logic, rescheduling, and cancellation using backend services and cloud deployment patterns.",
    impact:
      "Created a more reliable backend foundation for AI scheduling workflows and improved the connection between conversational systems and business APIs.",
    tech: [
      "Python",
      "FastAPI",
      "AWS Lambda",
      "API Gateway",
      "Postman",
      "REST APIs",
      "Redis",
      "PostgreSQL",
    ],
  },
  {
    title: "ETL Data Validation Automation",
    category: "Data Engineering",
    summary:
      "Automated data extraction and validation workflow created to improve the reliability of recurring operational datasets.",
    problem:
      "Recurring datasets required manual review, repeated transformations, and validation before they could be used for reporting.",
    solution:
      "Developed Python and SQL-based automation logic to extract data, clean fields, validate records, handle duplicates, and prepare the information for downstream reporting processes.",
    impact:
      "Improved data quality, reduced repetitive manual tasks, and made recurring reporting processes easier to maintain.",
    tech: [
      "Python",
      "Pandas",
      "SQL Server",
      "SQLAlchemy",
      "PyODBC",
      "Automation Scripts",
      "Data Cleaning",
    ],
  },
]