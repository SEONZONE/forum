export default function Register(){
    return ( 
        <div className="p-20">
            <h4>회원가입</h4>
            <form action="api/register" method="POST">
            <div>
                <h4>아이디</h4>
                <input name="userId" type="text"/>
                <h4>비밀번호</h4>
                <input name="userPassword" type="password"/>
            </div>
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}