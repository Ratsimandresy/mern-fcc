import MessageModel from "../models/message.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMessage = async (req, res) => {
  const msg = req.body;
  const newMessage = new MessageModel(msg);

  try {
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
