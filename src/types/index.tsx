export interface Resource {
    id: number;
    title: string;
    description: string;
    url: string;
    category: string;
    featured?: boolean;
    tags?: string[];
  }
  
export interface Category {
    id: string;
    name: string;
    icon: React.ReactNode;
  }