import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc, collection, collectionData, query} from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  storage = inject(AngularFireStorage);
  utilsSvc = inject(UtilsService);

  //================= Autenticación =================
  getAuth(){
    return getAuth();
  }

  //======= Acceder ==========
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //======= Cerrar Sesión ==========
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerlink('/auth');
  }

  //========= Crear Usuario ==========
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }
 
  //========= Actualizar Usuario ==========
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, {displayName})
  }

  //========= Enviar email para restablecer contraseña ==========
  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(),email)
  }

  //==================== Base de Datos =========================
  
  //========= Obtener documentos de una coleccion ==========
  getCollectionData(path: string, collectionQuery?: any){
    const ref = collection(getFirestore(),path);
    return collectionData(query(ref, collectionQuery), {idField: 'id'});
  }

  //========= Setear un documento ==========
  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(),path),data);
  }

  //========= Obtener un documento ==========
  async getDocument(path: string){
    return (await getDoc(doc(getFirestore(),path))).data();
  }
  
  //========= Agregar un documento ==========
  addDocument(path: string, data: any){
    return addDoc(collection(getFirestore(),path),data);
  }

  //===================== Almacenamiento ===========================
  async uploadImage(path: string, data_url: string){
    return uploadString(ref(getStorage(),path), data_url,'data_url').then(() =>{
      return getDownloadURL(ref(getStorage(), path))
    })
  }


}
