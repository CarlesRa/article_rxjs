import { Observable } from 'rxjs'

// Example 01 Observables
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