import { Schema, model, Document } from 'mongoose';

export interface IProject extends Document {
  projectName: string;
  title: string;
  description: string;
  technologies: string;
  imageUrl: string;
  projectUrl: string;
}

const projectSchema = new Schema(
  {
    projectName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: String, required: true },
    imageUrl: { type: String, required: true },
    projectUrl: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IProject>('Project', projectSchema);
