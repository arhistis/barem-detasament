import { Victim } from './../types/victim.d';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from '../../../node_modules/rxjs';
import { Lesion } from '../types/lesion';

@Injectable()
export class LesionService {

  victim: Victim = {
    nume: "Costel",
    varsta: 23,
    context: "context",
    leziuni: []
  };

  constructor(
    private http: HttpClient
  ) {}

  getLesions(): Observable<Lesion[]> {
    return this.http.get<Lesion[]>(`${environment.apiUrl}/api/lesions`);
  }

  setVictimInfo(nume: String, varsta: Number, context: String){
    this.victim.nume = nume;
    this.victim.varsta = varsta;
    this.victim.context = context;
  }

  getVictimInfo() {
    return {nume: this.victim.nume, varsta: this.victim.varsta, context: this.victim.context};
  }

  setVictimLesions(lesions: {lesion: Lesion, location: String}[]){
    this.victim.leziuni = lesions;
  }

  getVictimLesions(){
    return this.victim.leziuni;
  }

  getVictim(){
    return this.victim;
  }

}
