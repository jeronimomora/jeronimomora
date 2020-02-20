import React, { useEffect, useRef } from 'react'
import {
    Scene,
    Mesh, 
    MeshPhongMaterial,
    OrthographicCamera, 
    BoxBufferGeometry, 
    AmbientLight, 
    WebGLRenderer, 
    PointLight
} from 'three'

const Viewer = (props: any) => {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scene = new Scene()

        const boxGeometry = new BoxBufferGeometry(50, 50, 50)
        const boxMaterial = new MeshPhongMaterial({
            color: 'red'
        })
        const box = new Mesh(boxGeometry, boxMaterial)

        scene.add(box)

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
        camera.position.set(100, 100, 100)
        camera.lookAt(0, 0, 0)
        camera.updateProjectionMatrix()

        const pointLight = new PointLight('white', 2, 500)
        camera.add(pointLight)
        scene.add(camera)

        const render = () => {
            box.rotation.x += 0.1
            box.rotation.y += 0.1
            box.rotation.z += 0.1
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
                width: '50%',
                minHeight: '300px',
            }} 
            ref={divRef}
        >
        </div>)
}

export default Viewer