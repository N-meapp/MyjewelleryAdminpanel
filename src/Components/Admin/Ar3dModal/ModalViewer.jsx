import '@google/model-viewer';

export default function ModelViewer({ src }) {
  return (
    <model-viewer
      src={src}
      alt="A 3D model"
      auto-rotate
      camera-controls
      style={{ width: '100%', height: '100%' }}
    ></model-viewer>
  );
}
