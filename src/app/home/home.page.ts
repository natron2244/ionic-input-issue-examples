import { Component, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonIcon,
  IonInputPasswordToggle,
} from '@ionic/angular/standalone';
import {
  lockClosedOutline,
  personOutline,
  addCircleOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonIcon,
    IonInputPasswordToggle,
    ReactiveFormsModule,
  ],
})
export class HomePage {
  constructor() {
    addIcons({ lockClosedOutline, personOutline, addCircleOutline });
  }

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    input1: new FormControl(''),
    input2: new FormControl(''),
    input3: new FormControl(''),
    input4: new FormControl(''),
    input5: new FormControl(''),
    input6: new FormControl(''),
    input7: new FormControl(''),
    input8: new FormControl(''),
    input9: new FormControl(''),
    input10: new FormControl(''),
  });
}
