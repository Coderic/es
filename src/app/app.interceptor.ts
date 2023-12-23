import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { UtilsService } from "src/app/utils/utils.service";

@Injectable({
    providedIn: 'root'
})
export class AppInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private utilsSrv: UtilsService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = localStorage.getItem("access_token")

        if (token != null) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }

        req = req.clone({
            setHeaders: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            reportProgress: true,
            withCredentials: true,
        });

        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.dir(error)
                    if (error.status === 401) {
                        localStorage.clear();
                        if (error.error.message) {
                            this.utilsSrv.notify('X', error.error.message);
                        }
                        this.router.navigate(['/login'])
                    }
                    if (error.status === 403 || error.status === 0) {
                        this.utilsSrv.notify('X', 'No está autorizado para acceder a este recurso');
                    }
                    if (error.status > 500) {
                        localStorage.clear();
                        if (error.error.message) {
                            this.utilsSrv.notify('X', error.error.message);
                        }
                        this.router.navigate(['/']);
                    }

                    /*
                        if (error.status === 422) {
    
                        }
    
                        if (error.status === 409) {
                            this.router.navigate(['/']);
                        }
                        */
                    return throwError(() => new HttpErrorResponse(error.error.message));
                })
            );
    }
}