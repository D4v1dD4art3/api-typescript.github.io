import { Request, Response } from 'express';
import Project from '../models/project';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    if (projects) {
      return res.status(202).json(projects);
    }
    return res.status(400).json({ msg: 'Please create a new project' });
  } catch (error) {
    console.log(error);
  }
};
export const getProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      return res.status(202).json(project);
    }
    return res.status(400).json({ msg: 'this project does not exist' });
  } catch (error) {
    console.log(error);
  }
};
export const updateProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body);
    if (project) {
      return res.status(201).json({ status: 'project updated' });
    }
    return res.status(400).json({ msg: 'this project does not exist' });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (project) {
      return res.status(201).json({ status: 'project was deleted' });
    }
    return res.status(400).json({ msg: 'this project does not exist' });
  } catch (error) {
    console.log(error);
  }
};
export const createProject = async (req: Request, res: Response) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(202).json({ status: ' Project Created ' });
  } catch (error) {
    console.log(error);
  }
};
