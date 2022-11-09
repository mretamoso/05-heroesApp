import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RESTHeroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RESTHeroe) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  eliminar() {
    this.dialogRef.close(true)
  }

  cerrar() {
    this.dialogRef.close()
  }
}