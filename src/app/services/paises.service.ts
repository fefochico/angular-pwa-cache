import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PaisInterface } from '../iterfaces/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private paises: PaisInterface[]=[];
  constructor(private http: HttpClient) { }

  getPaises(): Promise<PaisInterface[]>{
    if(this.paises.length>0) return Promise.resolve(this.paises);
    return new Promise(resolve => {
      this.http.get<PaisInterface[]>('https://restcountries.com/v3.1/lang/spanish')
      .subscribe((paises: PaisInterface[]) => {
        console.log(paises)
        this.paises=paises;
        resolve(paises)
      })
    })
  }

  getPaisById(id: string): Promise<PaisInterface>{
    if(this.paises.length>0) {
      const pais = this.paises.find(p => p.cca3===id)!;
      return Promise.resolve(pais)
    }
    return this.getPaises().then(paises=>{
      const pais = this.paises.find(p => p.cca3===id)!;
      return Promise.resolve(pais)
    })
  }
}
