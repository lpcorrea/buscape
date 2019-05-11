import { Routes, RouterModule, PreloadAllModules } from "@angular/core";
import { ThemeComponent } from "./components/theme/theme.component"
import { AuthGuard } from "./guards/auth.guard";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: '', redirectTo: 'tome', pathMatch: 'full' },
    {
        path: '',
        component: ThemeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'home', loadChildren: './pages/home/home.module#HomeModule' }
        ]
    }, 
    { path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundModule' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule { }