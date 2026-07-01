export type Certification = {
  name: string
  issuer: string
  year: string
  category: string
  file: string
}

export const certifications: Certification[] = [
  {
    name: "APACHE AIRFLOW FUNDAMENTALS",
    issuer: "Platzi",
    year: "2026",
    category: "Python / Automation",
    file: "/certifications/airflow-certification.pdf",
  },
  {
    name: "FUNDAMENTALS OF DATA ENGINEERING",
    issuer: "Platzi",
    year: "2026",
    category: "Data / Engineering",
    file: "/certifications/data-engineering-certification.pdf",
  },
  {
    name: "Master Data Quality Manager",
    issuer: "ECCMA",
    year: "2026",
    category: "Data / Engineering",
    file: "/certifications/MDQM_Elvys_Carrera.pdf",
  },
]