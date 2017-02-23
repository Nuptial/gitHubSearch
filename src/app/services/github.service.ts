import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '1c632bf048651176bee4';
    private client_secret = 'd3291f8cc3bc1778267be8ff1ddfd684fe7e27d4';


    constructor(private _http: Http){
        console.log('Github Service Ready....');
        this.username = '';
    }


    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username +'?client_id='+this.client_id + '&client_secret =' +this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username +'/repos?client_id='+this.client_id + '&client_secret =' +this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string){
        this.username=username;

    }
}