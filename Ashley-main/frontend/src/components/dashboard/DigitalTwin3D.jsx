import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const FLAG_COLORS = {
  critical: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
  success: '#10b981',
};

const createZone = (zone) => {
  const geometry = new THREE.BoxGeometry(zone.size[0], zone.size[1], zone.size[2]);
  const material = new THREE.MeshLambertMaterial({
    color: zone.color || '#64748b',
    transparent: true,
    opacity: 0.85,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(zone.position[0], zone.position[1], zone.position[2]);
  mesh.userData = { type: 'zone', ...zone };
  return mesh;
};

const createFlag = (flag) => {
  const geometry = new THREE.ConeGeometry(0.35, 1.1, 16);
  const material = new THREE.MeshBasicMaterial({
    color: FLAG_COLORS[flag.severity] || '#3b82f6',
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(flag.position[0], flag.position[1], flag.position[2]);
  mesh.rotation.x = Math.PI;
  mesh.userData = { type: 'flag', ...flag };
  return mesh;
};

const createLabelSprite = (text, options = {}) => {
  const padding = options.padding ?? 12;
  const fontSize = options.fontSize ?? 36;
  const bgColor = options.bgColor ?? 'rgba(15, 23, 42, 0.75)';
  const textColor = options.textColor ?? '#f8fafc';
  const borderColor = options.borderColor ?? 'rgba(148, 163, 184, 0.8)';

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return null;

  context.font = `600 ${fontSize}px "Space Grotesk", "Inter", sans-serif`;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(fontSize * 1.2);

  canvas.width = textWidth + padding * 2;
  canvas.height = textHeight + padding * 2;

  context.font = `600 ${fontSize}px "Space Grotesk", "Inter", sans-serif`;
  context.fillStyle = bgColor;
  context.strokeStyle = borderColor;
  context.lineWidth = 3;
  context.beginPath();
  if (typeof context.roundRect === 'function') {
    context.roundRect(2, 2, canvas.width - 4, canvas.height - 4, 10);
  } else {
    context.rect(2, 2, canvas.width - 4, canvas.height - 4);
  }
  context.fill();
  context.stroke();
  context.fillStyle = textColor;
  context.textBaseline = 'middle';
  context.fillText(text, padding, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 4;
  texture.needsUpdate = true;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(canvas.width / 90, canvas.height / 90, 1);
  return sprite;
};

export const DigitalTwin3D = ({ title, subtitle, layout }) => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const [selectedFlag, setSelectedFlag] = useState(null);
  const [isWebGLReady, setIsWebGLReady] = useState(true);
  const flagMeshesRef = useRef({});

  useEffect(() => {
    if (!mountRef.current) return;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl', {
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });

    if (!context) {
      setIsWebGLReady(false);
      return undefined;
    }

    let renderer;
    let scene;
    let camera;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, context });
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      scene = new THREE.Scene();
      scene.background = new THREE.Color('#0f172a');

      camera = new THREE.PerspectiveCamera(
        45,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(12, 14, 16);
      camera.lookAt(0, 0, 0);
    } catch (error) {
      setIsWebGLReady(false);
      return undefined;
    }

    const ambientLight = new THREE.AmbientLight('#ffffff', 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight('#ffffff', 0.8);
    directionalLight.position.set(10, 16, 6);
    scene.add(directionalLight);

    const grid = new THREE.GridHelper(30, 30, '#334155', '#1e293b');
    scene.add(grid);

    const floorGeometry = new THREE.PlaneGeometry(28, 28);
    const floorMaterial = new THREE.MeshLambertMaterial({ color: '#0b1224' });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.6;
    scene.add(floor);

    const objects = [];
    layout.zones.forEach((zone) => {
      const mesh = createZone(zone);
      scene.add(mesh);
      objects.push(mesh);

      const zoneLabel = createLabelSprite(zone.name, {
        fontSize: 30,
        bgColor: 'rgba(15, 23, 42, 0.85)',
      });
      if (zoneLabel) {
        zoneLabel.position.set(
          zone.position[0],
          zone.position[1] + zone.size[1] / 2 + 0.6,
          zone.position[2]
        );
        scene.add(zoneLabel);
      }
    });

    layout.flags.forEach((flag) => {
      const mesh = createFlag(flag);
      scene.add(mesh);
      objects.push(mesh);
      flagMeshesRef.current[flag.id] = mesh;

      const flagLabel = createLabelSprite(flag.title, {
        fontSize: 28,
        bgColor: 'rgba(2, 6, 23, 0.9)',
      });
      if (flagLabel) {
        flagLabel.position.set(flag.position[0], flag.position[1] + 1.1, flag.position[2]);
        scene.add(flagLabel);
      }
    });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const handleClick = (event) => {
      const bounds = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(objects, true);
      if (intersects.length > 0) {
        const hit = intersects.find((item) => item.object.userData.type === 'flag');
        if (hit) {
          setSelectedFlag(hit.object.userData);
        }
      }
    };

    renderer.domElement.addEventListener('click', handleClick);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('click', handleClick);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [layout]);

  useEffect(() => {
    const meshes = flagMeshesRef.current;
    Object.values(meshes).forEach((mesh) => {
      mesh.scale.set(1, 1, 1);
    });
    if (selectedFlag?.id && meshes[selectedFlag.id]) {
      meshes[selectedFlag.id].scale.set(1.25, 1.25, 1.25);
    }
  }, [selectedFlag]);

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <div className="relative rounded-xl border border-border bg-slate-950 overflow-hidden">
        {isWebGLReady ? (
          <>
            <div ref={mountRef} className="h-[420px] w-full" />
            <div className="absolute left-4 top-4 rounded-lg bg-black/60 px-3 py-2 text-xs text-slate-100">
              Click a flag to inspect alert details
            </div>
          </>
        ) : (
          <div className="h-[420px] w-full flex items-center justify-center text-sm text-slate-200">
            3D view unavailable on this device. Showing alert list below.
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {layout.flags.map((flag) => (
          <div
            key={flag.id}
            className={`p-3 rounded-lg border ${
              selectedFlag?.id === flag.id ? 'border-primary bg-primary/10' : 'border-border'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{flag.title}</p>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full"
                style={{ backgroundColor: FLAG_COLORS[flag.severity], color: '#0b1224' }}
              >
                {flag.severity.toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{flag.message}</p>
            <p className="text-[10px] text-muted-foreground mt-2">
              Zone: {flag.zone} - Source: {flag.source}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
