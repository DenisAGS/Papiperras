import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Frames
import { PrincipalComponent } from './principal/principal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { Publicidad2Component } from './publicidad/publicidad2/publicidad2.component';
import { PubOfertasComponent } from './ofertas/pub-ofertas/pub-ofertas.component';
import { PublicarPComponent } from './publicar-productos/publicar-p/publicar-p.component';
import { ReclamosFormularioComponent } from './reclamos-formulario/reclamos-formulario.component';

import { ProblemasProductosComponent } from './problemas-productos/problemas-productos.component';
import { PreguntasClientesComponent } from './preguntas-clientes/preguntas-clientes.component';
import { RespuestasPreguntasComponent } from './respuestas-preguntas/respuestas-preguntas.component';
import { ReclamosClientesComponent } from './reclamos-clientes/reclamos-clientes.component';
import { DetallesComponent } from './detalles/detalles.component';

import { HomepageComponent } from './homepage/homepage.component';
import { RetiroComponent } from './retiro/retiro.component';
import { DatosRetiroComponent } from './datos-retiro/datos-retiro.component';
import { SaldosComponent } from './saldos/saldos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { VolumenComponent } from './volumen/volumen.component';

import { ConsejosComponent } from './consejos/consejos.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { TopComponent } from './top/top.component';

import { ValoracionComponent } from './valoracion/valoracion.component';
import { PruebaComponent } from './prueba/prueba.component';
import { VentasComponent } from './ventas/ventas.component';
import { ProgresoVentaComponent } from './progreso-venta/progreso-venta.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { ValidpaswordComponent } from './validpasword/validpasword.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestpaswordComponent } from './requestpasword/requestpasword.component';
import { RegisterComponent } from './register/register.component';
import { ListOfertasComponent } from './ofertas/list-ofertas/list-ofertas.component';
import { CampañasComponent } from './publicidad/campañas/campañas.component';
import { MetricasComponent } from './publicidad/metricas/metricas.component';
import { Publicidad1Component } from './publicidad/publicidad1/publicidad1.component';
import { EditarProductosComponent } from './editarP/editar-productos/editar-productos.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'estadistica',
    component: EstadisticaComponent,
  },
  {
    path: 'volumen',
    component: VolumenComponent
  },
  {
    path: 'retiro',
    component: RetiroComponent,
  },
  {
    path: 'datos-retiro',
    component: DatosRetiroComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'saldos',
    component: SaldosComponent
  },
  {
    path: 'devolucion',
    component: DevolucionComponent
  },
  {
    path: 'inventario',
    component: InventarioComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  },
  {
    path: 'preguntas-frecuentes',
    component: PreguntasFrecuentesComponent
  },
  {
    path: 'header-page',
    component: HeaderPageComponent
  },
  {
    path: 'publicidad2',
    component: Publicidad2Component
  },
  {
    path: 'ofertas',
    component: PubOfertasComponent
  },
  {
    path: 'calendario',
    component: CalendarioComponent
  },
  {
    path: 'publicar-productos',
    component: PublicarPComponent
  },
  {
    path: 'reclamos-formulario',
    component: ReclamosFormularioComponent
  },
  {
    path:'problemas-productos',
    component: ProblemasProductosComponent
  },
  {
    path:'preguntas-clientes',
    component: PreguntasClientesComponent
  },
  {
    path:'respuestas-preguntas',
    component: RespuestasPreguntasComponent
  },
  {
    path:'reclamos-clientes',
    component: ReclamosClientesComponent
  },
  {
    path:'detalles',
    component: DetallesComponent
  },
  {
    path:'consejos',
    component: ConsejosComponent
  },
  {
    path:'detalle-venta',
    component: DetalleVentaComponent
  },
  {
    path:'top',
    component: TopComponent
  },
  {
    path:'valoracion',
    component: ValoracionComponent
  },
  {
    path:'prueba',
    component: PruebaComponent
  },
  {
    path:'ventas',
    component: VentasComponent
  },
  {
    path:'progreso',
    component: ProgresoVentaComponent
  },
  {
    path:'catalogo',
    component: CatalogoComponent
  },
  {
    path:'consejos',
    component: ConsejosComponent
  },
  {
    path:'detalle-venta',
    component: DetalleVentaComponent
  },
  {
    path:'top',
    component: TopComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'password',
    component: PasswordComponent
  },
  {
    path:'validpasword',
    component: ValidpaswordComponent
  },
  {
    path: 'requestpasword',
    component: RequestpaswordComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },{
    path: 'list-ofertas',
    component: ListOfertasComponent
  },{
    path: 'campañas',
    component: CampañasComponent
  },{
    path: 'metricas',
    component: MetricasComponent
  },{
    path: 'ofertas/:id', 
    component: PubOfertasComponent
  },
  {
    path: 'metricas/:id',
    component: MetricasComponent
  },
  {
    path: 'publicidad1',
    component: Publicidad1Component
  },
  {
    path: 'editar-productos',
    component: EditarProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
