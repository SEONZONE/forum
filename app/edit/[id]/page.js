import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
export default async function edit(props) {
  const db = (await connectDB).db("forum");
  const id = await props.params.id;
  let result = await db.collection("post").findOne({ _id: new ObjectId(id) });
  return (
    <div className="p-20">
      <h4>글 수정</h4>
      <form action="/api/update" method="POST">
        <div>
          <h4>제목</h4>
          <input name="title" type="text" defaultValue={result.title} />
          <h4>내용</h4>
          <input name="content" type="text" defaultValue={result.content}/>
        </div>
        <input name="_id" type="hidden" defaultValue={result._id} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
