<script lang="ts">
  import "../app.css";
  import Icon from "@iconify/svelte";
  import mainLogo from "$lib/img/logo.png";

  let { children } = $props();
  let showContact = $state(false);
  let showMobileNav = $state(false);

  function clickOutside(node: HTMLElement, callback: () => void) {
    function handleClick(e: MouseEvent) {
      if (node && !node.contains(e.target as Node)) callback();
    }
    document.addEventListener("click", handleClick);
    return {
      destroy() {
        document.removeEventListener("click", handleClick);
      },
    };
  }
</script>

<div
  class="min-h-screen flex flex-col bg-[#050509] text-white font-sans selection:bg-blue-500/40"
>
  <!-- 苹果式导航：极简、毛玻璃、深色模式兼容感 -->
  <header
    class="sticky top-0 z-50 w-full h-[52px] flex items-center justify-center bg-[rgba(5,5,9,0.92)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(5,5,9,0.86)] border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300"
  >
    <nav
      class="w-full max-w-[1080px] mx-auto px-6 flex items-center justify-between h-full"
    >
      <a
        href="/"
        class="flex items-center gap-2 no-underline hover:opacity-80 transition-opacity text-gray-100"
      >
        <img
          src={mainLogo}
          alt="7788 AI Quantum Automation"
          class="h-9 md:h-10 w-auto object-contain"
        />
        <span class="text-sm md:text-base font-semibold tracking-tight"
          >7788Soft</span
        >
      </a>

      <!-- 桌面端导航 -->
      <div class="hidden md:flex items-center gap-8">
        <a
          href="#logic"
          class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors no-underline"
          >量化策略</a
        >
        <a
          href="#card"
          class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors no-underline"
          >实体套利</a
        >
        <a
          href="#steam"
          class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors no-underline"
          >高频矩阵</a
        >
        <a
          href="#ai"
          class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors no-underline"
          >智能营销</a
        >
        <a
          href="#tech"
          class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors no-underline"
          >技术顾问</a
        >
        <div class="relative group">
          <button
            type="button"
            class="text-[13px] font-medium text-gray-300 hover:text-white transition-colors no-underline inline-flex items-center gap-1"
          >
            开源
            <Icon
              icon="carbon:chevron-down"
              class="w-3 h-3 text-gray-400 group-hover:text-gray-200 transition-colors"
            />
          </button>
          <div
            class="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute right-0 top-full mt-2 min-w-[180px] bg-[#111827] border border-white/10 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl py-1.5"
          >
            <a
              href="/oss"
              class="block px-4 py-2 text-[13px] text-gray-200 hover:bg-white/5 rounded-t-2xl"
              >Koa78 框架</a
            >
            <a
              href="/xux"
              class="block px-4 py-2 text-[13px] text-gray-200 hover:bg-white/5 rounded-b-2xl"
              >XUX UI 组件</a
            >
          </div>
        </div>
        <div class="relative" use:clickOutside={() => (showContact = false)}>
          <button
            type="button"
            onclick={() => (showContact = !showContact)}
            class="px-4 py-1.5 rounded-full bg-white text-black text-[13px] font-medium hover:bg-blue-500 hover:text-white transition-all shadow-sm"
          >
            联系我
          </button>
          {#if showContact}
            <div
              class="absolute right-0 top-full mt-2 py-2 min-w-[200px] bg-[#111827] rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.6)] border border-white/10"
              role="dialog"
              aria-label="联系方式"
            >
              <a
                href="weixin://dl/chat?ai7788cb"
                class="flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors rounded-t-2xl"
              >
                <div
                  class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
                >
                  <Icon icon="ri:wechat-fill" class="text-green-600 w-5 h-5" />
                </div>
                <div class="text-left">
                  <span class="text-[11px] text-gray-400 block">微信</span>
                  <span class="text-[15px] font-medium text-white"
                    >ai7788cb</span
                  >
                </div>
              </a>
              <a
                href="tel:15377368996"
                class="flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors rounded-b-2xl"
              >
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"
                >
                  <Icon icon="ri:phone-fill" class="text-blue-600 w-5 h-5" />
                </div>
                <div class="text-left">
                  <span class="text-[11px] text-gray-400 block">手机</span>
                  <span class="text-[15px] font-medium text-white"
                    >15377368996</span
                  >
                </div>
              </a>
            </div>
          {/if}
        </div>
      </div>

      <!-- 移动端菜单按钮 -->
      <button
        type="button"
        class="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/30 transition-colors"
        onclick={() => (showMobileNav = !showMobileNav)}
        aria-label="打开导航菜单"
      >
        {#if showMobileNav}
          <Icon icon="carbon:close" class="w-4 h-4" />
        {:else}
          <Icon icon="carbon:menu" class="w-4 h-4" />
        {/if}
      </button>
    </nav>
  </header>

  <!-- 移动端抽屉导航 -->
  {#if showMobileNav}
    <div
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
      onclick={() => (showMobileNav = false)}
    ></div>
    <div
      class="fixed top-[52px] right-0 bottom-0 z-50 w-[78%] max-w-xs bg-[#050509] border-l border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] md:hidden"
    >
      <nav class="px-6 py-6 flex flex-col gap-4 text-[14px]">
        <a
          href="#logic"
          class="text-gray-100 hover:text-white"
          onclick={() => (showMobileNav = false)}
          >量化策略</a
        >
        <a
          href="#card"
          class="text-gray-100 hover:text-white"
          onclick={() => (showMobileNav = false)}
          >实体套利</a
        >
        <a
          href="#steam"
          class="text-gray-100 hover:text-white"
          onclick={() => (showMobileNav = false)}
          >高频矩阵</a
        >
        <a
          href="#ai"
          class="text-gray-100 hover:text-white"
          onclick={() => (showMobileNav = false)}
          >智能营销</a
        >
        <a
          href="#tech"
          class="text-gray-100 hover:text-white"
          onclick={() => (showMobileNav = false)}
          >技术顾问</a
        >

        <div class="mt-2 border-t border-white/10 pt-4 space-y-2">
          <p class="text-[12px] text-gray-400">开源</p>
          <a
            href="/oss"
            class="block text-gray-100 hover:text-white"
            onclick={() => (showMobileNav = false)}
            >Koa78 框架</a
          >
          <a
            href="/xux"
            class="block text-gray-100 hover:text-white"
            onclick={() => (showMobileNav = false)}
            >XUX UI 组件</a
          >
        </div>

        <div class="mt-4 border-t border-white/10 pt-4">
          <button
            type="button"
            class="w-full px-4 py-2.5 rounded-full bg-white text-black text-[14px] font-medium hover:bg-blue-500 hover:text-white transition-colors"
            onclick={() => {
              showMobileNav = false;
              showContact = true;
            }}
          >
            联系我
          </button>
        </div>
      </nav>
    </div>
  {/if}

  <main class="flex-grow">
    {@render children()}
  </main>

  <!-- 深色页脚 -->
  <footer class="bg-[#050509] border-t border-white/10">
    <div
      class="max-w-[1080px] mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6"
    >
      <div class="flex items-center gap-3">
        <img
          src={mainLogo}
          alt="7788 AI Quantum Automation"
          class="h-7 md:h-8 w-auto object-contain opacity-80"
        />
        <span class="font-bold text-gray-100 tracking-tight">7788Soft</span>
      </div>
      <div class="text-[12px] text-gray-400">
        <span>© 2026 7788Soft. 保留所有权利。</span>
        <span class="mx-2">|</span>
        <span>自动化系统架构 · 量化对冲 · AI工程</span>
      </div>
    </div>
  </footer>
</div>
