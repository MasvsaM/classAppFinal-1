import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  firebaseauthSvc = inject(FirebaseauthService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {
  }

  user(): User{
    return this.utilsSvc.getFromlocalStorage('user');
  }


  //====== Tomar/Seleccionar Imagen =====
  async takeImage(){

    let user = this.user();
    let path = `users/${user.uid}` 

    const dataUrl = (await this.utilsSvc.takePicture('Imagen de Perfil')).dataUrl;
    
    const loading = await this.utilsSvc.loading();
    await loading.present();
    
    let imagePath = `${user.uid}/profile`;
    user.image = await this.firebaseauthSvc.uploadImage(imagePath, dataUrl);

    this.firebaseauthSvc.updateDocument(path, {image: user.image}).then(async res => {
          
      this.utilsSvc.saveInlocalStorage('user', user);

      this.utilsSvc.presentToast({
        message: 'Imagen actualizada exitosamente',
        duration: 1500,
        color: 'success',
        position: 'middle',
        icon: 'checkmark-circle-outline'
    })

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
