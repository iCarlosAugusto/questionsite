// export enum QuestionType {
//   multipleReplies,
//   uniqueReply,
// }

import { AlternativeEntity } from './AlternativeEntity';

export interface QuestionEntity {
  id: string;
  text: string;
  alternatives: AlternativeEntity[];
  lastUserReply?: AlternativeEntity;
  //questionType: QuestionType;
}
