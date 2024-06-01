import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, map, throwError } from 'rxjs';
import { GithubService } from 'src/app/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public members$: Observable<any[]> = this.github.getMembers();
  public account$: Observable<any>;
  public invited$: Observable<any>;

  public account: any;
  public githubInviteForm =  new FormGroup({
    username: new FormControl('', { validators: Validators.required, updateOn: 'change' }),
    userId: new FormControl<number | null>(0, { updateOn: 'change' }),
  });

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    /*
    TODO: FIx later
    this.githubInviteForm.controls.username.valueChanges.subscribe((value: string | null) => {
      this.account$ = this.github.getMember(value??'');
      this.account$.subscribe(account => this.account = account);
    });*/
  }

  onInvite() {
    let inviteId = this.githubInviteForm.controls.userId.value as number;
    this.invited$ = this.github.inviteMember(this.account.id);
  }
}
