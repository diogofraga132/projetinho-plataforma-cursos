import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { state } from "@angular/core/src/animation/dsl";
import { Observable } from "rxjs/RX";
import { Injectable } from "@angular/core";

@Injectable()

export class AlunosGuard implements CanActivateChild{
    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            return true;
        }
}