import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const HomePage = () => {
  const ref = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x404040);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 0.6;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.update();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // スポットライトを追加
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.intensity = 0.2;
    spotLight.penumbra = 1;
    spotLight.decay = 2;
    spotLight.position.set(0, 0, 1); // カメラと同じ高さに設定
    spotLight.castShadow = true;
    scene.add(spotLight);

    const spotLightTarget = new THREE.Object3D();
    scene.add(spotLightTarget);
    spotLight.target = spotLightTarget;

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.1/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      `${process.env.PUBLIC_URL}/model/blapome_far_mesh.glb`,
      function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        model.rotation.set(Math.PI / 2, Math.PI / 2, 0);
        scene.add(model);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    const onMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      spotLightTarget.position.set(pos.x, pos.y, 0); // スポットライトのターゲット位置を更新
    };

    window.addEventListener('mousemove', onMouseMove);

    const onWindowResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      ref.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref}></div>;
};

export default HomePage;
