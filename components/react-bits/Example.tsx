import React from 'react';
import { Button } from 'react-bits';

const ReactBitsExample: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">React Bits Example</h2>
      <div className="space-y-4">
        {/* Example of using a React Bits button */}
        <Button
          variant="primary"
          onClick={() => console.log('Button clicked!')}
        >
          Click Me
        </Button>
      </div>
    </div>
  );
};

export default ReactBitsExample; 