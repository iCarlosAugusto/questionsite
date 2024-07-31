import { Course } from './CourseEntity';

export interface SubjectCategoryEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description?: string;
  courses: Course[];
}
