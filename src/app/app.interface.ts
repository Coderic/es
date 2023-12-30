import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

export interface AppInterface { }

export const httpOptions = {
    headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/vnd.github+json',
        'Accept': 'application/vnd.github+json',
        'Authorization': 'Bearer ',
        'X-GitHub-Api-Version': '2022-11-28'
    })
};
