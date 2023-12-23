import { Component } from '@angular/core';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
  constructor(private authSrv: AuthService) {}
  
  async cerrar(): Promise<void> {
    await this.authSrv.logout();
  }


}
