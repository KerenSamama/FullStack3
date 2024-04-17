/*
class network{
    serv = new server();//אובייקט מסוג סרבר
     
    //Asynchrone, data= what we want ton send to server
    //dispatcher : callback function to handle server response.
    send_to_server_async(data, dispatcher){    
        this.serv.prossess_data(data, dispatcher);
    }
    
    //synchrone, data= what we want ton send to server

    send_to_server(data){
        let result =  this.serv.prossess_data(data);
        return result;
    }
}
*/
//The Network class provides a static send method that simulates sending an HTTP request to a server.
class Network{
    //static because we dont create object
    //This method is used to simulate sending an HTTP request.
    static send(body, obj){
        // body : the body of the http request
        // obj  : an instance of FXMLHttpRequest
        obj.readyState=2;  //request received 
        var fxhttp=null;
        //carry_request: This method is used to simulate server-side processing of an HTTP request.
        fxhttp=Server.carry_request(body, obj);
        return fxhttp;
        
    }
}

