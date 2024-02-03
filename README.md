# CursoReactMidu

### ¿Que es React?
React es una biblioteca de JavaScript para construir interfaces de usuario , React tiene la facilidad de desarrollarse para proyectos en todo tipo de plataformas es decir se pueden desarrollar interfaces para moviles, para desarrollo web , para terminal , etc , es agnotica de las diferentes plataformas disponibles

### Vanilla JavaScript.
Es JavaScript puro codigo sin dependencias para usar JS.

### ¿Que es JSX?
Es una extension de EMS que esta basada en XML , nos permite de una forma mas declarativa crear elementos sin necesidad de repetir codigo tedioso , es como un lenguaje de JS en donde tu escribes codigo XML en la que tu describes la interfaz que quieres crear , es decir por medio de React.fragment todo ese codigo tedioso lo podemos simplificar y reutilizar en codigo mas limpio.

### ¿Que es SWC?
Es un compilador de JavaScript y TypeScript , su desarrollo principalmente es para reemplazar a Babel en proyectos JavaScript y TypeScript, para su uso en React es fundamental para su proceso de compilacion para transformar el codigo JSX y otras caracteristicas modernas de JS de una forma compatible con todos los navegadores , en resumen es una alternativa eficiente a Babel para compilar y transformar codigo JavaScript y TypeScript en proyectos React

### Imperativo vs Declarativo
El codigo imperativo es un paradigma de la programacion en donde le deciomos a la maquina como debe hacer las cosas, en un paso a paso metodico guardando su parametrica serie de pasos, teniendo asi un errror y una falla notable en la escalabilidad de un servicio, por que al ser parametricamente correcto si su arquitectura esta hecha con cierto limite a la hora de buscar mejorar o exceder ese limite el codigo imperativo se vuelve repetitivo y tedioso , mas complicado y molesto para su desarrollo escalable.

El código declarativo es un paradigma de programación que se centra en describir qué se quiere lograr, en lugar de detallar paso a paso cómo lograrlo. En este enfoque, el programador especifica el resultado deseado y deja que el sistema determine cómo alcanzar ese resultado.
En lugar de escribir instrucciones explícitas sobre cómo realizar una tarea, como lo haría en un enfoque imperativo, el código declarativo describe la lógica o la estructura de los datos que se deben manipular. Esto a menudo se logra utilizando declaraciones o expresiones que describen las relaciones entre los datos sin especificar los pasos detallados para lograr el resultado.

### Crear proyecto con empaquetador de aplicaciones web Vite 
npm init -y
npm create vite@latest  , crear proyectos empaquetados con vite , para las bibliotecas de JavaScript y TypeScript
Creamos un proyecto JavaScript + SWC
despues instalamos las dependencias usando,  npm install
Inicializar el proyecto, npm run dev

### Hooks y State en React
Los Hooks , añade cierta funcionalidad a los componentes de react , o poder ejecutar codigo arbitrario cuando ocurre ciertas cosas en los componentes , o tener algun tipo de funcionalidad para mejorar los componentes , los hooks son como utilidades para mejorar los componentes dando funcionalidad en diferentes partes de renderizacion , 

El State nos va a servir para saber si estamos o no estamos siguiendo a un usuario , por que al usar el State automaticamente se crea un array de dos espacios el primero se usa para el control del hook y el segundo espacio es para guardar una funcion que actualize nuestro estado para su controlador manejar la funcion
