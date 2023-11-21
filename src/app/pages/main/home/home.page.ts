import { Component, OnInit, inject } from '@angular/core';
import { SetCursosComponent } from 'src/app/backend/set-cursos/set-cursos.component';
import { Curso, User } from 'src/app/models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseauthSvc = inject(FirebaseauthService);
  utilsSvc = inject(UtilsService);

  cursos: Curso[] = [];

  ngOnInit() {
  }

  user(): User{
    return this.utilsSvc.getFromlocalStorage('user');
  }
  ionViewWillEnter() {
    this.getCursos();
  }


  // ========= Obtener Cursos ==========
  getCursos(){
    let path = `users/${this.user().uid}/path`;
    
    let sub = this.firebaseauthSvc.getCollectionData(path).subscribe({
      next: (res: any) => {
        console.log(res);
        this.cursos = res;
        sub.unsubscribe();
      }
    })
  }


   //====== Cerrar Sesión =====
   signOut(){
    this.firebaseauthSvc.signOut();
  }

  // ===== Agregar o actualizar un curso
  addUpdateCurso() {

    this.utilsSvc.presentModal({
      component: SetCursosComponent,
      cssClass: 'add-update-modal'
    })
  }
}
