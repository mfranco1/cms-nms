import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const EASAnalyzer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const API_URL = "http://localhost:8000/predict";

  const captureFrame = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const formData = new FormData();
      formData.append("file", blob, "frame.jpg");
      setLoading(true);
      
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        setScore(data.EAS_score);
      } catch (error) {
        console.error("Error fetching prediction:", error);
      } finally {
        setLoading(false);
      }
    }, "image/jpeg");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <Card className="w-96 shadow-lg p-4">
        <CardContent className="flex flex-col items-center">
          <video ref={videoRef} autoPlay playsInline className="rounded-lg border shadow-sm" width={320} height={240} onCanPlay={() => videoRef.current?.play()} />
          <canvas ref={canvasRef} className="hidden" />
          <Button onClick={captureFrame} className="mt-4" disabled={loading}>
            {loading ? "Analyzing..." : "Capture & Analyze"}
          </Button>
          {score !== null && <p className="mt-4 text-lg font-bold text-blue-600">EAS Score: {score}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default EASAnalyzer;
