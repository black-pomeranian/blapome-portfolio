import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HomePage = () => {
  const ref = useRef();

  useEffect(() => {
    // シーン、カメラ、レンダラーの初期化
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    // オブジェクトの追加（例：単純な立方体）
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // アニメーションループ
    const animate = () => {
      requestAnimationFrame(animate);

      // オブジェクトのアニメーション
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // リサイズイベントのハンドリング
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // クリーンアップ関数
    return () => {
      ref.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref}></div>;
}

export default HomePage;
