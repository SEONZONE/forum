export default function handler(request,response){
    console.log(request)
    if(request.method == 'GET'){
        return response.status(200).json('안녕1')
    }else{
        return response.status(200).json('안녕2')
    }
}