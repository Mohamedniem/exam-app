
import { Routes } from '@angular/router';

export const routes: Routes = [

    
    {
        path:"mainpage",
        loadComponent:()=>import("./core/pages/mainpage/mainpage.component").then(c=>c.MainpageComponent)
    },
    {
        path:"",
        loadComponent:()=>import("./core/pages/login/login.component").then(c=>c.LoginComponent)
    },
    {
        path:"login",
        loadComponent:()=>import("./core/pages/login/login.component").then(c=>c.LoginComponent)
    },
    {
        path:"register",
        loadComponent:()=>import("./core/pages/register/register.component").then(c=>c.RegisterComponent)
    }
    ,
    {
        path:"forgetpassword",
        loadComponent:()=>import("./core/pages/forgetpassword/forgetpassword.component").then(c=>c.ForgetpasswordComponent)
    },{
        path:"verifycode",
        loadComponent:()=>import("./core/pages/verifycode/verifycode.component").then(c=>c.VerifycodeComponent)
    }
    ,{
        path:"resetpassword",
        loadComponent:()=>import("./core/pages/setpassword/setpassword.component").then(c=>c.SetpasswordComponent)
    }
    ,{
        path:"home",
        loadComponent:()=>import("./core/pages/home/home.component").then(c=>c.HomeComponent)
    }

];
