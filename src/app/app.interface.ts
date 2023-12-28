import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

export interface AppInterface { }
/*
export const httpOptions = {
    reportProgress: true,
    withCredentials: true,
    headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })
};
*/
export const httpOptions = {
  reportProgress: true,
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github+json',
    'Authorization': 'Bearer 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',
    'X-GitHub-Api-Version': '2022-11-28'
  })
};
