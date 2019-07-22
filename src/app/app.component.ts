import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exportToExcel';

 constructor(public dialog: MatDialog) {}

  openDialog(): void {
  const  dialogRef = this.dialog.open( ConfirmDialogComponent, {width: '350px', data: 'Estas seguro?'});
  dialogRef.afterClosed().subscribe( resp => {
    console.log('La respuesta del Dialogo: ', resp);
  });
  }
}
