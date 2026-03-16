<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>XUX UI 组件库 - 7788Soft</title>
  <meta
    name="description"
    content="XUX 是一个基于 Vue 3 + TypeScript 的现代化 UI 组件库，专注企业级应用的标准化设计与高性能体验。"
  />
</svelte:head>

<section
  class="min-h-[calc(100vh-140px)] bg-[#050509] text-white pt-20 pb-24 md:pt-28 md:pb-32 relative overflow-hidden"
>
  <!-- 渐变背景光晕 -->
  <div class="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
    <div
      class="absolute -top-40 -right-10 w-96 h-96 bg-gradient-to-br from-sky-500 via-cyan-400 to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-[-120px] left-[-40px] w-[460px] h-[460px] bg-gradient-to-tl from-indigo-500 via-violet-500 to-transparent rounded-full blur-[140px]"
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
        <Icon icon="carbon:apps" class="w-3.5 h-3.5" />
        UI LIBRARY
      </span>
    </div>

    <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
      <!-- 左侧标题与简介 -->
      <div class="flex-1 space-y-6">
        <p class="text-[13px] font-semibold tracking-[0.22em] text-sky-400/80">
          XUX · VUE 3 UI 组件库
        </p>
        <h1
          class="text-[34px] md:text-[44px] font-bold tracking-tight leading-tight"
        >
          XUX UI 组件库<br class="md:hidden" /><span
            class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300"
            >为企业级应用而生</span
          >
        </h1>
        <p class="text-[16px] md:text-[18px] text-gray-300 leading-relaxed">
          XUX 是一个基于 Vue 3 + TypeScript 的现代化 UI 组件库，专注企业级应用场景。
          提供标准化的设计语言、高性能组件实现和极致的开发体验，让团队可以更快地搭建稳定、易维护的前端界面。
        </p>

        <div class="flex flex-wrap gap-3">
          <a
            href="https://xux.xlcig.cn/"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-[14px] font-medium hover:bg-sky-500 hover:text-white transition-colors shadow-sm"
          >
            <Icon icon="carbon:launch" class="w-4 h-4" />
            访问 XUX 官网
          </a>
          <a
            href="https://xux.xlcig.cn/guide/changelog"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-[13px] text-gray-200 hover:border-sky-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Icon icon="carbon:code" class="w-4 h-4" />
            更新日志
          </a>
        </div>

        <div class="mt-3 flex flex-wrap gap-2 text-[12px] text-gray-300">
          <a
            href="https://gitee.com/leheya/xux"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Icon icon="simple-icons:gitee" class="w-3.5 h-3.5" />
            Gitee 仓库
          </a>
          <a
            href="https://www.npmjs.com/package/@xlui/xux-ui"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Icon icon="logos:npm-icon" class="w-3.5 h-3.5" />
            npm: @xlui/xux-ui
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
          <h2 class="text-[17px] font-semibold mb-2.5">为什么选择 XUX？</h2>
          <p class="text-[14px] text-gray-300 leading-relaxed">
            XUX 是一套聚焦「实际业务落地」的 Vue 3 UI
            组件库，兼顾设计一致性、性能与开发效率，帮助团队更快交付工业级前端产品。
          </p>
        </div>

        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-md hover:bg-white/8 hover:border-emerald-400/60 transition-all"
        >
          <h2 class="text-[17px] font-semibold mb-2.5">标准化设计</h2>
          <ul class="space-y-1.5 text-[14px] text-gray-300">
            <li>参考 Ant Design 等主流设计系统，形成统一的设计语言。</li>
            <li>组件 API 统一、语义清晰，大幅降低团队学习和协作成本。</li>
            <li>适合在中大型后台管理、业务中台和企业级产品中落地。</li>
          </ul>
        </div>

        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-md hover:bg-white/8 hover:border-indigo-400/60 transition-all"
        >
          <h2 class="text-[17px] font-semibold mb-2.5">高性能实现</h2>
          <ul class="space-y-1.5 text-[14px] text-gray-300">
            <li>组件轻量化设计，按需加载，避免不必要的体积开销。</li>
            <li>优化渲染路径，在大数据量场景下保持流畅体验。</li>
            <li>与 Vue 3 的响应式系统深度契合，减少不必要的重渲染。</li>
          </ul>
        </div>

        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-md hover:bg-white/8 hover:border-amber-400/60 transition-all"
        >
          <h2 class="text-[17px] font-semibold mb-2.5">开发体验优先</h2>
          <ul class="space-y-1.5 text-[14px] text-gray-300">
            <li>完整的 TypeScript 类型支持，接口友好、智能提示完善。</li>
            <li>提供详细文档、示例与最佳实践，降低上手门槛。</li>
            <li>配合活跃的社区支持，让问题可以被快速响应和解决。</li>
          </ul>
        </div>

        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-md hover:bg-white/8 hover:border-cyan-400/60 transition-all"
        >
          <h2 class="text-[17px] font-semibold mb-2.5">浏览器支持</h2>
          <ul class="space-y-1.5 text-[14px] text-gray-300">
            <li>Chrome ≥ 90</li>
            <li>Firefox ≥ 88</li>
            <li>Safari ≥ 14</li>
            <li>Edge ≥ 90</li>
            <li>主流移动端浏览器</li>
          </ul>
        </div>

        <div
          class="bg-white/5 border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-md hover:bg-white/8 hover:border-fuchsia-400/60 transition-all"
        >
          <h2 class="text-[17px] font-semibold mb-2.5">版本信息</h2>
          <p class="text-[14px] text-gray-300 leading-relaxed">
            当前稳定版本：<span class="font-semibold text-cyan-300"
              >1.5.10</span
            >。已在多个生产环境项目中长期验证，适合直接用于企业级应用。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

