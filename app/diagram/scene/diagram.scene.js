import DiagramService from '../shared/diagram.service';

var DiagramScene = (function() {
  var _camera, _controls, _isAnimating, _mesh, _renderer, _scene;
  var _loader = new THREE.TextureLoader();

  // Return API
  return {
    /* properties */
    model: null,
    /* methods */
    init: init,
    addGeometry: addGeometry,
    animate: animate,
    loadModel: loadModel,
    generateCube: generateCube,
    generateDiagram: generateDiagram,
    generateSphere: generateSphere,
    renderDiagram: renderDiagram,
    updateDiagram: updateDiagram
  };

  /**
   * Initializes the Diagram Module.
   * 
   * @method init
   * @chainable
   * @since 0.0.1
   */
  function init(params) {
    // make sure params is available and has proper attributes
    if(!params) {
      throw 'Missing Params';
    }

    this.loadModel();

    if(!params.width) {
      throw 'params.width missing';
    }
    
    var width = params.width;
    var height = params.height || '400';

    /* Setup Scene */
    _scene = new THREE.Scene();
    /* Seup Camera */
    _camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

    /* Setup Renderer */
    _renderer = new THREE.WebGLRenderer();
    // make sure the renderer canvas is the same size as our module element
    _renderer.setPixelRatio(window.devicePixelRatio);
    _renderer.setSize(width, height);

    // apply the renderer's canvas element to the page
    // make sure element is in params
    if(!params.element) {
      throw 'params.element not found';
    }

    params.element.appendChild(_renderer.domElement);

    /* Setup Controls */
    _controls = new THREE.OrbitControls(_camera, _renderer.domElement);
    // re-render when a change event occurs within the controls
    _controls.addEventListener('change', this.renderDiagram);

    // generate starting shape in DiagramService
    this.generateDiagram();

    // run animate for the first time
    this.renderDiagram().animate();

    // return this for chaining
    return this;
  }

  /**
   * Adds the specified geometry to the scene.
   * 
   * @method addGeometry
   * @param {THREE.Geometry} geometry the geometry instance to apply colored mesh to.
   * @chainable
   */
  function addGeometry(geometry) {
    _loader.load(this.model.texture.url, (texture) => {
      let material = new THREE.MeshBasicMaterial({
        map: texture,
        color: this.model.color.value
      });

      _mesh = new THREE.Mesh(geometry, material);
      _scene.add(_mesh);

      // render the diagram once finished the loading process
      this.renderDiagram();
    }, (xhr) => {
      console.info('Loading Texture: ' + xhr.loaded / xhr.total * 100 + '% loaded');
    }, (xhr) => {
      console.error('Error Loading Texture');
    });

    return this;
  }

  /**
   * Updates the controls during each animation proccess.
   * 
   * @method animate
   * @chainable
   * @since 0.0.1
   */
  function animate() {
    // only start the request animation frame process once
    if (!_isAnimating) {
      // request that this method calls itself after each animation frame
      window.requestAnimationFrame(animate);
      _isAnimating = true;
    }

    // make sure we check if the controls have been updated
    _controls.update();

    // return this for chaining
    return this;
  }

  /**
   * Generates the diagram based on the currently loaded diagram model.
   * 
   * @method generateDiagram
   * @chainable
   * @since 0.0.1
   */
  function generateDiagram() {
    if (!this.model) {
      throw 'Diagram Model Not Found';
    }

    switch (this.model.shape.slug) {
      case 'cube':
        this.generateCube();

        break;

      case 'sphere':
        this.generateSphere();

        break;

      default:
        throw 'Shape Not Supported';
    }

    return this;
  }

  /**
   * Generates a cube geometry instance.
   * 
   * @method generateCube
   * @chainable
   * @since 0.0.1
   */
  function generateCube() {
    var geometry = new THREE.CubeGeometry(100, 100, 100);

    this.addGeometry(geometry);
    _camera.position.z = 500;

    return this;
  }

  /**
   * Generates a sphere geometry instance.
   * 
   * @method generateSphere
   * @chainable
   * @since 0.0.1
   */
  function generateSphere() {
    var geometry = new THREE.SphereGeometry(5, 32, 32);

    this.addGeometry(geometry);

    _camera.position.z = 30;

    return this;
  }

  /**
   * Loads the model for the scene.
   * 
   * @method loadModel
   */
  function loadModel() {
    this.model = DiagramService.get();
  }

  /**
   * Renders the diagram with the scene and camera.
   * 
   * @method renderDiagram
   * @chainable
   * @since 0.0.1
   */
  function renderDiagram() {
    _renderer.render(_scene, _camera);

    return this;
  }

  /**
   * Updates the diagram to match the updated model.
   * 
   * @method updateDiagram
   * @chainable
   * @since 0.0.1
   */
  function updateDiagram() {
    // remove current mesh from scene to be replaced
    if (_mesh) {
      _scene.remove(_mesh);
      _mesh.geometry.dispose();
      _mesh.material.dispose();
      _mesh = null;
    }

    // re - generate diagram
    return this.generateDiagram().renderDiagram().animate();
  }
}());

export default DiagramScene;
