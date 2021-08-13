import mongoose from "mongoose"

const messageSchema = new  mongoose.Schema({
	title: {
	  type: String,
	  default: "No title",
	},
	description: {
	  type: String,
	  default: "No description",
	}
})

const Message = mongoose.model("Message", messageSchema)

export default Message
