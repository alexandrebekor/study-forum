import { Answer } from '../entities/answer'

export type AnswerRepository = {
  create(answer: Answer): Promise<any>
}