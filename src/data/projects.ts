export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  problem: string
  solution: string
  impact: string
  tech: string[]
  responsibilities: string[]
  architecture: string[]
  lessons: string[]
}

export const projects: Project[] = [
  {
    slug: "multi-source-kpi-automation",
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
    responsibilities: [
      "Analyzed multiple metric sources and identified common fields for standardization.",
      "Created transformation logic to clean, normalize, and prepare performance data.",
      "Supported the consolidation of agent metrics into a unified reporting destination.",
      "Improved validation logic to reduce inconsistencies before reporting.",
    ],
    architecture: [
      "Multiple client data sources",
      "Python transformation layer",
      "SQL-based validation and preparation",
      "Unified data destination",
      "Business intelligence and KPI reporting layer",
    ],
    lessons: [
      "Improved my understanding of multi-source data pipelines.",
      "Strengthened my ability to design reusable transformation logic.",
      "Learned the importance of validation before data reaches dashboards.",
      "Gained more experience connecting technical workflows with business reporting needs.",
    ],
  },
  {
    slug: "ai-appointment-scheduling-api",
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
    responsibilities: [
      "Tested backend appointment endpoints using Postman.",
      "Worked with serverless API deployment patterns using AWS Lambda.",
      "Supported appointment actions such as availability checks, booking, rescheduling, and cancellation.",
      "Helped connect AI conversation flows with external business APIs.",
    ],
    architecture: [
      "AI conversation layer",
      "API Gateway endpoint",
      "AWS Lambda backend service",
      "External appointment service integration",
      "Authentication and validation layer",
      "Database and cache support",
    ],
    lessons: [
      "Strengthened my understanding of serverless backend workflows.",
      "Improved my ability to test and validate APIs with real request scenarios.",
      "Learned how AI systems depend on reliable backend integrations.",
      "Gained more experience with cloud-based automation and API design.",
    ],
  },
  {
    slug: "etl-data-validation-automation",
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
    responsibilities: [
      "Created scripts to clean and transform recurring operational data.",
      "Used SQL logic to validate records and identify inconsistencies.",
      "Reduced repetitive manual preparation before reporting.",
      "Prepared cleaner datasets for downstream analysis and dashboards.",
    ],
    architecture: [
      "Raw recurring dataset",
      "Python cleaning process",
      "SQL validation layer",
      "Prepared reporting dataset",
      "Dashboard or analysis destination",
    ],
    lessons: [
      "Improved my understanding of data quality workflows.",
      "Learned how small automation scripts can create strong business value.",
      "Strengthened my Python and SQL integration skills.",
      "Gained experience preparing data for reliable reporting processes.",
    ],
  },
]

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}