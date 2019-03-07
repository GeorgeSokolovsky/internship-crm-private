import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-greeting-popup',
  templateUrl: './greeting-popup.component.html',
  styleUrls: ['./greeting-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingPopupComponent {
  constructor(public thisDialogRef: MatDialogRef<GreetingPopupComponent>) {}

  close() {
    this.thisDialogRef.close();
  }
}
