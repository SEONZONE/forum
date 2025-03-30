import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  const id = await props.params.id;
  let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
  return (
    <div>
      <h4>상세 페이지</h4>
      <h4>글 제목</h4>
      <p>{result.title}</p>
      <h4>글 내용</h4>
      <p>{result.content}</p>
    </div>
  );
}
