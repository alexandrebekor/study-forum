import { expect, it } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

it('should be register a answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Answer 01'
  })

  expect(answer.content).toEqual('Answer 01')
})