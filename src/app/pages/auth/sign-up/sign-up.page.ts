import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name:  new FormControl('', [Validators.required, Validators.minLength(4)]),
    profile: new FormControl('', [Validators.required,(control) => {
      const value = control.value;
      if (value !== 'alumno' && value !== 'profesor') {
        return { oneOf: true };
      }
      return null;
    }])
  })

  firebaseauthSvc = inject(FirebaseauthService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {
  }

  async submit() {
    if (this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();


      this.firebaseauthSvc.signUp(this.form.value as User).then(async res => {

        await  this.firebaseauthSvc.updateUser(this.form.value.name);

        let uid = res.user.uid;
        this.form.controls.uid.setValue(uid);

        this.setUserInfo(uid);
          
      }).catch(error => {
        console.log(error);

        this.utilsSvc.presentToast({
            message: error.message,
            duration: 2500,
            color: 'primary',
            position: 'middle',
            icon: 'alert-circle-outline'
        })

      }).finally(() => {
        loading.dismiss();
      })
    }
  }

  async setUserInfo(uid: string) {
    if (this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      let path = `users/${uid}`;
      delete this.form.value.password;

      this.firebaseauthSvc.setDocument(path, this.form.value).then(async res => {

        this.utilsSvc.saveInlocalStorage('user', this.form.value);
        this.utilsSvc.presentToast({
          message: 'Usuario registrado con éxito',
          duration: 1500,
          color: 'light',
          position: 'bottom'
        });
        this.form.reset();

          
      }).catch(error => {
        console.log(error);

        this.utilsSvc.presentToast({
            message: error.message,
            duration: 2500,
            color: 'primary',
            position: 'middle',
            icon: 'alert-circle-outline'
        })

      }).finally(() => {
        loading.dismiss();
      })
    }
  }


}
