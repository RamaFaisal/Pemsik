import React, { useState } from "react";
import Sider from "./Sider";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

const App = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sider />

      {/* Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <MainContent />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
