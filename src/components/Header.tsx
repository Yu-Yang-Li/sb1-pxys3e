// Header.tsx
import React from 'react';
import { FlaskIcon } from './FlaskIcon';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* 增加 size 到 36 或 40，并添加一些额外的样式 */}
            <FlaskIcon
              size={40}
              className="hover:animate-pulse" // 添加脉冲动画效果
            />
            <h1 className="text-lg font-medium text-gray-800">
              科学实验小助手
            </h1>
          </div>

          <div className="hidden sm:block text-sm text-gray-500">
            <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
              物理所科研助手
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
