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
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflow: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center',
        animation: 'fadeIn 1s ease'
      }}>
        <h1 style={{
          fontSize: '56px',
          background: 'linear-gradient(to right, #f59e0b, #d97706)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Welcome to HueMate
        </h1>
        
        <p style={{
          fontSize: '24px',
          color: 'white',
          maxWidth: '800px',
          margin: '0 auto 60px',
          lineHeight: '1.5'
        }}>
          Your AI-powered fashion assistant that helps you find the perfect outfit based on your skin tone and body type.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          margin: '0 auto 60px',
          justifyContent: 'center'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '20px',
              padding: '40px 30px',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              animation: `fadeInUp ${0.3 + index * 0.1}s ease`,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ marginBottom: '20px' }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '24px',
                color: 'white',
                marginBottom: '16px',
                fontWeight: '600'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '16px',
                lineHeight: '1.6'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          animation: 'fadeInUp 0.8s ease',
          marginBottom: '60px'
        }}>
          <button 
            onClick={onStart}
            style={{
              background: 'linear-gradient(to right, #f59e0b, #d97706)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '16px 36px',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              margin: '0 auto',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(245, 158, 11, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(245, 158, 11, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.3)';
            }}
          >
            Get Started <ArrowRight size={20} />
          </button>
        </div>
        
        <div style={{
          fontSize: '16px',
          color: 'rgba(255,255,255,0.6)',
          animation: 'fadeInUp 0.9s ease'
        }}>
          <p>Click on the HueMate assistant in the bottom right corner to begin your personalized style journey.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Welcome;