import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import './style.css';

// import { Observable, Subscription } from 'rxjs';
// const observer = {
//   next: (value) => console.log('nex', value),
// };
// const subs = new Subscription();

// const observable = new Observable((subscriber) => {
//   let count = 0;
//   const id = setInterval(() => {
//     subscriber.next(count);
//     count += 1;
//   }, 1000);
//   return () => {
//     console.log('clear');
//     clearInterval(id);
//   };
// });
// subs.add(observable.subscribe(observer));
// subs.add(observable.subscribe(observer));
// setTimeout(() => {
//   subs.unsubscribe();
// }, 3500);
////////////////////////////// from event //////////////
// import { fromEvent } from 'rxjs';

// const observer = {
//   next: (val) => console.log('nex', val),
//   error: (error) => console.log('error', error),
//   complete: () => console.log('compolete'),
// };

// const source$ = fromEvent(document, 'click');

// const sub = source$.subscribe(observer);

// setTimeout(()=>{
//   sub.unsubscribe()
// },3000)
/////////////////// of ////////////////
// import {of,range} from 'rxjs'
// const observer = {
//   next: (val) => console.log('nex', val),
//   error: (error) => console.log('error', error),
//   complete: () => console.log('compolete'),
// };
// // for iterate that needed step by step
// const source$ = of(1,[2],3,4,5);
// const source2$ = range(1,5);

// source$.subscribe(observer)
// source2$.subscribe(observer)

// console.log('2')

//////////////// from /////////////
// import {from,of} from 'rxjs'

// function* hello(){
//   yield 'Hello';
//   yield 'World';
//   yield 'World';
//   yield 'World';
//   yield 'World';
//   yield 'World';
//   yield 'World';
// }

// const observer = {
//   next: (val) => console.log('nex', val),
//   error: (error) => console.log('error', error),
//   complete: () => console.log('compolete'),
// };
// const iterator = hello();
// const source$ = from(iterator);

// source$.subscribe(observer)

///////////////// interval //////////////

// import { interval,timer } from 'rxjs'

// const interval$ = interval(1000);
// const timer$ = timer(1000);

// interval$.subscribe(val=>console.log(val,'next'))
// timer$.subscribe(console.log)
function clacScrollPrecent(el) {
  const { scrollTop, scrollHeight, clientHeight } = el;
  console.log(scrollTop, scrollHeight, clientHeight);
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
// el
const progressBar = document.querySelector('.progress-bar');
const scrol$ = fromEvent(document, 'scroll');
const progress$ = scrol$.pipe(
  map(({ target }) => clacScrollPrecent(target.documentElement))
);

progress$.subscribe((percet) => {
  progressBar.style.width = `${percet}%`;
});
