import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './courses/course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanLoadAuthGuard } from './courses/services/can-load-auth.guard';
import { CustomPreloadingStrategy } from './services/custom-preloading.strategy';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:'/courses',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'courses',
    loadChildren:()=>import('./courses/courses.module').then(m=>m.CoursesModule),
    // canLoad:[CanLoadAuthGuard]
    data:{
      preload:false,
    }
  },
  {
    path:'helpdesk-chat',
    component:ChatComponent,
    outlet:'chat'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,{
        preloadingStrategy:CustomPreloadingStrategy,
        // enableTracing:false,
        // useHash:true,
        scrollPositionRestoration:'enabled',
        paramsInheritanceStrategy:'always',
        // relativeLinkResolution:'corrected',// ../
        malformedUriErrorHandler:(error: URIError, UrlSerializer: UrlSerializer,url:string)=>
        UrlSerializer.parse('/page-not-found')
      }),
  ],
  exports: [RouterModule],
  providers: [
    CanLoadAuthGuard,
    CustomPreloadingStrategy
  ]
})
export class AppRoutingModule {


}
