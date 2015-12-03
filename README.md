#Sass Starter Kit

> Kit de inicio Sass simple y liviano para usar en proyectos de front end.

Sass Starter Kit es un framework CSS muy simple y pequeño construido con Sass y PostCSS.

Utiliza [normalize.css](http://github.com/necolas/normalize.css) y una serie de reglas elementales para iniciar un proyecto con HTML y CSS rápidamente.

El kit incluye un sistema de grilla super simple y similar a la [grilla de Bootstrap](https://github.com/twbs/bootstrap), pero con solo dos breakpoints.

##Contenido del Kit

En la carpeta `sass` tenemos el archivo principal llamado `style.scss` y 3 partes:

* `_mixins.scss`
* `_normalize.scss`
* `_variables.scss`

Usted puede añadir mas partes o reglas en `style.scss`.

El archivo de `_mixins.scss` contiene algunos mixins Sass elementales, el archivo `_normalize.scss` unifica los estilos entre los distintos navegadores y el archivo `_variables.scss` contiene un conjunto de variables básicas para trabajar en el proyecto.

##Sistema de grilla y Media Queries

El Sistema de grilla tiene dos breakpoints (se puede cambiar el valor en `_variables.scss`):

* tablet (md)
* mobile (sm)

###Media queries

Ejemplo de uso de media queries:

```scss
@include tablet {
  header {
    background: #000;
  }
}

@include mobile {
  header {
    background: #444;
  }
}
```

###Sistema de grilla

Tenemos tres componentes de la grilla:

- Contenedores (`.container`)
- Filas (`.row`)
- Columnas (`.col-x` or `.col-bp-x`)

En el archivo de variables se puede setear el número de columnas y el espaciado de la grilla.

Ejemplo de uso del sistema de grilla:

```html
<div clas="container">
  <div class="row">
    <div class="col-4 .col-md-6 .col-sm-12">
      .col-4 .col-md-6 .col-sm-12
    </div>
    <div class="col-4 .col-md-6 .col-sm-12">
      .col-4 .col-md-6 .col-sm-12
    </div>
    <div class="col-4 .col-md-12">
      .col-4 .col-md-12
    </div>
  </div>
</div>
```

##Grunt

Este kit incluye un Gruntfile que compila Sass y utiliza el plugin autoprefixer de PostCSS. Siéntase libre de añadir sus propios plugins al proyecto.

##Cómo empezar

- Descargar el Kit o clonar el repositorio.
- Cambiar el nombre de la carpeta por el nombre de su proyecto.
- Abrir la línea de comandos e instalar dependencias: `npm install`
- Correr `grunt` para compilar y desarrollar.
- Desarrolle su proyecto.
