import { expect, it } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswerRepository } from "../repositories/anwswer-repository";
import { Answer } from "../entities/answer";
import { UniqueID } from "../../core/entities/unique-id";

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
      return answer
  },
}

it('should be register a answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    instructorId: new UniqueID(),
    questionId: new UniqueID(),
    content: 'Answer 01'
  })

  expect(answer.content).toEqual('Answer 01')
})