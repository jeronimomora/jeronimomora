import { 
    useRef,
    useEffect,
    RefObject
} from 'react'
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
    Group,
    Vector2,
    Raycaster,
} from 'three'

class BoxWithDefaultColor extends Mesh {
    defaultColor: string
    constructor(
        sideSize: number,
        defaultColor: string
    ){
        const boxGeometry = new BoxBufferGeometry(sideSize, sideSize, sideSize)
        const boxMaterial = new MeshPhongMaterial({
            color: defaultColor
        })
        super(boxGeometry, boxMaterial)
        this.defaultColor = defaultColor
    }
}

const ACTIVE_COLOR = 'purple'

const colorBox = (box: BoxWithDefaultColor, color?: string) => {
    (box.material as MeshPhongMaterial).color = new Color(color || box.defaultColor)
}

const updateRendererAndCamera = (
    renderer: WebGLRenderer, 
    camera: OrthographicCamera,
) => {
    const { clientHeight: height, clientWidth: width } = renderer.domElement

    renderer.setSize(width, height, false)
    camera.left = -width / 2
    camera.right = width / 2
    camera.top = height / 2
    camera.bottom = - height / 2
    camera.updateProjectionMatrix()
}

export const useViewer = (divRef:RefObject<HTMLDivElement>) => {

    const hoveredBox = useRef<BoxWithDefaultColor | null>(null)
    const previousBox = useRef<BoxWithDefaultColor | null>(null)
    const doRaycast = useRef<boolean>(false)
    
    useEffect(() => {
        const scene = new Scene()

        const box = new BoxWithDefaultColor(50, 'red')
        const box2 = new BoxWithDefaultColor(50, 'green');
        const box3 = new BoxWithDefaultColor(50, 'blue');

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

        // values are defaults for construction of object. to be resized later
        const camera = new OrthographicCamera(
            -1,
            1,
            1,
            -1,
            1,
            1000
        )

        // defaults
        if (divRef?.current) {
            renderer.domElement.width = divRef.current.clientWidth
            renderer.domElement.height = divRef.current.clientHeight
            divRef.current.appendChild(renderer.domElement)
        }

        updateRendererAndCamera(renderer, camera)

        camera.position.set(200, 200, 200)
        camera.lookAt(0, 0, 0)
        camera.updateProjectionMatrix()

        const pointLight = new PointLight('white', 2, 500)
        camera.add(pointLight)
        scene.add(camera)

        const mouse = new Vector2()
        const raycaster = new Raycaster()

        renderer.domElement.addEventListener('mousemove', (event) => {

            const canvas = renderer.domElement
            const boundingRect = canvas.getBoundingClientRect()
            mouse.x = ((event.clientX - boundingRect.left)/canvas.width) * 2 - 1;
            mouse.y = -((event.clientY - boundingRect.top)/ canvas.height ) * 2 + 1;

        })

        renderer.domElement.addEventListener('mouseenter', (event) => {
            doRaycast.current = true
        })

        renderer.domElement.addEventListener('mouseleave', (event) => {
            doRaycast.current = false
        })
        
        renderer.domElement.addEventListener('wheel', (event) => {
            const canvas = renderer.domElement
            const boundingRect = canvas.getBoundingClientRect()
            mouse.x = ((event.clientX - boundingRect.left)/canvas.width) * 2 - 1;
            mouse.y = -((event.clientY - boundingRect.top)/ canvas.height ) * 2 + 1;
        })

        window.addEventListener('resize' , () => {
            updateRendererAndCamera(renderer, camera)
        })

        const rotateBox = (mesh: THREE.Object3D) => {
            mesh.rotation.x += 0.05
            mesh.rotation.y += 0.05
            mesh.rotation.z += 0.05
        }

        const render = () => {

            if(doRaycast.current){

                raycaster.setFromCamera( mouse, camera );
            
                const intersectObjects = raycaster.intersectObjects( boxGroup.children );

                previousBox.current = hoveredBox.current
                if(intersectObjects.length){
                    const intersectedBox = intersectObjects[0].object as BoxWithDefaultColor
                    hoveredBox.current = intersectedBox
                    
                }else {
                    hoveredBox.current = null
                }
                
                const doColor = previousBox.current?.uuid !== hoveredBox.current?.uuid

                if(previousBox.current && doColor){
                    colorBox(previousBox.current)
                }

                if(hoveredBox.current && doColor){
                    colorBox(hoveredBox.current, ACTIVE_COLOR)
                }
            }

            if(!hoveredBox.current){            
                rotateBox(box)
                rotateBox(box2)
                rotateBox(box3)
                rotateBox(boxGroup)
            }
            else{
                rotateBox(hoveredBox.current)
            }

            renderer.render(scene, camera)
        }

        const animate = () => {
            render()
            window.requestAnimationFrame(animate)
        }

        animate()

    }, [divRef])
}