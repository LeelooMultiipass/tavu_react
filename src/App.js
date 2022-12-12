import "./styles.css";

import React from "react";
import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel
} from "@projectstorm/react-diagrams";

import { CanvasWidget } from "@projectstorm/react-canvas-core";

// create an instance of the engine with all the defaults
//  créer une instance du moteur avec toutes les valeurs par défaut
const engine = createEngine();

// node 1
const node1 = new DefaultNodeModel({
  name: "Node 1",
  text: "Hello word",
  color: "rgb(0,192,255)"
});
node1.setPosition(100, 100);
let port1 = node1.addOutPort("Out");
let port3 = node1.addInPort("In");

// node 2
const node2 = new DefaultNodeModel({
  name: "Node 1",
  color: "rgb(0,192,255)"
});
node2.setPosition(100, 100);
let port2 = node2.addInPort("In");

//  link them and add a label to the link
// les lier et ajouter une étiquette au lien
const link = new DefaultLinkModel();
link.setSourcePort(port1);
link.setTargetPort(port3);
link.setTargetPort(port2);

const model = new DiagramModel();
model.addAll(node1, node2);
engine.setModel(model);

class App extends React.Component {
  render() {
    return <CanvasWidget className="canvas" engine={engine} />;
  }
}

export default App;
