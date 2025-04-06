"use strict";

import * as THREE from 'three';
import { GLTFLoader } from 'three/GLTFLoader.js';
import { OrbitControls } from 'three/OrbitControls.js';

// 初始化场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-3, 2, 0);

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-container-hello').appendChild(renderer.domElement);

// 添加平行光
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// 加载模型文件
const loader = new GLTFLoader();
loader.load(
'model.gltf',
(gltf) => {
scene.add(gltf.scene); // 将加载的模型加入场景
controls.update(); // 模型加载后更新控制器
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
controls.target.set(-5, 1, 0);

// 渲染动画循环
const animate = () => {
requestAnimationFrame(animate);
controls.update();
renderer.render(scene, camera);
};

animate();