import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './shared/core.module';

@NgModule({
  //Componentes directivas y pipes
  declarations: [AppComponent, HomeComponent],
  //Otros modulos
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule],
  //Exportados hace que los elementos declarados se puedan exportar a otros modulos.
  //Los elementos sobre los que este modulo va a actuar como proveedor.
  providers: [],
  //En el modulo principal se tiene que declarar el componte exportado como componente principal.
  bootstrap: [AppComponent],
})
export class AppModule {}
