import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  const db = (await connectDB).db("forum");

  if (request.method == "DELETE") {
    try {
      // 클라이언트에서 JSON으로 전송된 데이터 파싱
      const body = JSON.parse(request.body);

      if (!body._id) {
        return response
          .status(400)
          .json({ error: "삭제할 게시물의 ID가 필요합니다." });
      }

      // 게시물 삭제
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(body._id) });

      if (result.deletedCount === 1) {
        // 삭제 성공
        return response
          .status(200)
          .json({ message: "게시물이 삭제되었습니다." });
      } else {
        // 삭제할 게시물을 찾지 못함
        return response
          .status(404)
          .json({ error: "해당 게시물을 찾을 수 없습니다." });
      }
    } catch (error) {
      console.error("삭제 오류:", error);
      return response.status(500).json({ error: "서버 오류가 발생했습니다." });
    }
  } else {
    // POST 요청이 아닌 경우
    return response.status(405).json({ error: "POST 요청만 허용됩니다." });
  }
}
