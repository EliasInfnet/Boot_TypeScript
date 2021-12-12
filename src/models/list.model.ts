import { Document, Schema, model, SchemaTypes } from "mongoose";

interface listDocument {
  user_id: string
  movie_id: string
}

const ListSchema = new Schema(
  {
    user_id: {
      type: SchemaTypes.ObjectId,
      required: true
    },
    movie_id: {
      type: SchemaTypes.ObjectId,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const List = model<listDocument>('List' , ListSchema)

export { List }