import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer: any) => {
  try {
    observer.next("Hey dudies!");
    observer.next("How are you?");
    setInterval(() => {
        observer.next('Im good');
    },2000);
  } catch (err) {
    observer.error(err);
  }
});

let observer = observable.subscribe((x: any) => {
  addItem(x), (error: any) => addItem(error), () => addItem("Completed");
});

setTimeout(() =>{
    observer.unsubscribe();
}, 6001);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
