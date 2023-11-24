import { Entity } from "../../core/entities/entity"
import { UniqueID } from "../../core/entities/unique-id"

type AnswerProps = {
  authorId: UniqueID
  questionId: UniqueID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }
}