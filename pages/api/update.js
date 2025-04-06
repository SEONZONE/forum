import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb"; 

export default async function handler(request,response){
    const db = (await connectDB).db("forum");
    const body = request.body;
    if(request.method == 'POST'){
        if( !body.title || !body.content){
            return response.status(200).json(
                {
                    error:"제목과 내용은 필수값입니다."
                }
            )
        }

        const doc = {
            "title" : body.title
            ,"content" : body.content
        }
        const result = await db.collection("post").updateOne(
            { _id : new ObjectId(body._id) },
            { $set: doc }
        )

        return response.status(200).redirect('/list')

    }
}