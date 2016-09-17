import PubSub from 'pubsub-js';

/* Configs */
import ColorConfig from '../configs/color.config';
import ShapeConfig from '../configs/shape.config';
import TextureConfig from '../configs/texture.config';

/* Models */
import DiagramModel from  '../models/diagram.model';

/**
  * Diagram service
  * 
  * Provides service for Diagram Model Operations through out the component.
  *
  * @class DiagramService
  * @author Brandon Sherette
  * @version 0.0.1
  * @since 0.0.1
  */
var DiagramService = (function () {
  'use strict';

  var _cache = null;

  // Return API
  return {
    /* Methods */
    createModel: createModel,
    get: get,
    updateOption: updateOption
  };

  /**
   * Creates a new Model instance.
   * 
   * @method createModel
   * @return the newly created model instance.
   * @since 0.0.1
   */
  function createModel() {
    var model = new DiagramModel({
      color: ColorConfig[0],
      shape: ShapeConfig[0],
      texture: TextureConfig[0]
    });

    return model;
  }

  /**
   * Gets the currently cached model, otherwise creates a new instance.
   * 
   * TODO: Add functionality for page / model state.
   * 
   * @method get
   * @return {DiagramModel} an instance of DiagramModel.
   * @since 0.0.1
   */
  function get() {
    // TODO: Add functionality for fetching model state from localstorge / session

    // check to use the cached model or not
    if (!_cache) {
      _cache = this.createModel();
    }

    return _cache;
  }

  function updateOption(optionType, optionId) {
    var config;
    var optionConfig;

    switch(optionType) {
      case 'color':
        config = ColorConfig;
        break;

      case 'shape':
        config = ShapeConfig;
        break;

      case 'texture':
        config = TextureConfig;
        break;
    }

    // find configuration object data
    for(let x = 0; x < config.length; x += 1) {
      optionConfig = config[x];

      if(optionConfig.id === optionId) {
        // found match
        _cache[optionType] = optionConfig;
        
        break;
      }
    }

    // publish a model update event with data on which option was updated
    PubSub.publish('model.diagram:change', {
      optionType: optionType,
      optionId: optionId,
      optionConfig: optionConfig
    });
  }
} ());

export default DiagramService;
