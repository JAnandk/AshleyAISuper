import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};
