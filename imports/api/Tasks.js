// Controle do mongo db
import { Mongo } from "meteor/mongo";

export const Tasks = new Mongo.Collection("tasks");
