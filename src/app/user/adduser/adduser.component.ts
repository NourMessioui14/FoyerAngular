import { Component } from '@angular/core';
import {NgForm, ReactiveFormsModule} from "@angular/forms";
import {User} from "../../ModelUser/user";
import {FoyerService} from "../../Core/Services/foyer.service";
import {UserService} from "../../Core/Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  listuser:User[]=[];
  newuser!:User;
  constructor(private router:Router, private users:UserService){}

  adduser(F: NgForm) {
    if (F.valid) {
      this.newuser = {
        id: F.value.id,
        nom: F.value.nom,
        prenom: F.value.prenom,
        email: F.value.email,
        password: F.value.password,
        age: F.value.age,
        adresse: F.value.adresse,
        nbphone: F.value.nbphone,
        role: F.value.role,


      };
      console.log(this.newuser.nom);
      //this.List_user.push(newUser);
      console.log(this.newuser.nom);
      //this.List_user.push(newUser);
      this.users.adduser(this.newuser).subscribe(()=>{alert('added succefully');
        this.router.navigateByUrl('/user/listuser');
      })

      F.resetForm();
    }
  }



  }


