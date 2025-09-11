import {Controller} from "../libs/Controller";
import {DinosaurRepository} from "../repositories/DinosaurRepository";

export class GlobalController extends Controller {

    public homepage(){

        this.response.render('pages/homepage', {
        })
    }

    public aboutParc(){

        this.response.render('pages/about-parc');
    }

    public bookingPage(){

        this.response.render('pages/reservation');
    }

    public connexionPage(){
        this.response.render('pages/connexion');
    }

}