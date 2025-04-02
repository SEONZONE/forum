export default function Wirte(){
    return ( 
        <div className="p-20">
            <h4>글 작성</h4>
            <form action="api/write" method="POST">
            <div>
                <h4>제목</h4>
                <input name="title" type="text"/>
                <h4>내용</h4>
                <input name="content" type="text"/>
            </div>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}