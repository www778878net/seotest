import React from 'react';

const ArticlePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 顶部功能区 */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex space-x-4">
          <button className="text-gray-700">
            <img src="/icons/search.svg" alt="Search" className="w-6 h-6" />
          </button>
          <button className="text-gray-700">
            <img src="/icons/wechat.svg" alt="WeChat" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 导航栏 */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <a href="/" className="text-lg font-semibold hover:text-gray-400">
            首页
          </a>
          <ul className="flex space-x-6">
            <li><a href="/menu" className="hover:text-gray-400">菜单</a></li>
          </ul>
        </div>
      </nav>

      {/* 当前位置 */}
      <div className="bg-gray-200 py-2 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-6">
          <a href="/" className="hover:text-blue-600">首页</a> &gt; 
          <a href="/fish-pond-knowledge" className="hover:text-blue-600">鱼塘知识</a> &gt; 
          清塘方法
        </div>
      </div>

     {/* 文章主体部分 */}
  <div className="max-w-7xl mx-auto px-6 py-8 flex">
    <div className="w-2/3">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">鱼塘清塘方法及注意事项</h1>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">清塘的重要性</h2>
      <p className="text-lg text-gray-700 mb-4">
        在鱼虾养殖中，清塘是确保水质健康、减少病害发生的关键环节。鱼塘里的淤泥既有益也有害。过多的淤泥会成为病原体的滋生地，并加剧池塘的缺氧问题，导致鱼虾生病或死亡。正确的清塘方法可以有效预防这些问题，提高养殖效益。
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">鱼塘淤泥的危害与益处</h2>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">淤泥的危害</h3>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
        <li>病原体滋生：淤泥是病毒、细菌、寄生虫等病原体的温床，尤其是淤泥的表层，含有大量的病原微生物。若未及时清除，病害风险增加。</li>
        <li>缺氧：淤泥内有机物被细菌分解时，会消耗大量氧气，导致池塘底部缺氧，严重时甚至引发鱼浮头、翻塘等现象。</li>
        <li>水质恶化：淤泥分解过程中产生的氨氮和亚硝酸盐等有毒物质会导致鱼虾中毒，尤其是栖息在池底的虾更容易受到影响。</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">淤泥的益处</h3>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
        <li>作为肥料：适量的淤泥能为水体提供必要的营养物质，促进水质肥沃，从而提高养殖效果。</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">清塘的方法</h2>
      <p className="text-lg text-gray-700 mb-4">
        根据养殖目标和鱼塘的实际情况，清塘分为以下几个步骤：
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">清除淤泥</h3>
      <p className="text-lg text-gray-700 mb-4">
        养殖户需要先排干池塘的水，再将淤泥暴晒（即直晒），直到淤泥裂开后清除掉一部分。适当保留部分淤泥对水质有益。
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">保留适量淤泥</h3>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
        <li>对于一般养鱼塘，建议保留约20公分的淤泥；</li>
        <li>对于养虾塘，保留约10公分；</li>
        <li>高产养殖鱼塘，特别是每亩产量达到1吨的鱼塘，可以将淤泥保留5公分左右。</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">使用生石灰进行池塘消毒</h3>
      <p className="text-lg text-gray-700 mb-4">
        生石灰是一种理想的清塘药物，能够杀灭潜伏在池塘中的病原微生物、病毒、细菌及其他生物（如野杂鱼、青蛙、水生昆虫等）。
      </p>

      <h4 className="text-lg font-semibold text-gray-800 mb-2">生石灰的用法：</h4>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
        <li>干法：水位保留约10公分，使用生石灰量为每亩75公斤（即150斤）。</li>
        <li>湿法：水位保留在1米左右，使用生石灰量为每亩150公斤。</li>
      </ul>

      <h4 className="text-lg font-semibold text-gray-800 mb-2">生石灰的效果</h4>
      <p className="text-lg text-gray-700 mb-4">
        生石灰清塘后，池塘的 pH 值应该达到11以上，且保持两个小时以上，以确保达到理想的清塘效果。
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">注意事项</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
        <li>使用生石灰的量应根据实际情况调整。过多的生石灰会提高池塘水体的 pH 值，从而加剧氨氮毒性的释放，可能导致鱼虾死亡。</li>
        <li>对于新开的鱼塘，生石灰的用量不应超过60公斤，因为新塘水质较差，过多使用生石灰会导致肥力不足。</li>
        <li>对于碱性较强的鱼塘，生石灰的用量应减少。</li>
        <li>避免错误混合清塘药物。生石灰不应与漂白粉混合使用，因为漂白粉的消毒效果会受 pH 值的影响。</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">总结</h2>
      <p className="text-lg text-gray-700 mb-4">
        鱼塘清塘是确保水质、预防疾病的有效手段。通过科学合理的清塘方法，包括清除适量的淤泥和使用生石灰进行池塘消毒，可以有效降低病害发生，提高养殖效益。养殖户应根据实际情况，适量使用清塘药物，并定期进行清塘工作，确保水质的持续健康。
      </p>
    </div>

        {/* 右侧栏，分享和相关文章 */}
        <div className="w-1/3 ml-8">
          {/* 分享组件 */}
          <div className="bg-white p-4 shadow-md mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">分享</h3>
            <div className="flex space-x-4">
              <button className="text-gray-700">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </button>
              <button className="text-gray-700">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </button>
              <button className="text-gray-700">
                <img src="/icons/wechat.svg" alt="WeChat" className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* 相关文章 */}
          <div className="bg-white p-4 shadow-md">
            <h3 className="font-semibold text-gray-800 mb-4">相关文章</h3>
            <ul>
              <li className="mb-2">
                <a href="/article-a" className="text-blue-600 hover:underline">如何科学养殖鱼虾</a>
              </li>
              <li className="mb-2">
                <a href="/article-b" className="text-blue-600 hover:underline">鱼塘管理与水质控制</a>
              </li>
              <li className="mb-2">
                <a href="/article-c" className="text-blue-600 hover:underline">如何处理鱼塘中的疾病</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;