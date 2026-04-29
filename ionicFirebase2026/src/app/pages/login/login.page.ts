import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false,
})
export class LoginPage implements OnInit {

  email = '';
  senha = '';

  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private ToastController: ToastController,

  ) { }

  async loginGoogle() {
      try{
        await this.AuthService.loginWithGoogle();
          this.router.navigateByUrl('/login');
      }catch(error:unknown){
          if(error instanceof Error){
              this.presentToast('Erro ao logar Google: ' + error.message,'danger');
                }else{
                  this.presentToast('Erro desconhecido pela nasa,', 'danger');
      }
   }

  }
  async present(messagem:string, cor:string) {
    const toast = await this.ToastController.create({
      message: mensagem,
        color: cor,
          duration:2000
    });
        toast.present();
  }
}
