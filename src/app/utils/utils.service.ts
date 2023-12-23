import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifyComponent } from './notify/notify.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  async notify(label: string, message: string) {
    await this._snackBar.openFromComponent(NotifyComponent, {      
      duration: 5 * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      data: {
        label: label,
        message: message,
      }
    });
  }

}
