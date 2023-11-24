import { UniqueID } from "./unique-id"

export class Entity<Props> {
  private _id: UniqueID
  protected props: Props

  constructor(props: Props, id?: string) {
    this._id = new UniqueID(id)
    this.props = props
  }

  get id() {
    return this._id
  }
}