"use client";

import { Canvas } from "@react-three/fiber";

interface ThreeCanvasProps {
  children: React.ReactNode;
}

export function ThreeCanvas({ children }: ThreeCanvasProps) {
  return <Canvas>{children}</Canvas>;
}
