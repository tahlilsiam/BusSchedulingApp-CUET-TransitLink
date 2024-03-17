import express from "express";
import { Notice } from "../models/noticeModel.js";
const router = express.Router();

router.post("/", async(request, response)=>
{
    try{
        if(
            !request.body.noticeTitle||
            !request.body.noticeBody
        )
        {
            return response.status(400).send(
                {message:"Send Notice title and notice body"});
        }
        const newNotice = {
            noticeTitle: request.body.noticeTitle,
            noticeBody: request.body.noticeBody,
        }

        const notice = await Notice.create(newNotice);
        return response.status(200).send(notice);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

router.get("", async(request, response)=>{
    try{
        const notices = await Notice.find({});
        return response.status(200).send(
            {
                data: notices,
            });
    }catch(error)
    {
        console.log(error.message);
        return response.status(500).send({message: error.message});
    }
});

router.get("/:id", async(request, response)=>{
    try{
        const {id} = request.params;
        const notice = await Notice.findById(id);
        return response.status(200).send(notice);
    }catch(error)
    {
        console.log(error.message);
        return response.status(500).send({message:error.message});
    }
});

router.put("/:id", async(request, response)=>{
    try{
        if(
            !request.body.noticeTitle||
            !request.body.noticeBody
        )
        {
            return response.status(400).send(
                {message:"Send Notice title and notice body"});
        }
        const {id} = request.params;
        const result = await Notice.findByIdAndUpdate(id, request.body, {new:true});
        if(!result)
        {
            return response.status(400).send({
                message: "Notice is not found"
            });
        }
        return response.status(200).send({
            message:"Notice is updated successfully",
            result,
        });
    }catch(error)
    {
        console.log(error.message);
        return response.status(500).send({message:error.message});
    }
});

router.delete("/:id", async(request, response)=>{
    try{
        const {id} = request.params;
        const result = await  Notice.findByIdAndDelete(id);
        if(!result)
        {
            return response.status(400).send({message:"Notice is not found"});
        }
        return response.status(200).send({message:"Notice is deleted successfully"});
    }catch(error)
    {
        console.log(error.message);
        return response.status(500).send({message:error.message});
    }
});

export default router;