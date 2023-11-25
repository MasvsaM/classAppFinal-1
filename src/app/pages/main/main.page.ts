import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  pages = [
    { title: 'Inicio', url: '/main/home', icon: 'home-outline'},
    { title: 'Perfil', url: '/main/profile', icon: 'person-outline'},
  ]


  router = inject(Router);
  firebaseauthSvc = inject(FirebaseauthService);
  utilsSvc = inject(UtilsService);

  currentPath: string = '';
  rol: 'alumno' | 'profesor' | 'admin';

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if(event?.url) this.currentPath = event.url;
    })
  }

  user(): User{
    return this.utilsSvc.getFromlocalStorage('user');
  }

  // ======= Datos del Usuario/Rol ============
  getUserInf(uid: string) {
    let path = `users/${uid}`;
    this.firebaseauthSvc.getDocument(path).then((user: User) => {
      console.log('datos ->', user);
      if (user){
        this.rol = user.profile
      }     
    })
}

  //====== Cerrar Sesión =====
  signOut(){
    this.firebaseauthSvc.signOut();
  }


}
