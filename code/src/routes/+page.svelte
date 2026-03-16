<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import * as echarts from "echarts";

  // 品牌与业务插图
  import buffLogo from "$lib/img/BUFF163图标.png";
  import steamLogo from "$lib/img/steam图标.webp";
  import cardTrade1 from "$lib/img/卡片交易-1.webp";
  import cardTrade2 from "$lib/img/卡片交易2.webp";
  import cardTrade3 from "$lib/img/卡片交易3.webp";
  import mainLogo from "$lib/img/logo.png";
  import quantIllustration from "$lib/img/量化插图1.png";

  let scrollY = $state(0);
  let innerHeight = $state(0);

  let profitChartContainer: HTMLElement;
  let efficiencyChartContainer: HTMLElement;

  onMount(() => {
    // Profit chart
    let profitChart: echarts.ECharts | undefined;
    if (profitChartContainer) {
      profitChart = echarts.init(profitChartContainer);
      profitChart.setOption({
        backgroundColor: "transparent",
        title: {
          text: "AI与自动化技术介入后收益率提升",
          left: "center",
          textStyle: { color: "#1d1d1f", fontSize: 18, fontWeight: 600 },
        },
        tooltip: { trigger: "axis" },
        legend: { data: ["传统人工操作", "AI自动化引擎"], bottom: 0 },
        xAxis: {
          type: "category",
          data: ["第1月", "第2月", "第3月", "第4月", "第5月", "第6月"],
        },
        yAxis: { type: "value", axisLabel: { formatter: "{value} %" } },
        series: [
          {
            name: "传统人工操作",
            type: "line",
            data: [5, 6, 8, 7, 10, 12],
            smooth: true,
            itemStyle: { color: "#86868b" },
          },
          {
            name: "AI自动化引擎",
            type: "line",
            data: [12, 25, 42, 65, 85, 120],
            smooth: true,
            itemStyle: { color: "#2563eb" },
            areaStyle: { color: "rgba(37, 99, 235, 0.1)" },
          },
        ],
      });
    }

    // Efficiency chart
    let efficiencyChart: echarts.ECharts | undefined;
    if (efficiencyChartContainer) {
      efficiencyChart = echarts.init(efficiencyChartContainer);
      efficiencyChart.setOption({
        backgroundColor: "transparent",
        title: {
          text: "业务处理能力倍增",
          left: "center",
          textStyle: { color: "#1d1d1f", fontSize: 18, fontWeight: 600 },
        },
        tooltip: { trigger: "axis" },
        legend: { data: ["处理量 (万件/天)"], bottom: 0 },
        xAxis: { type: "category", data: ["人工", "基础脚本", "AI自动化"] },
        yAxis: { type: "value" },
        series: [
          {
            name: "处理量 (万件/天)",
            type: "bar",
            data: [1, 5, 50],
            itemStyle: { color: "#2563eb" },
            barWidth: "40%",
          },
        ],
      });
    }

    const resizeObserver = new ResizeObserver(() => {
      if (profitChart) profitChart.resize();
      if (efficiencyChart) efficiencyChart.resize();
    });
    if (profitChartContainer) resizeObserver.observe(profitChartContainer);
    if (efficiencyChartContainer)
      resizeObserver.observe(efficiencyChartContainer);

    return () => {
      resizeObserver.disconnect();
      if (profitChart) profitChart.dispose();
      if (efficiencyChart) efficiencyChart.dispose();
    };
  });

  const imageModules = import.meta.glob(
    "/src/lib/img/stock/*.{jpg,jpeg,png,webp,gif}",
    { eager: true, query: "?url", import: "default" },
  );
  const loadedImages = Object.values(imageModules) as string[];

  const totalCells = 49;
  const stockImages = Array.from({ length: totalCells }, (_, i) => {
    if (loadedImages.length > 0) return loadedImages[i % loadedImages.length];
    return `https://picsum.photos/600/400?random=${i}`;
  });

  let zoomProgress = $derived(
    innerHeight > 0 ? Math.min(scrollY / innerHeight, 1) : 0,
  );
  let wallScale = $derived(1 + zoomProgress * 4);
  let textOpacity = $derived(Math.max(0, 1 - zoomProgress * 1.2));
</script>

<svelte:window bind:scrollY bind:innerHeight />

<svelte:head>
  <title>7788 智量化矩阵 - 7788Soft</title>
  <meta
    name="description"
    content="基本面 · DCF · AI 审核入池，多算法回测择优，实时信号经人工确认下单。经多年实盘验证。"
  />
  <meta
    name="keywords"
    content="股票自动交易, 量化交易, AI炒股, DCF折现, 交易信号"
  />
</svelte:head>

<!-- Hero：大标题 + 一句副标题 + 一个链接，苹果式 -->
<section class="relative h-[100vh] w-full bg-black overflow-hidden">
  <div
    class="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
  >
    <div
      class="absolute top-1/2 left-1/2 w-[140vw] h-[140vh] md:w-[125vw] md:h-[125vh] grid grid-cols-7 grid-rows-7 gap-2 md:gap-4 will-change-transform z-0"
      style="transform: translate(-50%, -50%) scale({wallScale}); transform-origin: center center;"
    >
      {#each stockImages as img, i}
        {#if i === 24}
          <div
            class="w-full h-full rounded-2xl md:rounded-[28px] overflow-hidden relative ring-1 ring-white/10"
          >
            <img
              src={img}
              alt=""
              class="w-full h-full object-cover"
              onerror={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://picsum.photos/1200/900?random=center";
              }}
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
              aria-hidden="true"
            ></div>
          </div>
        {:else}
          <div
            class="w-full h-full rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900"
          >
            <img
              src={img}
              alt=""
              class="w-full h-full object-cover opacity-80"
              onerror={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  `https://picsum.photos/600/400?random=${i}`;
              }}
            />
          </div>
        {/if}
      {/each}
    </div>

    <div
      class="relative z-10 text-center px-6"
      style="opacity: {textOpacity}; transform: translateY({-scrollY *
        0.15}px);"
    >
      <h1
        class="text-6xl font-black text-burlywood max-w-[800px] mx-auto text-[burlywood]"
      >
        7788 智量化矩阵
      </h1>
      <p
        class="mt-5 text-[19px] md:text-[21px] text-burlywood font-normal max-w-[520px] mx-auto"
      >
        基本面 · DCF · AI 审核。多算法融合，人工确认下单。
      </p>
      <p class="mt-2 text-[14px] text-burlywood">
        经多年实盘验证，战胜 80～90% 股民。
      </p>
      <a
        href="#logic"
        class="inline-block mt-8 text-[17px] text-burlywood font-normal hover:underline"
      >
        了解如何运作
      </a>
    </div>

    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      style="opacity: {textOpacity};"
    >
      <Icon icon="carbon:chevron-down" class="w-6 h-6 text-burlywood" />
    </div>
  </div>
</section>

<!-- 核心逻辑：大标题 + 四块文案，居中、统一宽度、整齐 -->
<section
  id="logic"
  class="bg-[#fbfbfd] pt-24 pb-28 md:pt-32 md:pb-36 relative overflow-hidden"
>
  <!-- 装饰背景图案 -->
  <div
    class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full pointer-events-none opacity-[0.03]"
  >
    <svg viewBox="0 0 100 100" class="w-full h-full" preserveAspectRatio="none">
      <path
        d="M0,0 L100,100 M100,0 L0,100"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="currentColor"
        stroke-width="0.5"
      />
    </svg>
  </div>

  <div class="max-w-[800px] mx-auto px-6 text-center relative z-10">
    <h2
      class="text-[40px] md:text-[52px] font-bold text-[#1d1d1f] tracking-tight leading-[1.08]"
    >
      四步可追溯的算法纪律。
    </h2>
    <p class="mt-6 text-[19px] md:text-[22px] text-[#6e6e73] font-medium">
      从底层标的初筛到最终交易执行，摒弃人为情绪，每一步均由模型驱动与数据支撑。
    </p>

    <div class="mt-20 md:mt-28 space-y-16 md:space-y-20 text-center relative">
      <!-- 竖线连接装饰 (仅在桌面端显示) -->
      <div
        class="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 -translate-x-1/2 -z-10"
      ></div>

      <div
        class="relative bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-gray-100/50 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group"
      >
        <div
          class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:text-blue-500 transition-transform duration-300"
        >
          <Icon icon="carbon:filter" class="w-8 h-8" />
        </div>
        <p
          class="text-[13px] font-bold text-blue-600 uppercase tracking-widest mt-4"
        >
          Phase 1
        </p>
        <h3
          class="mt-3 text-[26px] md:text-[30px] font-bold text-[#1d1d1f] tracking-tight"
        >
          基本面深度过滤
        </h3>
        <p
          class="mt-4 text-[17px] text-[#6e6e73] leading-relaxed mx-auto max-w-[600px]"
        >
          每日穿透扫描全网研报与基金估值池，结合企业 DCF
          自由现金流折现模型锚定内在价值区间；引入 AI
          审查引擎剥离财务瑕疵与行业劣势标的，构筑高安全边际的基础底池。
        </p>
      </div>

      <div
        class="relative bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-gray-100/50 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group"
      >
        <div
          class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:text-purple-500 transition-transform duration-300"
        >
          <Icon icon="carbon:data-base" class="w-8 h-8" />
        </div>
        <p
          class="text-[13px] font-bold text-purple-600 uppercase tracking-widest mt-4"
        >
          Phase 2
        </p>
        <h3
          class="mt-3 text-[26px] md:text-[30px] font-bold text-[#1d1d1f] tracking-tight"
        >
          全维数据基建
        </h3>
        <p
          class="mt-4 text-[17px] text-[#6e6e73] leading-relaxed mx-auto max-w-[600px]"
        >
          围绕初筛核心池，系统自动化采集分钟级K线、量价异动、北向资金及龙虎榜等多维因子。通过系统级清洗归档，为后续的高频回测与信号碰撞铸造无瑕疵的数据集。
        </p>
      </div>

      <div
        class="relative bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-gray-100/50 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group"
      >
        <div
          class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:text-emerald-500 transition-transform duration-300"
        >
          <Icon icon="carbon:machine-learning-model" class="w-8 h-8" />
        </div>
        <p
          class="text-[13px] font-bold text-emerald-600 uppercase tracking-widest mt-4"
        >
          Phase 3
        </p>
        <h3
          class="mt-3 text-[26px] md:text-[30px] font-bold text-[#1d1d1f] tracking-tight"
        >
          多算法碰撞择优
        </h3>
        <p
          class="mt-4 text-[17px] text-[#6e6e73] leading-relaxed mx-auto max-w-[600px]"
        >
          打破单一指标局限，并行运行趋势跟随、均线纠缠、形态突破及量价背离等十余种实战交易模型。仅在多维度算法同时共振并胜出回测压力的标的，方可进入实盘狙击视野。
        </p>
      </div>

      <div
        class="relative bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-gray-100/50 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group"
      >
        <div
          class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:text-amber-500 transition-transform duration-300"
        >
          <Icon icon="carbon:chart-evaluation" class="w-8 h-8" />
        </div>
        <p
          class="text-[13px] font-bold text-amber-600 uppercase tracking-widest mt-4"
        >
          Phase 4
        </p>
        <h3
          class="mt-3 text-[26px] md:text-[30px] font-bold text-[#1d1d1f] tracking-tight"
        >
          信号阻击与决策
        </h3>
        <p
          class="mt-4 text-[17px] text-[#6e6e73] leading-relaxed mx-auto max-w-[600px]"
        >
          盘中毫秒级盯盘，动态计算建仓、滚动做T及止盈止损等各类交易信号。系统预警弹出后辅以最后的人工确认阀门，确保机器执行的铁血纪律与人类常识判断完美融合。
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 结果陈述：一句标题 + 一句副标题，苹果式收尾 -->
<section class="bg-white pt-20 pb-24 md:pt-28 md:pb-32">
  <div class="max-w-[980px] mx-auto px-6 text-center">
    <div class="flex justify-center mb-6 text-[#1d1d1f]">
      <Icon icon="carbon:trophy" class="w-10 h-10" />
    </div>
    <h2
      class="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight leading-tight"
    >
      战胜 80～90% 股民。
    </h2>
    <p class="mt-4 text-[19px] text-[#6e6e73] max-w-[500px] mx-auto">
      战法经多年实战检验，理念与逻辑始终是我们参与金融市场的指南针。
    </p>
    <p class="mt-8 text-[12px] text-[#6e6e73]">系统当前未在线运行</p>
  </div>
</section>

<!-- 收益与效率对比 / 量化板块 -->
<section
  class="bg-white pt-24 pb-28 md:pt-32 md:pb-36 border-t border-[#d2d2d7] relative overflow-hidden"
>
  <!-- 量化插图1 全屏背景 -->
  <div class="absolute inset-0 pointer-events-none z-0">
    <img
      src={quantIllustration}
      alt=""
      class="w-full h-full object-cover opacity-[0.06]"
      aria-hidden="true"
    />
  </div>
  <div class="max-w-[1080px] mx-auto px-6 text-center relative z-10">
    <h2
      class="text-[36px] md:text-[48px] font-bold text-[#1d1d1f] tracking-tight leading-tight"
    >
      打破效能边界，<br class="md:hidden" /><span
        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
        >实现指数级非线性增长。</span
      >
    </h2>
    <p
      class="mt-6 text-[19px] md:text-[21px] text-[#6e6e73] max-w-[760px] mx-auto leading-relaxed"
    >
      在处理超大规模非结构化数据与高并发交易场景时，纯人工与基础脚本的效能天花板显而易见。依托自研系统级并发架构与
      AI 决策中枢，我们将资金周转率与单日处理通量推向了全新的维度。
    </p>

    <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
      <div
        class="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 h-[460px] flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500"
      >
        <div
          bind:this={profitChartContainer}
          class="w-full h-full flex-grow"
        ></div>
        <p class="mt-4 text-[14px] text-[#86868b] font-medium text-left">
          突破传统盈亏比，构建具备绝对优势的量化对冲防线。
        </p>
      </div>
      <div
        class="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 h-[460px] flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500"
      >
        <div
          bind:this={efficiencyChartContainer}
          class="w-full h-full flex-grow"
        ></div>
        <p class="mt-4 text-[14px] text-[#86868b] font-medium text-left">
          万级账号矩阵并发，吞吐量相较传统自动化脚本实现数量级跨越。
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 卡牌交易系统 CardTrader -->
<section
  id="card"
  class="bg-[#f5f5f7] pt-24 pb-28 md:pt-32 md:pb-36 border-t border-[#d2d2d7] relative min-h-[680px] md:min-h-[760px]"
>
  <!-- 三张卡牌插图：绝对定位随意散落，完整展示 object-contain -->
  <div
    class="absolute top-20 left-[4%] md:left-[6%] w-[200px] md:w-[260px] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.1)] border border-gray-200/80 z-0 hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)] hover:scale-[1.03] transition-all duration-300"
  >
    <img
      src={cardTrade1}
      alt="卡牌交易场景 1"
      class="w-full h-auto object-contain block"
    />
  </div>
  <div
    class="absolute top-[38%] right-[2%] md:right-[4%] w-[180px] md:w-[240px] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.1)] border border-gray-200/80 z-0 hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)] hover:scale-[1.03] transition-all duration-300"
  >
    <img
      src={cardTrade2}
      alt="卡牌交易场景 2"
      class="w-full h-auto object-contain block"
    />
  </div>
  <div
    class="absolute bottom-20 left-[18%] md:left-[28%] w-[210px] md:w-[280px] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.1)] border border-gray-200/80 z-0 hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)] hover:scale-[1.03] transition-all duration-300"
  >
    <img
      src={cardTrade3}
      alt="卡牌交易场景 3"
      class="w-full h-auto object-contain block"
    />
  </div>

  <div class="max-w-[1080px] mx-auto px-6 relative z-10">
    <div class="text-center">
      <h2
        class="text-[36px] md:text-[48px] font-bold text-[#1d1d1f] tracking-tight leading-tight"
      >
        CardTrader<br />全自动化卡牌交易与对冲套利中枢
      </h2>
      <p
        class="mt-6 text-[19px] md:text-[21px] text-[#6e6e73] max-w-[800px] mx-auto leading-relaxed"
      >
        将华尔街量化交易逻辑降维打击至实体卡牌市场（宝可梦、游戏王等）。依托异构数据清洗与多维定价引擎，精准捕获全网各大平台的每一个微小价差空间。
      </p>
    </div>

    <div
      class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative z-20"
    >
      <div
        class="bg-white/90 backdrop-blur-md p-10 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white/60 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-blue-50/90 text-blue-600 flex items-center justify-center mb-6"
        >
          <Icon icon="carbon:activity" class="w-7 h-7" />
        </div>
        <h3 class="text-[24px] font-semibold text-[#1d1d1f]">
          毫秒级多平台链路扫描
        </h3>
        <p class="mt-4 text-[16px] text-[#6e6e73] leading-relaxed">
          采用分布式爬虫矩阵，7x24小时全天候监听闲鱼、卡淘、集换社等核心交易池。实时穿透获取商品买卖深度盘口与海量历史成交订单数据。
        </p>
      </div>
      <div
        class="bg-white/90 backdrop-blur-md p-10 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white/60 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-purple-50/90 text-purple-600 flex items-center justify-center mb-6"
        >
          <Icon icon="carbon:calculator" class="w-7 h-7" />
        </div>
        <h3 class="text-[24px] font-semibold text-[#1d1d1f]">
          智能价差与策略定价算法
        </h3>
        <p class="mt-4 text-[16px] text-[#6e6e73] leading-relaxed">
          内嵌超复杂成本核算引擎，动态扣除多级平台手续费、物流损耗及资金占用成本。结合卡牌稀有级别与成交活跃度，一键生成绝对净利对冲策略。
        </p>
      </div>
      <div
        class="bg-white/60 backdrop-blur-md p-10 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-emerald-50/80 text-emerald-600 flex items-center justify-center mb-6"
        >
          <Icon icon="carbon:inventory-management" class="w-7 h-7" />
        </div>
        <h3 class="text-[24px] font-semibold text-[#1d1d1f]">
          全生命周期库存风控体系
        </h3>
        <p class="mt-4 text-[16px] text-[#6e6e73] leading-relaxed">
          专为实体资产打造的高净值库存管理中枢，实时监控全局持仓盈亏。支持溢价熔断抛售、动态止损预警及跨账号批量自动化挂单，加速资金闭环流转。
        </p>
      </div>
      <div
        class="bg-white/90 backdrop-blur-md p-10 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white/60 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-amber-50/90 text-amber-600 flex items-center justify-center mb-6"
        >
          <Icon icon="carbon:machine-learning" class="w-7 h-7" />
        </div>
        <h3 class="text-[24px] font-semibold text-[#1d1d1f]">
          异构商品NLP标准化引擎
        </h3>
        <p class="mt-4 text-[16px] text-[#6e6e73] leading-relaxed">
          面对各大平台杂乱无章的非标准化描述，引入 NLP 语义提取与 CV
          图像识别交叉验证。将非标卡牌精准映射至内部标准特征库，从根源杜绝错买错卖风险。
        </p>
      </div>
    </div>
  </div>
</section>

<!-- STEAM自动交易系统 -->
<section
  id="steam"
  class="bg-[#000000] text-white pt-24 pb-28 md:pt-32 md:pb-36 relative overflow-hidden"
>
  <!-- 背景光晕 -->
  <div
    class="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 transform -translate-x-1/2 -translate-y-1/2"
  ></div>
  <div
    class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 transform translate-x-1/3 translate-y-1/3"
  ></div>

  <div class="max-w-[1080px] mx-auto px-6 relative z-10">
    <div class="text-center">
      <!-- Steam ↔ BUFF 品牌标识 -->
      <div class="flex items-center justify-center gap-6 md:gap-10 mb-8">
        <div
          class="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
        >
          <img
            src={steamLogo}
            alt="Steam"
            class="h-10 md:h-14 w-auto object-contain"
          />
        </div>
        <span class="text-2xl md:text-3xl text-gray-500 font-light">↔</span>
        <div
          class="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
        >
          <img
            src={buffLogo}
            alt="BUFF.163 Steam 游戏皮肤饰品交易平台"
            class="h-10 md:h-14 w-auto object-contain"
          />
        </div>
      </div>
      <h2
        class="text-[36px] md:text-[48px] font-bold tracking-tight leading-tight"
      >
        Steam ↔ BUFF<br />虚拟资产高频交易系统
      </h2>
      <p
        class="mt-6 text-[19px] md:text-[21px] text-gray-400 max-w-[800px] mx-auto leading-relaxed"
      >
        基于极致优化的 C#
        高可用并发架构打造，彻底打破网络延迟与平台严苛风控壁垒，构筑属于您的无眠无人值守交易帝国。
      </p>
    </div>

    <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      <div
        class="bg-[#111113] p-10 rounded-[32px] border border-gray-800 hover:border-gray-600 transition-colors duration-300"
      >
        <h3
          class="text-[24px] font-semibold text-white flex items-center gap-4"
        >
          <div
            class="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center"
          >
            <Icon icon="carbon:flash" class="text-yellow-400 w-6 h-6" />
          </div>
          亚秒级盘口侦测
        </h3>
        <p class="mt-6 text-[16px] text-gray-400 leading-relaxed">
          通过底层网络协议栈重写与极低延迟 API 链路聚合，实时锁定 Steam 社区与
          BUFF 的动态挂单。内置高精度汇率微调模型，毫秒内锁定确定性利润空间。
        </p>
      </div>
      <div
        class="bg-[#111113] p-10 rounded-[32px] border border-gray-800 hover:border-gray-600 transition-colors duration-300"
      >
        <h3
          class="text-[24px] font-semibold text-white flex items-center gap-4"
        >
          <div
            class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center"
          >
            <Icon
              icon="carbon:arrows-horizontal"
              class="text-green-400 w-6 h-6"
            />
          </div>
          双向全自动闭环
        </h3>
        <p class="mt-6 text-[16px] text-gray-400 leading-relaxed">
          真正剥离人工依赖。从 Steam 秒单入库并自动接管 BUFF 扫码上架，或 BUFF
          采购极速转手 Steam 挂单套现，双向交易全流转均由自动化引擎静默托管。
        </p>
      </div>
      <div
        class="bg-[#111113] p-10 rounded-[32px] border border-gray-800 hover:border-gray-600 transition-colors duration-300"
      >
        <h3
          class="text-[24px] font-semibold text-white flex items-center gap-4"
        >
          <div
            class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center"
          >
            <Icon icon="carbon:kubernetes" class="text-blue-400 w-6 h-6" />
          </div>
          动态并发调度矩阵
        </h3>
        <p class="mt-6 text-[16px] text-gray-400 leading-relaxed">
          系统原生拥抱多进程与多实例分布式拓扑。深度集成动态高匿 IP
          代理池与千人千面的操作拟真算法，完美规避严苛风控检测，轻松支撑万级账号集群并发。
        </p>
      </div>
      <div
        class="bg-[#111113] p-10 rounded-[32px] border border-gray-800 hover:border-gray-600 transition-colors duration-300"
      >
        <h3
          class="text-[24px] font-semibold text-white flex items-center gap-4"
        >
          <div
            class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center"
          >
            <Icon icon="carbon:security" class="text-red-400 w-6 h-6" />
          </div>
          极端行情熔断卫士
        </h3>
        <p class="mt-6 text-[16px] text-gray-400 leading-relaxed">
          赋能用户设定极细颗粒度风控指标（最低毛利阈值、日均成交量地线、价格偏离度）。内置强力黑名单清洗与盘面崩溃自动熔断开关，誓死捍卫资金绝对安全。
        </p>
      </div>
    </div>
  </div>
</section>

<!-- AI营销系统 -->
<section id="ai" class="bg-white pt-24 pb-28 md:pt-32 md:pb-36">
  <div class="max-w-[1080px] mx-auto px-6">
    <div class="text-center">
      <h2
        class="text-[36px] md:text-[48px] font-bold text-[#1d1d1f] tracking-tight leading-tight"
      >
        AI Marketing Agent<br />全域社交图谱与智能营销中枢
      </h2>
      <p
        class="mt-6 text-[19px] md:text-[21px] text-[#6e6e73] max-w-[800px] mx-auto leading-relaxed"
      >
        以大语言模型（LLM）为认知引擎，深度挖掘并破译全网高维社交数据，为您构建从『精准需求洞察』直至『内容全域分发』的无人化营销流水线。
      </p>
    </div>

    <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        class="group bg-[#fbfbfd] p-10 rounded-[32px] hover:bg-[#f5f5f7] transition-all duration-300"
      >
        <div
          class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300"
        >
          <Icon icon="carbon:data-1" class="text-white w-8 h-8" />
        </div>
        <h3 class="text-[22px] font-semibold text-[#1d1d1f]">
          全域社区数据深潜
        </h3>
        <p class="mt-4 text-[15px] text-[#6e6e73] leading-relaxed">
          爬虫网络无缝接轨小红书、知乎、Twitter、Reddit
          及主流垂类论坛。自动采集数亿级高热度帖子、长尾评论与互动点赞数据，将全网公域流量洗炼为私域高净值数字资产。
        </p>
      </div>
      <div
        class="group bg-[#fbfbfd] p-10 rounded-[32px] hover:bg-[#f5f5f7] transition-all duration-300"
      >
        <div
          class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300"
        >
          <Icon icon="carbon:machine-learning" class="text-white w-8 h-8" />
        </div>
        <h3 class="text-[22px] font-semibold text-[#1d1d1f]">
          LLM 隐性需求破译
        </h3>
        <p class="mt-4 text-[15px] text-[#6e6e73] leading-relaxed">
          摒弃传统死板的关键词匹配。系统通过前沿大模型进行高精度语义降噪分析，精准剥离用户的真实痛点、竞品软肋及未被满足的蓝海需求，自动输出战略级市场透视报告。
        </p>
      </div>
      <div
        class="group bg-[#fbfbfd] p-10 rounded-[32px] hover:bg-[#f5f5f7] transition-all duration-300"
      >
        <div
          class="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300"
        >
          <Icon icon="carbon:document-tasks" class="text-white w-8 h-8" />
        </div>
        <h3 class="text-[22px] font-semibold text-[#1d1d1f]">
          全案级物料自动生成
        </h3>
        <p class="mt-4 text-[15px] text-[#6e6e73] leading-relaxed">
          基于识别出的高潜力受众画像，一键推演包含平台调性、转化漏斗的最优分发策略。并批量生成千人千面的小红书爆款笔记、SEO深度长文及视频投流脚本，粉碎内容产能瓶颈。
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 技术支持与专家团队 -->
<section
  id="tech"
  class="bg-[#111113] text-white pt-24 pb-28 md:pt-32 md:pb-40 border-t border-gray-900"
>
  <div class="max-w-[1080px] mx-auto px-6 text-center">
    <h2
      class="text-[36px] md:text-[48px] font-bold tracking-tight leading-tight"
    >
      系统级架构，<br class="md:hidden" /><span
        class="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600"
        >硬核极客基因。</span
      >
    </h2>
    <p
      class="mt-6 text-[19px] md:text-[21px] text-gray-400 max-w-[800px] mx-auto leading-relaxed"
    >
      奇迹之上，皆是底层算力的极致压榨。由资深 System Engineer 与 Automation
      Architect 亲自操刀，构建支撑千万级吞吐量的高并发数据采集与 AI
      智能代理生态矩阵。
    </p>

    <!-- 技术栈徽章 -->
    <div
      class="mt-14 flex flex-wrap justify-center gap-4 max-w-[800px] mx-auto"
    >
      <div
        class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[15px] font-medium tracking-wide text-gray-200 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default backdrop-blur-md"
      >
        Rust (System & Core)
      </div>
      <div
        class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[15px] font-medium tracking-wide text-gray-200 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default backdrop-blur-md"
      >
        C# / .NET 8
      </div>
      <div
        class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[15px] font-medium tracking-wide text-gray-200 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default backdrop-blur-md"
      >
        C / C++
      </div>
      <div
        class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[15px] font-medium tracking-wide text-gray-200 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default backdrop-blur-md"
      >
        Python & AI Engine
      </div>
      <div
        class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[15px] font-medium tracking-wide text-gray-200 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default backdrop-blur-md"
      >
        Go & Microservices
      </div>
      <div
        class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[15px] font-medium tracking-wide text-gray-200 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default backdrop-blur-md"
      >
        Redis Cluster
      </div>
      <div
        class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[15px] font-medium tracking-wide text-gray-200 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default backdrop-blur-md"
      >
        Elasticsearch
      </div>
      <div
        class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[15px] font-medium tracking-wide text-gray-200 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default backdrop-blur-md"
      >
        Playwright Automation
      </div>
    </div>

    <div
      class="mt-24 max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-gray-800 pt-16"
    >
      <div class="flex flex-col gap-4">
        <div
          class="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center"
        >
          <Icon icon="carbon:cloud-data-ops" class="text-gray-300 w-7 h-7" />
        </div>
        <h4 class="text-white font-bold text-[22px]">超大规模研发治理</h4>
        <p class="text-gray-400 text-[15px] leading-relaxed">
          深耕高并发采集、系统级内存优化与分布式任务调度。拥有长期主导 20000+
          规模顶尖互联网企业研发体系的实战经验，服务国内外多所一流高校的前沿研究项目，保障极高可用性。
        </p>
      </div>
      <div class="flex flex-col gap-4">
        <div
          class="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center"
        >
          <Icon icon="carbon:chart-candlestick" class="text-gray-300 w-7 h-7" />
        </div>
        <h4 class="text-white font-bold text-[22px]">全领域量化降维打击</h4>
        <p class="text-gray-400 text-[15px] leading-relaxed">
          不仅在正规金融股票市场通过多算法选股与 DCF
          估值博取超额收益，更将顶级的华尔街量化思维、对冲策略降维移植至虚拟游戏饰品与实体集换式卡牌市场，形成跨界碾压优势。
        </p>
      </div>
      <div class="flex flex-col gap-4">
        <div
          class="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center"
        >
          <Icon icon="carbon:collaborate" class="text-gray-300 w-7 h-7" />
        </div>
        <h4 class="text-white font-bold text-[22px]">商业赋能与深度合作</h4>
        <p class="text-gray-400 text-[15px] leading-relaxed">
          我们交付的不仅是极致的代码，更是颠覆性的商业自动化解决方案。提供涵盖高可用架构设计、AI
          智能工作流构建至业务自动化落地的全链路顾问服务，诚邀前瞻者洽谈技术合作。
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes shine {
    0% {
      background-position: 200% center;
    }
    100% {
      background-position: -200% center;
    }
  }
</style>
