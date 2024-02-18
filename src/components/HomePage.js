import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const HomePage = () => {
  const ref = useRef();

  useEffect(() => {
    // シーン、カメラ、レンダラーの初期化
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x404040);
    // 3. カメラを作成する
    const camera = new THREE.PerspectiveCamera(
        75, // 視野角
        window.innerWidth / window.innerHeight, // アスペクト比
        0.1, // ニアクリップ面
        1000 // ファークリップ面
    );
    camera.position.z = 0.5; // カメラの位置を設定する

    // 4. レンダラーを作成する
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.5;
    controls.update(); // 初期化時に一度だけ呼び出す

    // AmbientLightを追加する
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // スポットライトを追加
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(-1, 2, 1); // 斜め左上からの位置
    scene.add(spotLight);

    // 5. GLTFLoaderを作成する
    const loader = new GLTFLoader();

    const dracoLoader = new DRACOLoader(); // DRACOLoaderのインスタンスを作成
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.1/');
    loader.setDRACOLoader(dracoLoader); // GLTFLoaderにDRACOLoaderのインスタンスを提供

    // 6. 3Dモデルのロード＆描画
    let model = null;
    loader.load(
      `${process.env.PUBLIC_URL}/model/blapome_far_mesh.glb`,
        function (gltf) {
            model = gltf.scene;
            model.position.set(0,0,0)
            model.rotation.set(Math.PI/2,Math.PI/2,0); 
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

  // リサイズイベントのハンドリング
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // クリーンアップ関数
  return () => {
  };
}, []);

return <div ref={ref}></div>;
}

export default HomePage;
