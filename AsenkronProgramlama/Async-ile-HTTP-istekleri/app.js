class Request{
    async get(url){
        const response=await fetch(url); // Response Object
        const responsedata = await response.json() //JSON Object
        return responsedata;
    }
    async post (url,data){
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const responsedata = await response.json();
        return responsedata;
    }
    async put(url,data){
        const response = await fetch(url,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                "Content-type": "application/json; charset=UTF-8" 
            }
        });

        const responsedata = await response.json();
        return responsedata;
    }
    async delete(url){
        const response = await fetch(url,{
            method:'DELETE'
        });
        // const data=await response.json();
        return "Veri silme işlemi başarılı";
    }
}