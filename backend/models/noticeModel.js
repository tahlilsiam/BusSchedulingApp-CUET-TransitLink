import {mongoose} from "mongoose";
const noticeSchema = mongoose.Schema(
   {
        noticeTitle:{
            type: String,
            required: true,
        },
        noticeBody: {
            type:String,
            required: true,
        }
   },
   {
    timestamps: true,
   }

);
export const Notice = mongoose.model("Notice-Board", noticeSchema);