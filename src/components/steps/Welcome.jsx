import React from 'react';
import { Camera, Palette, ShirtIcon, Users, Calendar, ShoppingBag, ArrowRight } from 'lucide-react';

const Welcome = ({ onStart }) => {
  const features = [
    {
      icon: <Camera size={48} color="#f59e0b" />,
      title: "Skin Tone Analysis",
      description: "Detect your unique skin tone for perfect color matching"
    },
    {
      icon: <Palette size={48} color="#f59e0b" />,
      title: "Color Matching",
      description: "Get personalized color recommendations that complement your skin"
    },
    {
      icon: <ShirtIcon size={48} color="#f59e0b" />,
      title: "Style Recommendations",
      description: "Find clothing styles that flatter your unique body shape"
    },
    {
      icon: <Users size={48} color="#f59e0b" />,
      title: "Body Type Analysis",
      description: "Discover what styles work best for your body shape"
    },
    {
      icon: <Calendar size={48} color="#f59e0b" />,
      title: "Occasion Styling",
      description: "Get outfit ideas for different events and occasions"
    },
    {
      icon: <ShoppingBag size={48} color="#f59e0b" />,
      title: "Shopping Assistance",
      description: "Find where to buy your perfect styles within your budget"
    }
  ];
  
  return (
    <div className="welcome-container" style={{
      textAlign: 'center',
      maxWidth: '90%',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '36px',
        color: '#f59e0b',
        marginBottom: '16px'
      }}>Welcome to HueMate</h1>
      
      <p style={{
        fontSize: '18px',
        color: 'white',
        marginBottom: '32px'
      }}>
        Your AI-powered fashion assistant that helps you find the perfect outfit based on your skin tone and body type.
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginBottom: '40px'
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center',
            transition: 'transform 0.3s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{marginBottom: '16px'}}>{feature.icon}</div>
            <h3 style={{
              fontSize: '20px',
              color: 'white',
              marginBottom: '8px'
            }}>{feature.title}</h3>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>{feature.description}</p>
          </div>
        ))}
      </div>
      
      <button style={{
        padding: '12px 32px',
        background: '#f59e0b',
        color: 'white',
        border: 'none',
        borderRadius: '30px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        margin: '0 auto'
      }}
      onClick={onStart}
      >
        Get Started <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default Welcome;