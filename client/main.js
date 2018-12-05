import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import "./main.html";

import App from "../imports/ui/App.js";

Meteor.startup(() => {
  /* Usando o método render, estou renderizando para o front, o que vem do método App importado da pasta impotts/ui/App e inserindo na div render-target */
  render(<App />, document.getElementById("render-target"));
});
