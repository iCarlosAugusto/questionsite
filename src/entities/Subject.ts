import { Discipline } from './Discipline';

export interface Subject {
  id: string;
  name: string;
  disciplines: Discipline;
}
