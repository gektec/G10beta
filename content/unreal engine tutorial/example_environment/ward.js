"use strict";

import * as THREE from 'three';
import { GLTFLoader } from 'three/GLTFLoader.js';
import { OrbitControls } from 'three/OrbitControls.js';

// 初始化场景
const scene = new THREE.Scene();

const width = 1200;
const height = 800; 

// 创建相机
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(-5, 3, 0);

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(width, height);
renderer.shadowMap.enabled = true; 
document.getElementById('threejs-container-hello').appendChild(renderer.domElement);


// 添加平行光
const light = new THREE.DirectionalLight(0xffffff, 5);
light.position.set(-10, 3, -5).normalize();
light.castShadow = true;
scene.add(light);

// 添加环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

// 加载模型文件
const loader = new GLTFLoader();
loader.load(
    'scene.gltf',
    (gltf) => {

      
      scene.add(gltf.scene); // 将加载的模型加入场景
      controls.update();    // 模型加载后更新控制器
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error);
    }
  );

// 添加 OrbitControls 控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // 启用阻尼效果
controls.dampingFactor = 0.25;
controls.screenSpacePanning = true; // 允许屏幕空间平移
controls.minDistance = 1; // 最小缩放距离
controls.maxDistance = 100; // 最大缩放距离
controls.target.set(-10, 0, 0);

// 渲染动画循环
const animate = () => {
requestAnimationFrame(animate);
controls.update();
renderer.render(scene, camera);
};

animate();