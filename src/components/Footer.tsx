import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm px-6 py-3">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <span>© {new Date().getFullYear()} 科学实验小助手1.0</span>
              <span className="hidden sm:inline">|</span>
            </div>
            <div className="flex items-center flex-wrap justify-center gap-1.5">
              <span className="text-blue-600">本智能体由</span>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                物理所科普团队
              </a>
              <span>与</span>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                物理所他山学科交叉协会
              </a>
              <span>联合推出</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
