import axios from "axios"

export type User={
    id?:Number,
    username?:String,
    hasSession():boolean,
    Login(username:string,password:string,rememberMe:boolean):boolean
}

export default (():User=>{
    return {
        hasSession(){
            return false
        },
        Login(username:string,password:string,rememberMe:boolean){
            if(username==="dupa"){
                if(password!=="dupa")
                    return false
                this.username="dupa"
                this.id=1
                return true
            }
            return false
        }
    }
})()