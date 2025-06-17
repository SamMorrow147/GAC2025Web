import React from 'react';
import Image from 'next/image';

const TestCampCard: React.FC = () => {
  return (
    <div style={{ 
      width: '200px', 
      height: '300px', 
      position: 'relative', 
      border: '2px solid blue',
      margin: '20px'
    }}>
      <h3>Test Card</h3>
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '200px',
        border: '1px solid red'
      }}>
        <Image
          src="/images/Card Elements/SummerCamp.png"
          alt="Summer Camp Test"
          fill
          style={{ objectFit: 'contain' }}
          onLoad={() => console.log('✅ SummerCamp.png loaded successfully')}
          onError={(e) => console.error('❌ SummerCamp.png failed to load:', e)}
        />
      </div>
    </div>
  );
};

export default TestCampCard; 