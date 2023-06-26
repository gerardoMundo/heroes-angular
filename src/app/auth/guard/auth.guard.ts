import { Injectable } from '@angular/core';
import {
  CanMatch,
  CanActivate,
  Route,
  UrlSegment,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanMatch, CanActivate {
  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean | UrlTree> {
    console.log({ route, segments });
    return true;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log({ route, state });
    return true;
  }
}
