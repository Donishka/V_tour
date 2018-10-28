import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SpPackageService {
  spid: string;
  constructor(
    
  ) { }

  setValue(id:string){
    this.spid=id;   
  }
  getValue(){
    console.log(this.spid);
  }
  
}
