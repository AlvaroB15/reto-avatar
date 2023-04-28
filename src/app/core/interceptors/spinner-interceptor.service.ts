import {Injectable} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor {

    constructor(private spinner: NgxSpinnerService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show(undefined, {
            type: 'square-jelly-box',
            size: 'large',
            color: "white",
            fullScreen: true
        });
        return next.handle(req).pipe(
            finalize(() => {
                this.spinner.hide();
            })
        );
    }
}
