import { Component } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  constructor(
    private authSrv: AuthService
  ) {}  
  async cerrar(): Promise<void> {
    await this.authSrv.logout();
  }
}
