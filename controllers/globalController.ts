import {Controller} from "../libs/Controller";

export class GlobalController extends Controller {

    public homepage(){

        this.response.render('pages/homepage', {
            
        })
    }

}