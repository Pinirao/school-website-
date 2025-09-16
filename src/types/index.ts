export interface NavLink {
  label: string;
  path: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface AcademicProgram {
  title: string;
  description: string;
  faculty: string[];
}

export interface AdmissionRequirement {
  title: string;
  details: string;
}