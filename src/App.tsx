import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { getFlaskIcon } from './components/FlaskIcon';

declare global {
  interface Window {
    CozeWebSDK: any;
  }
}

function App() {
  const [guideStep, setGuideStep] = useState(0); // 0: 未开始, 1: 突出中间, 2: 突出右下角, 3: 结束
  const [showGuide, setShowGuide] = useState(true);

  useEffect(() => {
    const initCoze = () => {
      new window.CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7431945837229867018',
        },
        componentProps: {
          title: '科学实验小助手（1.0幼崽版）',
          icon: 'https://i.postimg.cc/YCd77JGg/DALL-E-2024-11-01-06-11-00-A-colorful-playful-cartoon-illustration-of-a-light-bulb-with-a-science.png',
          position: 'center',
          hideSettings: true,
          hideMessages: true,
        },
      });
    };

    if (window.CozeWebSDK) {
      initCoze();
    } else {
      window.addEventListener('load', initCoze);
      return () => window.removeEventListener('load', initCoze);
    }
  }, []);
  // 文章列表组件
  const ArticleList = () => {
    const articles = [
      {
        title: 'No.380 物理所不大，创造神话——如何让一根火柴跳起科目三',
        summary:
          '实验器材：火柴、蜡烛、支架和所标杯。原理：火柴头上的KClO₃分解产生粘连作用的KCl，加上对流原理使火柴优雅翘曲。火焰上方空气受热膨胀气压降低，下方冷空气向上补充，使斜立的火柴如芭蕾舞者般缓慢翘起。',
        link: 'https://mp.weixin.qq.com/s?__biz=MzAwNTA5NTYxOA==&mid=2651356015&idx=1&sn=4e67cb8286bcdb30d87b433e87df52d3',
      },
      {
        title: 'No.379 谁周六还要上发条呀？科学的',
        summary:
          '器材：锤子、细线、螺母、短棍等。实验通过橡皮筋的弹性势能演示发条原理：推动瓶子滚动时，螺母因惯性保持静止，橡皮筋累积弹性势能，速度为零时势能最大，随后转化为动能使瓶子反向滚动。',
        link: 'https://mp.weixin.qq.com/s?__biz=MzAwNTA5NTYxOA==&mid=2651354377&idx=1&sn=2e9bad572b8d1979736f4153ad869a8c',
      },
      {
        title: 'No.378 某科学的空气大炮，砰！',
        summary:
          '器材：纸杯、塑料瓶、气球、剪刀。实验步骤：将塑料瓶下半部分剪去，用气球套住瓶口并密封。原理：通过压缩空气产生推力来发射物体。',
        link: 'https://mp.weixin.qq.com/s?__biz=MzAwNTA5NTYxOA==&mid=2651349996&idx=1&sn=a5ed4550ed35441d55b317a7d2bc5bed',
      },
      {
        title: 'No.377 大冷天的玩喷水，还嫌不够冷？',
        summary:
          '器材：所标杯、剪刀、竹签和吸管。利用伯努利原理和离心力，通过吸管的旋转运动和气压差，实现水的喷射效果。流体的压强、速度和高度满足伯努利方程，产生向心力使水沿吸管向上运动。',
        link: 'https://mp.weixin.qq.com/s?__biz=MzAwNTA5NTYxOA==&mid=2651348579&idx=1&sn=a9999a3ac15387d5e2e41b527ddb86d1',
      },
      {
        title: 'No.376 感冒中的我，不小心发现了潜水艇的秘密？',
        summary:
          '器材：塑料瓶、口服液玻璃瓶、斜口钳。基于帕斯卡定律，通过挤压塑料瓶改变压强，使口服液瓶在水中上浮下沉。压强增大时水进入瓶内使其下沉，压强减小时水排出导致上浮。',
        link: 'https://mp.weixin.qq.com/s?__biz=MzAwNTA5NTYxOA==&mid=2651345663&idx=1&sn=7fc3317b7aedfbcb6b36d217012c5280',
      },
      {
        title: 'No.375 纸为什么烧不起来？',
        summary:
          '器材：所标杯、酒精灯、A4纸、打火机、支架、胶带。实验演示了水的导热作用，当纸盒中加入水后，水吸收热量使纸盒温度无法达到燃烧点，从而避免燃烧。',
        link: 'https://mp.weixin.qq.com/s?__biz=MzAwNTA5NTYxOA==&mid=2651342416&idx=1&sn=1e94961652720a04cdd6cf0cfcd5140a',
      },
      {
        title: 'No.374 球球了，再水一期吧',
        summary:
          '器材：透明塑料杯、轻质小球、塑料瓶。通过气压差演示流体力学现象，当瓶子倒扣在水中时，瓶内气压大于外界大气压，导致水面高度变化，小球随之移动。',
        link: 'https://mp.weixin.qq.com/s?__biz=MzAwNTA5NTYxOA==&mid=2651340035&idx=1&sn=31a55461433f915202a2aad8c6c887fd',
      },
      {
        title: 'No.373 真做不下去了，整一期水实验吧',
        summary:
          '器材：塑料瓶、气球、所标杯。利用大气压强原理，通过气球和瓶子形成密闭空间，改变内部压强，实现喷泉效果。当气球收缩时，外界气压推动水流喷出。',
        link: 'https://mp.weixin.qq.com/s?__biz=MzAwNTA5NTYxOA==&mid=2651338007&idx=1&sn=3cdc27674394efe6004fe8279fb8899f',
      },
      {
        title: 'No.369 电与磁之舞！教你玩转纸牌',
        summary:
          '器材：纸牌、螺丝钉、干电池、导线、圆柱形磁铁。利用电流在磁场中的安培力，通过闭合回路产生旋转力矩，使螺钉带动纸牌顺时针旋转。',
        link: 'https://mp.weixin.qq.com/s?__biz=MzAwNTA5NTYxOA==&mid=2651325881&idx=1&sn=da69529114d39d503aa1e725a16cedb1',
      },
      {
        title: 'No.367 答应我，刷到这条请多喝热水！',
        summary:
          '器材：透明杯、墨水、卡纸、热水壶。展示了水的密度随温度变化的现象。热水密度小于冷水时可以浮在上方，而染色的冷水因密度较大会下沉并最终使整杯水混合。',
        link: 'https://mp.weixin.qq.com/s?__biz=MzAwNTA5NTYxOA==&mid=2651322127&idx=1&sn=dde47354aef3d14fa97be64aba295b58',
      },
    ];

    return (
      <div className="hidden lg:block w-96">
        {' '}
        {/* 移除 mr-8 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg sticky top-0 overflow-hidden">
          {' '}
          {/* top-4 改为 top-0 */}
          <h3 className="text-lg font-bold text-gray-800 p-4 border-b border-gray-100 flex items-center">
            <span className="text-blue-500 mr-2">📚</span> {/* 添加一个图标 */}
            往期正经玩
          </h3>
          <div className="h-[calc(100vh-4rem)] overflow-y-auto">
            {' '}
            {/* 调整高度计算 */}
            {articles.map((article, index) => (
              <article
                key={index}
                className="p-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
              >
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h4 className="text-gray-800 font-medium mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="mt-2 text-sm text-blue-500 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    查看详情
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  };
  // 引导遮罩层组件
  const GuideOverlay = () => {
    if (!showGuide) return null;

    const getOverlayContent = () => {
      switch (guideStep) {
        case 1:
          return (
            <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
              <div className="relative bg-white/90 rounded-3xl p-8 max-w-2xl mx-4 animate-fade-in">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-indigo-600">
                    欢迎来到科学实验室！
                  </h3>
                  <p className="text-gray-600">我是你的AI科学实验小助手</p>
                  <p className="text-gray-600">
                    让我们一起探索有趣的科学世界吧！
                  </p>
                  <button
                    onClick={() => setGuideStep(2)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                  >
                    继续 →
                  </button>
                </div>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="fixed inset-0 bg-black/70 z-50">
              <div className="absolute bottom-20 right-20 bg-white/90 rounded-xl p-6 max-w-sm animate-bounce-gentle">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">💡</span>
                    <h3 className="text-lg font-semibold text-indigo-600">
                      点击这里开始对话
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    点击右下角的小灯泡图标，开启我们的科学探索之旅！
                  </p>
                  <button
                    onClick={() => setShowGuide(false)}
                    className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-indigo-700 transition-colors"
                  >
                    知道啦！
                  </button>
                </div>
                <div className="absolute -bottom-8 right-8 transform rotate-45">
                  <div className="text-indigo-400 text-2xl animate-pulse">
                    ↓
                  </div>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return getOverlayContent();
  };

  // 自动开始引导
  useEffect(() => {
    if (showGuide && guideStep === 0) {
      const timer = setTimeout(() => setGuideStep(1), 1000);
      return () => clearTimeout(timer);
    }
  }, [showGuide, guideStep]);

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{
          backgroundImage:
            'url("https://i.postimg.cc/cJVGcJxm/DALL-E-2024-11-01-07-46-29-A-cute-pastel-colored-physics-laboratory-scene-with-scientific-equipme.webp")',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <Header />
        <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto flex justify-center lg:justify-between">
            {' '}
            {/* 添加 gap-8 控制间距 */}
            {/* 左侧文章列表 */}
            <ArticleList />
            {/* 主内容区域 */}
            <div className="w-full max-w-2xl">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
                {/* 欢迎标题区域 */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
                    欢迎访问人工智能"科学实验小助手"
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    小助手已经做好准备，给你介绍各种有趣的科学小实验啦~
                  </p>

                  {/* 提示按钮 */}
                  <div className="inline-block bg-blue-50 rounded-full px-6 py-2 mb-8">
                    <div className="flex items-center space-x-2 text-blue-600">
                      <span>✨</span>
                      <span>点击右下角的</span>
                      <span className="text-xl">💡</span>
                      <span>小灯泡开启科学之旅</span>
                      <span>✨</span>
                    </div>
                  </div>
                </div>

                {/* 声明区域 */}
                <div className="mt-10 space-y-6">
                  {/* 物理所声明 */}
                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                    <p className="text-sm text-gray-700 leading-relaxed font-sans">
                      物理所科普团队声明：服务生成的所有内容均由人工智能模型生成，其生成内容的准确性和完整性无法保证，不代表我们的态度或观点。
                    </p>
                  </div>

                  {/* 小助手声明 */}
                  <div className="p-6 bg-violet-50 rounded-2xl border border-violet-100 shadow-sm">
                    <p className="text-sm leading-relaxed text-violet-600">
                      实验小助手自我声明：我还在成长幼崽期，需要亿点点耐心和包容嗷~
                      🌟
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <GuideOverlay />
    </>
  );
}

// 添加新的动画
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-gentle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-bounce-gentle {
    animation: bounce-gentle 2s infinite;
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
`;
document.head.appendChild(style);

export default App;
