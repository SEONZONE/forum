import Link from "next/link";
import DetailLink from "@/app/list/DetailLink"

export default async function Home() {
  return (
    <div className="list-bg">
            <div className="list-item">
              <DetailLink
                contents="list 페이지"
                urlParam={`/list`}
              />
            </div>
            <div className="list-item">
              <DetailLink
                contents="register 페이지"
                urlParam={`/register`}
              />
            </div>
            <div className="list-item">
              <DetailLink
                contents="write 페이지"
                urlParam={`/write`}
              />
            </div>
    </div>
  );
}
