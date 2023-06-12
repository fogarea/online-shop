import { View } from "./view";
import { Controller } from "./controller";
import { Model } from "./model";

const model = new Model();
const controller = new Controller(model);
new View(controller, model);
