# Entendiendo RxJS
![rxjs](rxjs.png)
## Introducción  

Buenas a todas, en este artículo voy a tratar de explicar RxJS de una forma sencilla, con ejemplos donde poder probar sus ventajas y las posibilidades que nos da para utilizarlas en nuestro día a día como desarrolladores.  
En primer lugar vamos a ver los conceptos básicos para poder entender y utilizar la librería.

# Tabla de contenidos  

1. [¿Que es RxJS?](#rxjs)
2. [Programación reactiva](#reactiva)
3. [¿Que son los Observables?](#observables)
   1. [Ejemplo de Observable](#observable_ejemplo)

## ¿Que es RxJS?  <a name="rxjs"></a>

RxJS es una librería de **programación reactiva** que nos ayuda a simplificar la creación de código asíncrono y basado en eventos a traves de secuencias **observables**. 

## Programación reactiva  <a name="reactiva"></a>

Los sistemas modernos involucran muchos subsistemas asíncronos que necesitan ser coordinados eficientemente, algo tremendamente complicado con las técnicas de programación clásicas.  
La programación reactiva es un paradigma de programación asíncrono enfocado en el uso de flujos de datos (Streams) y la propagación al cambio (Events), que resuelve la mayoria de casos de uso de los sistemas informáticos modernos. RxJS facilita a los desarrolladores la implementación de este paradigma de una forma sencilla y limpia para nuestro código.  

## ¿Que son los Observables? <a name="observables"></a>  

Los observables representan una forma progresiva de manejar eventos, actividad asíncrona y múltiples valores en JavaScript. Los observables son realmente funciones que arrojan valores. Los objetos denominados observadores definen funciones de devolución de llamada para next(), error() y complete(). Estos objetos observadores luego se pasan como argumentos a la función observable. La función observable llama a los métodos del observador en función de un determinado comportamiento (solicitud HTTP AJAX, evento, etc.). Esto permite al observador "escuchar" los cambios de estado emitidos por la función observable.

### Ejemplo de Observable: <a name="observable_ejemplo"></a>  
Un observable no se ejecutan hasta que algun "observador" (Observer) se "suscribe" (Subscribe) a ellas.
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
