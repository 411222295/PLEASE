export interface JobRequirements {
  technical: string[];
  soft: string[];
  experience: string;
  education: string;
}

export interface JobSalary {
  min: number;
  max: number;
  currency: string;
}

export interface JobPosting {
  id: string;
  companyId: string;
  title: string;
  description: string;
  requirements: JobRequirements;
  salary: JobSalary;
  benefits: string[];
  location: string;
  type: string;
  postedDate: string;
  deadline?: string;
  status: 'active' | 'closed';
}

export interface JobApplication {
  id: string;
  jobId: string;
  userId: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedDate: string;
  reviewedDate?: string;
  notes?: string;
}

export interface JobMatch {
  jobId: string;
  matchScore: number;
  matchReasons: string[];
} 