import * as THREE from 'three'
import React from 'react'
import '../styles/Visualization.css'

const generateColors = (numInstances) => {
	const colors = new Float32Array( numInstances * 3 );
	for(let i = 0; i < numInstances*3; ++i){
		colors[i] = Math.random()
	}
	return colors
}

export default class Visualization extends React.Component {
	componentDidMount(){
		this.count = 0
		this.scene = new THREE.Scene();
		const width = window.innerWidth
		const height = window.innerHeight
		//const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
		this.camera = new THREE.PerspectiveCamera( 20, width / height, 1, 1000 );
		this.camera.zoom = 1
		this.camera.updateProjectionMatrix()

		this.renderer = new THREE.WebGLRenderer({ canvas: this.props.div, antialias: true });
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( width, height );
	    this.mount.appendChild(this.renderer.domElement)
		this.scene.background = new THREE.Color('black')

		this.camera.position.z = 600;

		this.amount = 3000;
		
		const radius = 200;
		const positions = new Float32Array( this.amount * 3 );
		const sizes = new Float32Array( this.amount );
		
		var vertex = new THREE.Vector3();
		for ( var i = 0; i < this.amount; i ++ ) {
			vertex.x = ( Math.random() * 2 - 1 ) * radius;
			vertex.y = ( Math.random() * 2 - 1 ) * radius;
			vertex.z = ( Math.random() * 2 - 1 ) * radius;
			vertex.toArray( positions, i * 3 );
			sizes[ i ] = 10;
		}

		const geometry = new THREE.BufferGeometry();
		geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
		geometry.addAttribute( 'customColor', new THREE.BufferAttribute( generateColors(this.amount), 3 ) );
		geometry.addAttribute( 'size', new THREE.BufferAttribute( sizes, 1 ) );
		const material = new THREE.ShaderMaterial( {

			uniforms: {
				color: { value: new THREE.Color( 0xffffff ) },
			},
			vertexShader: `
				attribute float size;
				attribute vec3 customColor;
				varying vec3 vColor;
				void main() {
					vColor = customColor;
					vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
					gl_PointSize = size * ( 300.0 / -mvPosition.z );
					gl_Position = projectionMatrix * mvPosition;
				}
			`,
			fragmentShader: `
				uniform vec3 color;
				varying vec3 vColor;
				void main() {
					if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
					gl_FragColor = vec4( color * vColor, 1.0 );
				}
			`,
		} );

		this.points = new THREE.Points( geometry, material );
		this.scene.add( this.points );

		window.points = this.points
		this.start()
		window.addEventListener( 'resize', this.onWindowResize, false );
	}
	componentWillUnmount(){
	    this.stop()
	    this.mount.removeChild(this.renderer.domElement)
		window.removeEventListener( 'resize', this.onWindowResize, false );

	}
	start = () => {
	    if (!this.frameId) {
	      this.frameId = requestAnimationFrame(this.animate)
	    }
	}
	stop = () => {
	    cancelAnimationFrame(this.frameId)
	}
	onWindowResize = () => {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
	}
	animate = () => {
	    for(let i = 0; i < this.amount; ++i){
   			this.points.geometry.attributes.size.array[i]  = Math.sin( ( i + this.count ) ) * 3 + 15
	    }
	    this.points.geometry.attributes.size.needsUpdate = true;
	    this.count += 0.1
	    this.renderScene()
	    this.frameId = window.requestAnimationFrame(this.animate)
	}
	renderScene = () => {
		this.renderer.render(this.scene, this.camera)
	}
	render(){
	    return(
	      <div
	        ref={(mount) => { this.mount = mount }}
	      />
	    )
	  }
}