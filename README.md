# Entendiendo RxJS
![rxjs](rxjs.png)
## Introducción  

Buenas a todas, este es el primero de una serie de artículos en los que vamos a entender poco a poco y con ejemplos la librería RxJS. Aprenderemos los conceptos básicos y veremos ejemplos prácticos que podremos utilizar en nuestro día a día.  
Hoy vamos a entender una serie de conceptos básicos, en los siguientes artículos profunfizaremos más en cada uno de los conceptos.  
La información aquí expuesta esta extraída de los siguientes sitios:  
<a href="https://www.learnrxjs.io/">Learn RxJS</a>   

Espero que este documento les sirva de ayuda, ¡Comencemos!

# Tabla de contenidos  

1. [¿Que es RxJS?](#rxjs)
2. [Programación reactiva](#reactive)
3. [Observables](#observables)
   1. [Ejemplo de Observable](#observable_example)
4. [RxJS Operators](#operators)

## ¿Que es RxJS?  <a name="rxjs"></a>

RxJS es una librería de **programación reactiva** que nos ayuda a simplificar la creación de código asíncrono y basado en eventos a traves de secuencias **observables**. 

## Programación reactiva  <a name="reactive"></a>

Los sistemas modernos involucran muchos subsistemas asíncronos que necesitan ser coordinados eficientemente, algo tremendamente complicado con las técnicas de programación clásicas.  
La programación reactiva es un paradigma de programación asíncrono enfocado en el uso de flujos de datos (Streams) y la propagación al cambio (Events), que resuelve la mayoria de casos de uso de los sistemas informáticos modernos. RxJS facilita a los desarrolladores la implementación de este paradigma de una forma sencilla y limpia para nuestro código.  

## Observables <a name="observables"></a>  

Los observables representan una forma progresiva de manejar eventos, actividad asíncrona y múltiples valores en JavaScript. Los observables son realmente funciones que arrojan valores. Los objetos denominados observadores definen funciones de devolución de llamada para next(), error() y complete(). Estos objetos observadores luego se pasan como argumentos a la función observable. La función observable llama a los métodos del observador en función de un determinado comportamiento (solicitud HTTP AJAX, evento, etc.). Esto permite al observador "escuchar" los cambios de estado emitidos por la función observable.

### Ejemplo de Observable: <a name="observable_example"></a>  
Un observable no se ejecutan hasta que nos suscribimos (Subscribe) a el.
``` js
import { Observable } from 'rxjs'

const myObservable =  new Observable(observer => {
    let counter = 0;
    setInterval(() => {
        counter++;
        if (counter > 5) {
            observer.complete();
        }
        observer.next(`Counter = ${ counter }`);
    }, 1000)
})

const myObserver = {
    next(data) {
        console.log(data)
    },
    error(e) {
        console.log(e)
    },
    complete() {
        console.log("request complete")
    }
}

myObservable.subscribe(myObserver);

// Salida:
/*
Counter = 0
Counter = 1
Counter = 2
Counter = 3
Counter = 4
request complete
*/ 
```
## RxJS Operators <a name="operators"></a>
Los Operadores son funciones, Hay dos tipos de operadores. De tuberia y de creación:
* Operadores de tuberia (pipeable): se pueden utilizar mediante la sintaxis `observableInstance.pipe(operator())`. Entro ellos se incluyen filter() y map(). Cuando son llamados, no modifican la instancia del observabe existente, en su lugar, devuelven un Obserable nuevo cuya lógica de suscripción está basada en la del primer Observable.  
En resumen, una operador de tubería es una función que recibe un Observable y devuelve otro Observable "manipulado" sin alterar al original.
* Operadores de creación (creation): pueden llamarse como si fuesen funciones independientes para crear un nuevo Observable. Por ejemplo: `of(1, 2, 3)` crea un observable que emitirá los valores 1, 2 y 3 de forma consecutiva.  

Hay una gran lista de <a href="https://www.learnrxjs.io/learn-rxjs/operators">operadores</a> que podemos utilizar. Iremos viéndolos progresivamente en siguientes artículos.