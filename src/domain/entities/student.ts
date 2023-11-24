import { randomUUID } from "node:crypto"
import { Entity } from "../../core/entities/entity"

type StudentProps = {
  name: string
}

export class Student extends Entity<StudentProps> {}