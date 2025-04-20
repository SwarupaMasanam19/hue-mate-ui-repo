import React, { useRef, useState, useEffect } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import Button from '../ui/Button';

const UploadPhoto = () => {
  const { setUserPhotoAndAnalyze } = useChatbot();
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [stream, setStream] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [skinToneResult, setSkinToneResult] = useState(null);

  // Clean up camera stream when component unmounts
  useEffect(() => {
    return () => stopCamera();
  }, []);

  // Call the backend API to predict skin tone
  const analyzeSkinTone = async (imageData) => {
    setIsAnalyzing(true);
    try {
      const response = await fetch('http://localhost:5000/api/predict-skin-tone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      if (result.success) {
        setSkinToneResult(result);
        // You can also update the context if needed
        setUserPhotoAndAnalyze(imageData, result);
      } else {
        console.error('Analysis failed:', result.error);
        alert('Failed to analyze skin tone. Please try again.');
      }
    } catch (error) {
      console.error('Error analyzing skin tone:', error);
      alert('Error connecting to the server. Please try again later.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCapturedImage(reader.result);
        setShowPreview(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 } 
        } 
      });
      
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
      setCameraActive(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please make sure you have granted permission to use the camera.');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
    setStream(null);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      // Set canvas size to match video for best quality
      canvas.width = 300;
      canvas.height = 300;
      
      // Capture frame
      const context = canvas.getContext('2d');
      // Resize and draw the video to fit canvas
  context.drawImage(
    video,
    0, 0, video.videoWidth, video.videoHeight, // source video dimensions
    0, 0, 300, 300 // destination canvas dimensions
  );

      
      // Convert to image URL
      const imageDataUrl = canvas.toDataURL('image/png');
      setCapturedImage(imageDataUrl);
      setShowPreview(true);
      
      // Stop camera stream
      stopCamera();
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    setShowPreview(false);
    setSkinToneResult(null);
    startCamera();
  };

  const confirmPhoto = () => {
    if (capturedImage) {
      // Send the image to the backend for analysis
      analyzeSkinTone(capturedImage);
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
        Upload Your Photo
      </h2>
      
      <p className="text-lg mb-8">
        Take a clear photo in good lighting without makeup for the best skin tone analysis.
      </p>
      
      {!cameraActive && !showPreview && (
        <div className="w-64 h-64 border-2 border-dashed border-amber-300 rounded-full flex items-center justify-center relative overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      )}
      
      {cameraActive && (
        <div className="relative mb-6">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-amber-400">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline
              className="min-w-full min-h-full object-cover"
            />
          </div>
          <canvas ref={canvasRef} className="hidden" />
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button 
              onClick={capturePhoto}
              className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {showPreview && capturedImage && (
    <div className="mb-8 animate-fade-in-scale">
        <div className="preview-image-container">
            <img src={capturedImage} alt="Preview" className="preview-image" />
        </div>
        <p className="text-lg mb-2">How does this photo look?</p>
    </div>
)}
      {isAnalyzing && (
        <div className="mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto"></div>
          <p className="mt-2 text-amber-600">Analyzing your skin tone...</p>
        </div>
      )}
      
      {skinToneResult && (
        <div className="mb-8 p-4 bg-amber-50 rounded-lg border border-amber-200 animate-fade-in">
          <h3 className="text-xl font-semibold text-amber-700 mb-2">Analysis Result</h3>
          <p className="text-lg">Your skin tone is: <span className="font-bold text-amber-600">{skinToneResult.skin_tone}</span></p>
        </div>
      )}
      
      <div className="flex space-x-4 mt-4">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageUpload}
        />
        
        {!cameraActive && !showPreview && (
          <>
            <Button primary onClick={startCamera}>Take Photo</Button>
            <Button secondary onClick={triggerFileInput}>Upload Photo</Button>
          </>
        )}
        
        {cameraActive && (
          <Button secondary onClick={stopCamera}>Cancel</Button>
        )}
        
        {showPreview && capturedImage && !skinToneResult && !isAnalyzing && (
          <>
            <Button primary onClick={confirmPhoto}>Use This Photo</Button>
            <Button secondary onClick={retakePhoto}>Retake Photo</Button>
          </>
        )}
        
        {skinToneResult && (
          <Button secondary onClick={retakePhoto}>Try Another Photo</Button>
        )}
      </div>
    </div>
  );
};

export default UploadPhoto;