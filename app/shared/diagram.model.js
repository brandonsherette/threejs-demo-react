/**
 * Basic Model Construct for the Diagram.
 * 
 * @class DiagramModel
 * 
 * @author Brandon Sherette
 * 
 * @version 0.0.1
 * @since 0.0.1
 */
var DiagramModel = class DiagramModel {
  constructor(properties) {
    this.color = null;
    this.shape = null;
    this.texture = null;

    if(properties) {
      this.color = properties.color || null;
      this.shape = properties.shape || null;
      this.texture = properties.texture || null;
    }
  }
}

export default DiagramModel;
