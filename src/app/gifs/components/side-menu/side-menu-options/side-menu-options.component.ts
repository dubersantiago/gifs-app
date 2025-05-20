import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface menuOptions{
  label:string,
  sublabel:string,
  icono:string,
  ruta:string
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent { 

  menuoptions:menuOptions[]=[
    {
      label:'trending',
      sublabel: 'gisf populares',
      icono:'fa-solid fa-chart-line',
      ruta:'/dashboard/trending'
    },
    {
      label:'search',
      sublabel: 'buscar gifs',
      icono:'fa-solid fa-magnifying-glass',
      ruta:'/dashboard/search'
    }
  ]
}
