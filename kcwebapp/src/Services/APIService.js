class APIService{
    constructor(){
        this.url = "http://167.172.119.72"
    }
    async GetRoot(){
        try{
            let newurl = this.url+="/";
            let headers = { "Content-Type": "application/json" };
            let response = await fetch(newurl, {
                mode: 'cors',
                method: "GET",
                headers: headers
            }).then(response => response.json());
            //console.warn(response.json());
            return JSON.stringify(response);
        }catch(e){
            console.error(e)
            return "API FAILURE"; 
        }
    }
}

export default APIService;