
import { connectDB } from "@/util/database";
export default async function handler(request,response){
    const db = (await connectDB).db("forum");
    const body = request.body;
    if(request.method == 'POST'){
        if( !body.userId || !body.userPassword){
            return response.status(200).json(
                {
                    error:"아이디 비밀번호는 필수입니다."
                }
            )
        }
        
        const idChk = await db.collection("user").findOne({userId:body.userId});

        if(idChk){
            return response.status(200).json(
                {
                    error:"이미 존재하는 아이디 입니다."
                }
            )
        }
        const doc = {
            userId : body.userId
            ,userPassword : body.userPassword
        }
        const result = await db.collection("user").insertOne(doc);
        return response.status(200).redirect('/register')

    }
}