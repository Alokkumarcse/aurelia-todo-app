import { PLATFORM } from "aurelia-framework";
export class App {
  constructor() {
    this.message = "Hello World!";
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = "Router Test";
    config.map([
      {
        route: "",
        name: "home",
        moduleId: PLATFORM.moduleName("./page/home/index"),
        title: "Home",
      },
      {
        route: "todo",
        name: "task",
        moduleId: PLATFORM.moduleName("./page/task/todo"),
        title: "Task",
      },
    ]);
  }
}
