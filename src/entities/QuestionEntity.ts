// export enum QuestionType {
//   multipleReplies,
//   uniqueReply,
// }

import { AlternativeEntity } from './AlternativeEntity';
import { Discipline } from './Discipline';
import { Subject } from './Subject';

export interface QuestionEntity {
  id: string;
  text: string;
  alternatives: AlternativeEntity[];
  lastUserReply?: AlternativeEntity;
  subject: Subject;
  discipline: Discipline;
  //questionType: QuestionType;
}
