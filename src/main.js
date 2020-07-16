import App from "./App.svelte";

const myObject = {
  name: "World",
  thing: "7 seasons and a movie",
};

const app = new App({
  target: document.body,
  props: {
    name: "world",
		myThing: "6 seasons and a movie",
		myObject: myObject
  },
});

export default app;
