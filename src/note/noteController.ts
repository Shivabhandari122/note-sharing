import { Request, Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";

const createNote = async (req: Request, res: Response) => {
  try {
    const file = req.file
      ? `${envConfig.backendurl}/${req.file.filename}`
      : "https://storage.googleapis.com/pod_public/1300/173321.jpg";
    const { title, subtitle, description } = req.body;
    if (!title || !subtitle || !description) {
      res.status(400).json({
        message: "please provide title, subtitle, description",
      });
      return;
    }
    await noteModel.create({
      title,
      subtitle,
      description,
      file,
    });
    res.status(206).json({
      message: "Note Created",
    });
  } catch (error) {
    console.log(error);
  }
};
