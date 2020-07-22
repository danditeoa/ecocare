import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecocare';

  constructor(private route: Router,
              public dialog: MatDialog){}

  goToHome() {
    this.route.navigate(['/home']);
  }

  goToProfile() {
    this.route.navigate(['/profile']);
  }

  goToCart() {
    this.route.navigate(['/cart']);
  }

  goToStore() {
    this.route.navigate(['/store']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
