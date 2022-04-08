import { Injectable } from '@angular/core';

/**
 * This is a singleton class
 */
@Injectable()
export class AppConfig {
    //Provide all the Application Configs here

    public version:string = "1.0.0";
    public locale:string  = "en-US";
    public currencyFormat = { style:"currency", currency: "USD" };
    public dateFormat     = { year:'numeric', month: 'short', day: 'numeric'};

    // public baseApiPath:string = "https://sma-server.herokuapp.com/";
    public baseApiPath:string = "http://localhost:9191/";

    constructor(){
        if (this.locale===undefined){
            this.locale = navigator.language;
        }
    }
}
