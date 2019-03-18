/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLMultisampleRenderTarget, WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, DataTexture3D, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, AnimationLoader, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, PositionalAudioHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ImageUtils, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, CubeGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, MeshMatcapMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, ACESFilmicToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RedFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, Projector, CanvasRenderer, JSONLoader, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/gate-mesh.js":
/*!**************************!*\
  !*** ./src/gate-mesh.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GateMesh; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nfunction makeTextSprite (message, parameters = {\r\n  fontface: 'Arial',\r\n  fontsize: 18,\r\n  borderThickness: 4,\r\n  borderColor: { r: 0, g: 0, b: 0, a: 1.0 },\r\n  backgroundColor: { r: 255, g: 255, b: 255, a: 1.0 }\r\n}) {\r\n  const { fontface, fontsize, borderThickness, borderColor, backgroundColor } = parameters\r\n  const canvas = document.createElement('canvas')\r\n  const context = canvas.getContext('2d')\r\n  context.font = 'Bold ' + fontsize + 'px ' + fontface\r\n\r\n  // get size data (height depends only on font size)\r\n  const textWidth = context.measureText(message).width\r\n\r\n  // background color\r\n  context.fillStyle = toRGBA(backgroundColor)\r\n  // border color\r\n  context.strokeStyle = toRGBA(borderColor)\r\n  context.lineWidth = borderThickness\r\n\r\n  // 1.4 is extra height factor for text below baseline: g,j,p,q.\r\n  drawRoundedRectangle(context, borderThickness / 2, borderThickness / 2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6)\r\n\r\n  // text color\r\n  context.fillStyle = 'rgba(0, 0, 0, 1.0)'\r\n  context.fillText(message, borderThickness, fontsize + borderThickness)\r\n\r\n  // canvas contents will be used for a texture\r\n  const texture = new three__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"](canvas)\r\n  texture.needsUpdate = true\r\n  const sprite = new three__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"](new three__WEBPACK_IMPORTED_MODULE_0__[\"SpriteMaterial\"]({ map: texture }))\r\n  sprite.scale.set(textWidth, fontsize * 3, 1.0)\r\n\r\n  return sprite\r\n}\r\n\r\nfunction toRGBA (color) {\r\n  const { r, g, b, a } = color\r\n  return `rgba(${r}, ${g}, ${b}, ${a})`\r\n}\r\n\r\nfunction drawRoundedRectangle (ctx, x, y, w, h, r) {\r\n  ctx.beginPath()\r\n  ctx.moveTo(x + r, y)\r\n  ctx.lineTo(x + w - r, y)\r\n  ctx.quadraticCurveTo(x + w, y, x + w, y + r)\r\n  ctx.lineTo(x + w, y + h - r)\r\n  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)\r\n  ctx.lineTo(x + r, y + h)\r\n  ctx.quadraticCurveTo(x, y + h, x, y + h - r)\r\n  ctx.lineTo(x, y + r)\r\n  ctx.quadraticCurveTo(x, y, x + r, y)\r\n  ctx.closePath()\r\n  ctx.fill()\r\n  ctx.stroke()\r\n}\r\n\r\nclass GateMesh {\r\n  create (scene, position, message) {\r\n    const { x, y, z } = position\r\n    // square with some texture\r\n    const texture = new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]().load('assets/images/crate.gif')\r\n    const crateMaterial = new three__WEBPACK_IMPORTED_MODULE_0__[\"SpriteMaterial\"]({ map: texture })\r\n    const sprite = new three__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"](crateMaterial)\r\n    sprite.position.set(x, y, z)\r\n    sprite.scale.set(50, 50, 1.0)\r\n    sprite.name = 'crate-sprite'\r\n\r\n    // add some text\r\n    const text = makeTextSprite(` ${message} `)\r\n    text.position.set(x, y, z)\r\n    text.name = 'text-sprite'\r\n\r\n    scene.add(sprite)\r\n    scene.add(text)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/gate-mesh.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _gate_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gate-mesh */ \"./src/gate-mesh.js\");\n/* harmony import */ var _panorama_mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panorama-mesh */ \"./src/panorama-mesh.js\");\n/* global FileReader, requestAnimationFrame */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]()\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](70, window.innerWidth / window.innerHeight, 1, 1000)\r\ncamera.target = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 0)\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]()\r\nrenderer.setPixelRatio(window.devicePixelRatio)\r\nrenderer.setSize(window.innerWidth, window.innerHeight)\r\n\r\n\r\nvar isUserInteracting = false\r\n\r\nvar onMouseDownMouseX = 0; var onMouseDownMouseY = 0\r\n\r\nvar lon = 0; var onMouseDownLon = 0\r\n\r\nvar lat = 0; var onMouseDownLat = 0\r\n\r\nvar phi = 0; var theta = 0\r\n\r\nconst panoramas = [\r\n  'assets/images/entrance.jpg',\r\n  'assets/images/kitchen.jpg',\r\n  'assets/images/bedroom.jpg',\r\n  'assets/images/bathroom.jpg'\r\n]\r\nlet panoramaIndex = 0\r\n\r\ninitCube()\r\ninit()\r\nanimate()\r\n\r\nfunction initCube () {\r\n  const gateMesh = new _gate_mesh__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n  gateMesh.create(scene, new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](175, 0, -300), 'Habitación')\r\n}\r\n\r\nfunction init () {\r\n  const panorama = new _panorama_mesh__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n  panorama.create(scene, panoramas[panoramaIndex])\r\n\r\n  const container = document.getElementById('container')\r\n  container.appendChild(renderer.domElement)\r\n\r\n  document.addEventListener('mousedown', onPointerStart, false)\r\n  document.addEventListener('mousemove', onPointerMove, false)\r\n  document.addEventListener('mouseup', onPointerUp, false)\r\n\r\n  document.addEventListener('wheel', onDocumentMouseWheel, false)\r\n\r\n  document.addEventListener('touchstart', onPointerStart, false)\r\n  document.addEventListener('touchmove', onPointerMove, false)\r\n  document.addEventListener('touchend', onPointerUp, false)\r\n\r\n  //\r\n\r\n  document.addEventListener('dragover', function (event) {\r\n    event.preventDefault()\r\n    event.dataTransfer.dropEffect = 'copy'\r\n  }, false)\r\n\r\n  document.addEventListener('dragenter', function () {\r\n    document.body.style.opacity = 0.5\r\n  }, false)\r\n\r\n  document.addEventListener('dragleave', function () {\r\n    document.body.style.opacity = 1\r\n  }, false)\r\n\r\n  document.addEventListener('drop', function (event) {\r\n    event.preventDefault()\r\n\r\n    const reader = new FileReader()\r\n    reader.addEventListener('load', function (event) {\r\n      panorama.update(event.target.result)\r\n    }, false)\r\n    reader.readAsDataURL(event.dataTransfer.files[0])\r\n\r\n    document.body.style.opacity = 1\r\n  }, false)\r\n\r\n  document.onkeyup = function (event) {\r\n    panoramaIndex = (panoramaIndex + 1) % panoramas.length\r\n    panorama.update(panoramas[panoramaIndex])\r\n  }\r\n\r\n  //\r\n\r\n  window.addEventListener('resize', onWindowResize, false)\r\n}\r\n\r\nfunction onWindowResize () {\r\n  camera.aspect = window.innerWidth / window.innerHeight\r\n  camera.updateProjectionMatrix()\r\n\r\n  renderer.setSize(window.innerWidth, window.innerHeight)\r\n}\r\n\r\nfunction onPointerStart (event) {\r\n  isUserInteracting = true\r\n\r\n  var clientX = event.clientX || event.touches[0].clientX\r\n  var clientY = event.clientY || event.touches[0].clientY\r\n\r\n  onMouseDownMouseX = clientX\r\n  onMouseDownMouseY = clientY\r\n\r\n  onMouseDownLon = lon\r\n  onMouseDownLat = lat\r\n}\r\n\r\nfunction onPointerMove (event) {\r\n  if (isUserInteracting === true) {\r\n    var clientX = event.clientX || event.touches[0].clientX\r\n    var clientY = event.clientY || event.touches[0].clientY\r\n\r\n    lon = (onMouseDownMouseX - clientX) * 0.1 + onMouseDownLon\r\n    lat = (clientY - onMouseDownMouseY) * 0.1 + onMouseDownLat\r\n  }\r\n\r\n  // detect intersections\r\n  const mouseX = (event.clientX / window.innerWidth) * 2 - 1\r\n  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1\r\n\r\n  var vector = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](mouseX, mouseY, 1)\r\n  vector.unproject(camera)\r\n  var ray = new three__WEBPACK_IMPORTED_MODULE_0__[\"Raycaster\"](camera.position, vector.sub(camera.position).normalize())\r\n  // create an array containing all objects in the scene with which the ray intersects\r\n  var intersects = ray.intersectObjects(scene.children)\r\n\r\n  for (var i = 0; i < intersects.length; i++) {\r\n    if (intersects[i].object.name === 'crate-sprite') {\r\n      console.log('Detected')\r\n    }\r\n  }\r\n}\r\n\r\nfunction onPointerUp () {\r\n  isUserInteracting = false\r\n}\r\n\r\nfunction onDocumentMouseWheel (event) {\r\n  var fov = camera.fov + event.deltaY * 0.05\r\n\r\n  camera.fov = three__WEBPACK_IMPORTED_MODULE_0__[\"Math\"].clamp(fov, 10, 75)\r\n\r\n  camera.updateProjectionMatrix()\r\n}\r\n\r\nfunction animate () {\r\n  requestAnimationFrame(animate)\r\n  update()\r\n}\r\n\r\nfunction update () {\r\n  if (isUserInteracting === false) {\r\n    lon += 0.1\r\n  }\r\n\r\n  lat = Math.max(-85, Math.min(85, lat))\r\n  phi = three__WEBPACK_IMPORTED_MODULE_0__[\"Math\"].degToRad(90 - lat)\r\n  theta = three__WEBPACK_IMPORTED_MODULE_0__[\"Math\"].degToRad(lon)\r\n\r\n  camera.target.x = 500 * Math.sin(phi) * Math.cos(theta)\r\n  camera.target.y = 500 * Math.cos(phi)\r\n  camera.target.z = 500 * Math.sin(phi) * Math.sin(theta)\r\n\r\n  camera.lookAt(camera.target)\r\n\r\n  renderer.render(scene, camera)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/panorama-mesh.js":
/*!******************************!*\
  !*** ./src/panorama-mesh.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PanoramaMesh; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass PanoramaMesh {\r\n  constructor() {\r\n    this.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]()\r\n    this.material = null\r\n  }\r\n\r\n  create(scene, imagePath) {\r\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereBufferGeometry\"](500, 60, 40)\r\n\r\n    // invert the geometry on the x-axis so that all of the faces point inward\r\n    geometry.scale(-1, 1, 1)\r\n\r\n    const texture = this.textureLoader.load(imagePath)\r\n    const material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({ map: texture})\r\n    const mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material)\r\n    mesh.name = 'panorama'\r\n\r\n    this.material = material\r\n    scene.add(mesh)\r\n  }\r\n\r\n  update(newImagePath) {\r\n    this.material.map = this.textureLoader.load(newImagePath)\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/panorama-mesh.js?");

/***/ })

/******/ });