import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import{GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth,private router :Router) { }
    //connexion
    login(email : string, password : string){
      this.fireauth.signInWithEmailAndPassword(email,password).then( res=> {
        localStorage.setItem('token','true') ;
      //  if(res.user?.emailVerified == true){
          this.router.navigate(['/acc']);
        //}else{
        //  this.router.navigate(['/verify-email']);
        //}
      },err =>{
        alert(err.message);
        this.router.navigate(['/login']);
      })
     }
     //identification

     register(email : string,password : string){
      this.fireauth.createUserWithEmailAndPassword(email ,password).then( res=> {
       alert('enregistrement reussi')
        this.router.navigate(['/login']);
        this.SendEmailForVarification(res.user);
      }, err => {
        alert(err.message);
        this.router.navigate(['/register']);

      })

     }
     //deconnexion
     logout(){
      this.fireauth.signOut().then(()=> {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);

      },err => {
        alert(err.message);
      }
      )
     }
     //mot de passe oublié
     forgot(email:string){

      this.fireauth.sendPasswordResetEmail(email).then(() => {
        this.router.navigate(['/verify-email']);
      },err=> {
        alert(err.message);
          })
     }
     //verification
     SendEmailForVarification(user : any){

    user.sendEmailVarification().then(( res : any) => {
      this.router.navigate(['/verify-email']);
     }, (err : any)=>{
      alert(err.message);
     })
  }

//se connecter avec google
googleSignIn(){
  return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res =>{
    this.router.navigate(['/acc']);
    localStorage.setItem('token',JSON.stringify(res.user?.uid));
  },err =>{
alert(err.message);

  })
}

}

