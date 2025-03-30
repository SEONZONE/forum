import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a,i) => (
        console.log(a),
        <div className="list-item" key={i}>
          <h4>{result[i].title}</h4>
          <p>{result[i].content}</p>
          <DetailLink
            contents="상세보기"
            urlParam={`/detail/${result[i]._id}`}
          />
        </div>
      ))}
    </div>
  );
}
  