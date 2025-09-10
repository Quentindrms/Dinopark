import {Controller} from "../libs/Controller";
import {DinosaurRepository} from "../repositories/DinosaurRepository";

export class GlobalController extends Controller {

    private dinosaurRepository: DinosaurRepository;

    constructor(request, response){
        super(request, response);
        this.dinosaurRepository = new DinosaurRepository();
    }

    public homepage(){

        this.response.render('pages/homepage', {
        })
    }

    public async browseDinosaurs(){
        console.log(this.dinosaurRepository);
        const dinosaurs = await this.dinosaurRepository.findAll();
        this.response.render('pages/dinosaurs', {
            dinosaurs,
        });
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