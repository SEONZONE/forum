"use client";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map(
        (a, i) => (
          console.log(a),
          (
            <div className="list-item" key={i}>
              <h4>{result[i].title}</h4>
              <p>{result[i].content}</p>
              <DetailLink
                contents="상세보기"
                urlParam={`/detail/${result[i]._id}`}
              />
              <Link href={`/edit/${result[i]._id}`}> ✏️ </Link>
              <span
                onClick={(e) => {
                  // fetch("/api/delete", {
                  //   method: "DELETE",
                  //   body: JSON.stringify({ _id: result[i]._id }),
                  // })
                  //   .then((r) => r.json())
                  //   .then(() => {
                  //     e.target.parentElement.style.opacity = 0;
                  //     setTimeout(() => {
                  //       e.target.parentElement.style.display = "none";
                  //     }, 1000);
                  //   });
                  fetch(`/api/delete/${result[i]._id}`)
                    .then((r) => r.json())
                    .then(() => {
                      e.target.parentElement.style.opacity = 0;
                      setTimeout(() => {
                        e.target.parentElement.style.display = "none";
                      }, 1000);
                    });
                }}
              >
                🗑️
              </span>
            </div>
          )
        )
      )}
    </div>
  );
}
