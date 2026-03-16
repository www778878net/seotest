<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>Koa78 开源框架 - 7788Soft</title>
  <meta
    name="description"
    content="Koa78 高生产力、高并发、快速开发的 Node.js / Koa 开源后端框架，源自十八年 ERP 与十年云开发与量化投资经验沉淀。"
  />
</svelte:head>

<section
  class="min-h-[calc(100vh-140px)] bg-[#050509] text-white pt-20 pb-24 md:pt-28 md:pb-32 relative overflow-hidden"
>
  <!-- 渐变背景光晕 -->
  <div class="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
    <div
      class="absolute -top-40 -left-24 w-96 h-96 bg-gradient-to-br from-sky-500 via-indigo-500 to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-[-120px] right-[-40px] w-[460px] h-[460px] bg-gradient-to-tl from-emerald-500 via-cyan-400 to-transparent rounded-full blur-[140px]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_55%)]"
    ></div>
  </div>

  <div class="relative max-w-[1080px] mx-auto px-6">
    <!-- 顶部返回与标签 -->
    <div class="flex items-center justify-between mb-10 md:mb-14">
      <button
        type="button"
        onclick={() => history.back()}
        class="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-white transition-colors"
      >
        <Icon icon="carbon:chevron-left" class="w-4 h-4" />
        返回上一页
      </button>
      <span
        class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.22em] text-gray-300"
      >
        <Icon icon="carbon:open-panel-filled-top" class="w-3.5 h-3.5" />
        OPEN SOURCE
      </span>
    </div>

    <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
      <!-- 左侧标题与简介 -->
      <div class="flex-1 space-y-6">
        <p class="text-[13px] font-semibold tracking-[0.22em] text-sky-400/80">
          KOA78 · NODE.JS / KOA
        </p>
        <h1
          class="text-[34px] md:text-[44px] font-bold tracking-tight leading-tight"
        >
          Koa78 开源框架<br class="md:hidden" /><span
            class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300"
            >高生产力 · 高并发 · 高可靠</span
          >
        </h1>
        <p class="text-[16px] md:text-[18px] text-gray-300 leading-relaxed">
          十八年 ERP 开发经验、十年云开发经验、十五年股票期货投资经验、十年投资分析平台开发经验的系统性沉淀。
          了解业务，擅长解决生产经营实际问题，将多年优化打磨并一直稳定运行中的项目逐步开源。
          因为自己在用，会持续维护，可放心用于生产环境。
        </p>

        <div class="flex flex-wrap gap-3">
          <a
            href="https://github.com/www778878net/koa78"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-[14px] font-medium hover:bg-sky-500 hover:text-white transition-colors shadow-sm"
          >
            <Icon icon="carbon:logo-github" class="w-4 h-4" />
            前往 GitHub 查看源码
          </a>
          <a
            href="https://github.com/www778878net/koa78/blob/main/README.md"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-[13px] text-gray-200 hover:border-sky-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Icon icon="carbon:document" class="w-4 h-4" />
            在线文档
          </a>
        </div>
      </div>

      <!-- 右侧特性卡片 -->
      <div
        class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
      >
        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-md hover:bg-white/8 hover:border-sky-400/60 transition-all"
        >
          <h2 class="text-[17px] font-semibold mb-2.5">简介 introduction</h2>
          <ul class="space-y-1.5 text-[14px] text-gray-300">
            <li>封装 Koa，显著降低上手与学习成本。</li>
            <li>稳定运行数年，两台单核 1G 机器可支撑数千并发。</li>
            <li>几行代码搞定增删查改及批量新增等常见 API。</li>
          </ul>
        </div>

        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-md hover:bg-white/8 hover:border-emerald-400/60 transition-all"
        >
          <h2 class="text-[17px] font-semibold mb-2.5">效率与扩展性</h2>
          <ul class="space-y-1.5 text-[14px] text-gray-300">
            <li>
              有完善的低代码前后端框架，1
              位后端可轻松配合 4 位以上前端协同开发。
            </li>
            <li>业务表与数据表一一对应，一个目录就是一套小功能。</li>
            <li>一个文件就是一个数据表，天然适合拆分、重构与模块化治理。</li>
          </ul>
        </div>

        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-md hover:bg-white/8 hover:border-indigo-400/60 transition-all"
        >
          <h2 class="text-[17px] font-semibold mb-2.5">稳定运维与调试</h2>
          <ul class="space-y-1.5 text-[14px] text-gray-300">
            <li>适应性强，可同时运行在阿里云和腾讯云等多种环境。</li>
            <li>可设置追踪某几个用户、某张表或某个目录的所有调用。</li>
            <li>内置 API 调用计数与耗时统计，以及出错微信报警机制。</li>
          </ul>
        </div>

        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-md hover:bg-white/8 hover:border-amber-400/60 transition-all"
        >
          <h2 class="text-[17px] font-semibold mb-2.5">演进能力与 SaaS 场景</h2>
          <ul class="space-y-1.5 text-[14px] text-gray-300">
            <li>十行代码搞定核心逻辑，「想装不会都难」。</li>
            <li>
              一个目录一个小系统，一个版本一个路径，新旧 API
              可长期共存，实现「边开车边换胎」式重构。
            </li>
            <li>支持分账套或分用户数据隔离，天然适配多租户 SaaS 应用。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

