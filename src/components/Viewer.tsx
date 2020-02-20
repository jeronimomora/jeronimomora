import React, { useEffect, useRef } from 'react'
import {
    Scene,
    Mesh, 
    MeshPhongMaterial,
    OrthographicCamera, 
    BoxBufferGeometry, 
    AmbientLight, 
    WebGLRenderer, 
    PointLight,
    Color,
    Vector3,
    Group
} from 'three'

const Viewer = (props: any) => {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scene = new Scene()

        const boxGeometry = new BoxBufferGeometry(50, 50, 50)
        const boxMaterial = new MeshPhongMaterial({
            color: 'red'
        })
        const box = new Mesh(boxGeometry, boxMaterial);
        const box2 = new Mesh(boxGeometry, boxMaterial.clone());
        const box3 = new Mesh(boxGeometry, boxMaterial.clone());

        (box2.material as MeshPhongMaterial).color = new Color('green');
        (box3.material as MeshPhongMaterial).color = new Color('blue');

        box2.position.sub(new Vector3(100, 50, 50))
        box3.position.add(new Vector3(100, 50, 50))

        const boxGroup = new Group()

        boxGroup.add(box)
        boxGroup.add(box2)
        boxGroup.add(box3)

        scene.add(boxGroup)

        const ambientLight = new AmbientLight(0x404040) // soft white light
        scene.add(ambientLight)
        scene.background = null

        const renderer = new WebGLRenderer({
            antialias: true,
            alpha: true
        })
        renderer.setClearColor(0x000000, 0)

        // defaults
        let width = 100
        let height = 100
        if (divRef && divRef.current) {
            width = divRef.current.clientWidth
            height = divRef.current.clientHeight
            divRef.current.appendChild(renderer.domElement)
        }
        renderer.setSize(width, height, false)

        const camera = new OrthographicCamera(
            -width / 2,
            width / 2,
            height / 2,
            -height / 2,
            1,
            1000
        )
        camera.position.set(200, 200, 200)
        camera.lookAt(0, 0, 0)
        camera.updateProjectionMatrix()

        const pointLight = new PointLight('white', 2, 500)
        camera.add(pointLight)
        scene.add(camera)

        const rotateBox = (mesh: THREE.Object3D) => {
            mesh.rotation.x += 0.05
            mesh.rotation.y += 0.05
            mesh.rotation.z += 0.05
        }

        const render = () => {
            rotateBox(box)
            rotateBox(box2)
            rotateBox(box3)
            rotateBox(boxGroup)
            renderer.render(scene, camera)
        }

        const animate = () => {
            render()
            window.requestAnimationFrame(animate)
        }

        animate()

    }, [])

    return (
        <div 
            style={{ 
                width: '75%',
                minHeight: '300px',
            }} 
            ref={divRef}
        >
        </div>)
}

export default Viewer