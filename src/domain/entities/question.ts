import { randomUUID } from "node:crypto"
import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueID } from "../../core/entities/unique-id"
import dayjs from 'dayjs'

type QuestionProps = {
  title: string
  slug: Slug
  content: string
  authorId: UniqueID
  bestAnswerId: UniqueID
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  get title() {
    return this.props.title
  }

  get createdAt() {
    return this.props.createdAt
  }

  get isNew (): boolean {
    return dayjs().diff(this.createdAt, 'days') <= 7
  }
}