import { AuthService } from './../auth/auth.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  constructor(private router: Router, private authService: AuthService) {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('auth');
  }
}
