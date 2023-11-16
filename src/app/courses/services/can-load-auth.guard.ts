import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment } from "@angular/router";
import { AuthStore } from "../../services/auth.store";
import { Observable } from "rxjs";
import { first } from "rxjs/internal/operators/first";
import { tap } from "rxjs/internal/operators/tap";



@Injectable()
export class CanLoadAuthGuard implements CanLoad{

  constructor(private auth:AuthStore,private router:Router){

  }

  canLoad(route:Route,segments:UrlSegment[]) : Observable<boolean>{
    return this.auth.isLoggedIn$.pipe(first(),tap(isLoggedIn=>{
      if(!isLoggedIn){
        this.router.navigateByUrl('/login');
      }
    }));
  }
}
