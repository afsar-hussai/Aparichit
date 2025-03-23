import axios from "axios";

class BackendCom{

    api;
    constructor(){
        this.api=axios.create({
            baseURL:String(import.meta.env.VITE_BACKEND_URL),
            timeout:10000,
            headers:{
                'Content-Type':'application/json',
            }
        })
    }

    async sendMail(email,complain){

        try {
            const response=await this.api.post('/sendmail',
                {email,complain});
                return response.data;
            
        } catch (error) {
            console.error("Error Occured: ",error || error.response?.data);
            
            throw error;
        }

    }

}

const backendCom=new BackendCom();

export default backendCom;