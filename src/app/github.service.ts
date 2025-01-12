import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, defer, filter, from, map } from 'rxjs';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  //auth: environment.services.github,
});
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  inviteMember(invitee_id: number): Observable<any> {
    return from(
      octokit.rest.orgs.createInvitation({
        invitee_id: invitee_id,
        org: 'Coderic',
        team_ids: [9194674],
      })
    ).pipe(map((response: any) => response.data));
  }

  getMember(username: string): Observable<any> {
    let url = environment.api + '/members/'+username;
    return this.http.get(url);
  }

  getMembers(): Observable<any> {
    let url = environment.api + '/members';
    return this.http.get(url);
  }

  getRepositories(): Observable<any> {
    return from(
      octokit.rest.repos.listForOrg({
        org: 'Coderic',
        type: 'sources',
      })
    ).pipe(
      map((response: any) => response.data),
      map((repos) => repos.filter((repo: any) => repo.license != null))
    );
  }

  getProjects(): Observable<any> {
    return from(
      octokit.rest.projects.listForOrg({
        org: 'Coderic',
        state: 'all'
      })
    ).pipe(map((response: any) => response.data));
  }

  getTeams(): Observable<any> {
    return from(
      octokit.rest.teams.list({
        org: 'Coderic',
      })
    ).pipe(map((response: any) => response.data));
  }

  getEvents(): Observable<any> {
    return from(octokit.request('GET /orgs/{org}/events', {
      org: 'Coderic',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
     })).pipe(
      map((response: any) => response.data)
    );
  }

  getIssues(): Observable<any> {
    return defer(() =>
      from(octokit.rest.issues.listForOrg({ org: 'Coderic' })).pipe(
        map((response: any) => response.data)
      )
    );
  }

  getDns(): Observable<any> {
    let url = environment.api + '/dns';
    return this.http.get<any>(url);
  }
}
