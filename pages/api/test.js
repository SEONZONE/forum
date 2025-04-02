export default function handler(request,response){
    if(request.method == 'POST'){
        return response.status(200).json('안녕1')
    }else{
        return response.status(200).json('안녕2')
    }
}