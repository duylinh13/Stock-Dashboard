// src/App.tsx
import React from "react";
import { Button } from "antd";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Button
        type="primary"
        className="text-white bg-blue-500 hover:bg-blue-700"
      >
        Ant Design Button
      </Button>
    </div>
  );
}

export default App;
