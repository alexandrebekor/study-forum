import { UniqueID } from "../../core/entities/unique-id"
import { Answer } from "../entities/answer"
import { AnswerRepository } from "../repositories/anwswer-repository"

type AnswerQuestionUseCaseRequest = {
  instructorId: UniqueID
  questionId: UniqueID
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswerRepository) {}

  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const createAnswer = new Answer({
      authorId: instructorId,
      content,
      questionId,
      createdAt: new Date()
    })

    const answer = await this.answerRepository.create(createAnswer)
    return answer
  }
}