import { Document, Schema, model } from "mongoose";

interface movieDocument {
  name: string
  category: string
  description: string
  poster: string
  backdrop?: string
}

const MovieSchema = new Schema<movieDocument>(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      required: true
    },
    backdrop: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const Movie = model<movieDocument>('Movie' , MovieSchema)

export { Movie }