<script lang="ts">
  import mainLogo from "$lib/img/logo.png";
  import imgDouyin from "./抖音.png";
  import imgKuaishou from "./快手.png";
  import imgXiaohongshu from "./小红书.png";
  import imgZhihu from "./知乎.png";

  const CONTACT_EMAIL = "18569795073@163.com";
  const MAILTO_HREF = `mailto:${CONTACT_EMAIL}`;
  const GITHUB_REPO_URL = "https://github.com/www778878net/aiSales";

  let faqOpen = $state<number | null>(0);
  function toggleFaq(i: number) {
    faqOpen = faqOpen === i ? null : i;
  }

  function scrollToCta() {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  }

  let showContactDialog = $state(false);
  let copyTip = $state(false);

  function openContactDialog() {
    showContactDialog = true;
    copyTip = false;
  }

  function closeContactDialog() {
    showContactDialog = false;
    copyTip = false;
  }

  function openContactMail() {
    window.location.href = MAILTO_HREF;
  }

  async function copyContactEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = CONTACT_EMAIL;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    copyTip = true;
    window.setTimeout(() => {
      copyTip = false;
    }, 2200);
  }
</script>

<svelte:head>
  <title>小柒 AI 营销员 - 知识库驱动的公域流量工作台</title>
  <meta
    name="description"
    content="知识库驱动，在公域里找对内容、说对话。桌面端 AI 营销工作台。"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="sales-landing min-h-screen scroll-smooth bg-[#f5f7f6] text-[#1e293b]"
  style="font-family: Inter, 'Source Han Sans SC', 'Noto Sans SC', sans-serif;"
>
  <!-- TopNavBar -->
  <nav
    class="fixed top-0 z-50 w-full border-b border-[#1e293b]/6 bg-[#f5f7f6]/85 backdrop-blur-md"
  >
    <div
      class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-8"
    >
      <a
        href="/"
        class="flex shrink-0 items-center gap-2.5 no-underline transition-opacity hover:opacity-85"
        aria-label="返回首页"
      >
        <img
          src={mainLogo}
          alt="7788Soft"
          class="h-9 w-auto object-contain md:h-10"
        />
        <span
          class="hidden text-[15px] font-semibold tracking-tight text-[#1e293b] sm:inline"
          >7788Soft</span
        >
      </a>
      <div class="hidden flex-1 justify-center gap-8 md:flex">
        <a
          class="text-sm font-medium tracking-tight text-[#1e293b] transition-colors duration-300 hover:text-[#0d9488]"
          href="/sales#features">功能特性</a
        >
        <a
          class="text-sm font-medium tracking-tight text-[#1e293b] transition-colors duration-300 hover:text-[#0d9488]"
          href="/sales#industries">行业方案</a
        >
        <button
          type="button"
          class="cursor-pointer border-0 bg-transparent text-sm font-medium tracking-tight text-[#1e293b] hover:text-[#0d9488]"
          onclick={openContactDialog}
        >
          联系我们
        </button>
      </div>
      <button
        type="button"
        class="shrink-0 cursor-pointer rounded-xl border-0 bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#0891b2] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#0d9488]/15 hover:brightness-105 md:px-6"
        onclick={scrollToCta}
      >
        开始使用
      </button>
    </div>
  </nav>

  <!-- Hero -->
  <section class="relative overflow-hidden pb-20 pt-32">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_18%_18%,rgb(20_184_166_/_12%),transparent_55%),radial-gradient(ellipse_70%_50%_at_88%_32%,rgb(14_165_233_/_10%),transparent_50%)] opacity-90"></div>
    <div class="mx-auto max-w-7xl space-y-8 px-8">
      <div
        class="inline-flex items-center gap-2 rounded-full bg-[#ccfbf1] px-3 py-1 ring-1 ring-[#14b8a6]/15"
      >
        <span class="h-2 w-2 rounded-full bg-[#0d9488]"></span>
        <span
          class="text-[0.6875rem] font-bold uppercase tracking-wider text-[#0f766e]"
          >桌面端 AI 营销工作台</span
        >
      </div>
      <h1
          class="text-5xl font-extrabold leading-[1.1] text-[#1e293b] lg:text-7xl"
          style="font-family: 'Plus Jakarta Sans', 'Source Han Sans SC', sans-serif;"
        >
          用行业知识库，<br />
          <span
            class="bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0369a1] bg-clip-text text-transparent"
            >在公域里找对内容、说对话。</span
          >
        </h1>
        <p
          class="max-w-2xl text-xl leading-relaxed text-[#475569]"
        >
          不是灌水，是像你的员工在说话。知识库驱动，回复有依据，口径统一。为中小企业打造的公域获客利器。
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <button
            type="button"
            class="flex cursor-pointer items-center gap-2 rounded-xl border-0 bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#0891b2] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#0d9488]/20 hover:brightness-105"
            onclick={openContactDialog}
          >
            联系我们
          </button>
          <button
            type="button"
            class="rounded-xl border-0 bg-[#ccfbf1] px-8 py-4 text-lg font-bold text-[#0f766e] ring-1 ring-[#14b8a6]/20 hover:bg-[#99f6e4] hover:shadow-md hover:shadow-[#0d9488]/10"
          >
            预约演示
          </button>
        </div>
        <div class="border-t border-[#94a3b8]/18 pt-8 text-center">
          <p
            class="mb-6 text-[0.6875rem] font-bold uppercase tracking-wide text-[#64748b]"
          >
            核心支持平台
          </p>
          <div
            class="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12"
          >
            <div
              class="flex min-w-[7rem] flex-col items-center gap-2 rounded-2xl bg-white/90 px-5 py-4 shadow-sm ring-1 ring-[#e2e8f0]/90 transition-colors hover:bg-[#fe2c55]/8"
              title="抖音"
            >
              <img
                src={imgDouyin}
                alt="抖音"
                class="h-12 w-12 object-contain sm:h-14 sm:w-14"
                decoding="async"
              />
              <span class="text-base font-bold sm:text-lg">抖音</span>
            </div>
            <div
              class="flex min-w-[7rem] flex-col items-center gap-2 rounded-2xl bg-white/90 px-5 py-4 shadow-sm ring-1 ring-[#e2e8f0]/90 transition-colors hover:bg-[#ff4906]/8"
              title="快手"
            >
              <img
                src={imgKuaishou}
                alt="快手"
                class="h-12 w-12 object-contain sm:h-14 sm:w-14"
                decoding="async"
              />
              <span class="text-base font-bold sm:text-lg">快手</span>
            </div>
            <div
              class="flex min-w-[7rem] flex-col items-center gap-2 rounded-2xl bg-white/90 px-5 py-4 shadow-sm ring-1 ring-[#e2e8f0]/90 transition-colors hover:bg-[#ff2442]/8"
              title="小红书"
            >
              <img
                src={imgXiaohongshu}
                alt="小红书"
                class="h-12 w-12 object-contain sm:h-14 sm:w-14"
                decoding="async"
              />
              <span class="text-base font-bold sm:text-lg">小红书</span>
            </div>
            <div
              class="flex min-w-[7rem] flex-col items-center gap-2 rounded-2xl bg-white/90 px-5 py-4 shadow-sm ring-1 ring-[#e2e8f0]/90 transition-colors hover:bg-[#0084ff]/8"
              title="知乎"
            >
              <img
                src={imgZhihu}
                alt="知乎"
                class="h-12 w-12 object-contain sm:h-14 sm:w-14"
                decoding="async"
              />
              <span class="text-base font-bold sm:text-lg">知乎</span>
            </div>
          </div>
        </div>
    </div>
  </section>

  <!-- Pain points -->
  <section class="bg-[#ecfdf5]/80 py-24">
    <div class="mx-auto max-w-7xl px-8">
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <h2
          class="mb-4 text-3xl font-bold lg:text-4xl"
          style="font-family: 'Plus Jakarta Sans', sans-serif;"
        >
          公域获客，是否正让您精疲力竭？
        </h2>
        <p class="text-[#475569]">
          传统的人工回复方式已无法满足高效率、高质量的营销需求
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each [{ icon: "payments", title: "获客成本高昂", body: "人工客服薪酬、流量采购费用持续攀升，转化率却止步不前。" }, { icon: "person_off", title: "回复不专业", body: "员工流动性大，新手上岗慢，错误回复导致潜在客户流失。" }, { icon: "error", title: "口径不统一", body: "不同员工回复差异巨大，品牌形象受损，核心卖点传达不清。" }] as card}
          <div
            class="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm shadow-[#0f766e]/5 ring-1 ring-[#e2e8f0]/80"
          >
            <div>
              <div
                class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#b41340]/10 text-[#b41340]"
              >
                <span class="material-symbols-outlined">{card.icon}</span>
              </div>
              <h3
                class="mb-3 text-xl font-bold"
                style="font-family: 'Plus Jakarta Sans', sans-serif;"
              >
                {card.title}
              </h3>
              <p class="leading-relaxed text-[#475569]">{card.body}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="overflow-hidden py-24" id="features">
    <div class="mx-auto max-w-7xl px-8">
      <div class="mb-32 grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
        <div>
          <h2
            class="mb-8 text-3xl font-bold leading-tight lg:text-5xl"
            style="font-family: 'Plus Jakarta Sans', sans-serif;"
          >
            知识库驱动：<br /><span class="text-[#0f766e]">回复不是凭空编造</span>
          </h2>
          <p class="mb-8 text-lg leading-relaxed text-[#475569]">
            导入您的产品手册、行业案例、FAQ。小柒将基于真实的知识背景生成回复，确保每一句话都有理有据。
          </p>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-[#0d9488]"
                >check_circle</span
              >
              <span class="font-medium">精准匹配业务场景，拒绝模棱两可</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-[#0d9488]"
                >check_circle</span
              >
              <span class="font-medium">支持多种文档格式一键导入</span>
            </li>
          </ul>
        </div>
        <div class="relative">
          <div
            class="relative aspect-square overflow-hidden rounded-3xl bg-[#ccfbf1] p-8 ring-1 ring-[#14b8a6]/15"
          >
            <img
              class="h-full w-full rounded-2xl object-cover"
              alt="知识库与数据网络示意图"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiHjLebFblnbMqUTVe0QQ_s3UeDEU98pRoHeoK43FhFN_jEDzlvZMaaVTiyEvwd2S0BEwMmuHl0uoWL-8Dep_mDUua7mQS7dzuqE_mDS10C6ruRnHO7nYwqqV_koA7R_028FJDTj86ak1w6-rHjEbrf9wnYX_JXyjfpnIRQAteDbwM5lKaV2NArIsC1fahSPP76uHpOm2gC9dfvPu-eRGx1c8oWjHbn47dLrn9lpEvnsXNLzP6aFoAWJeQWtw3o32AbnNKv1Za1A"
            />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
        <div class="lg:order-2">
          <h2
            class="mb-8 text-3xl font-bold leading-tight lg:text-5xl"
            style="font-family: 'Plus Jakarta Sans', sans-serif;"
          >
            相关内容发现：<br /><span class="text-[#0369a1]">找准流量切入点</span>
          </h2>
          <p class="mb-8 text-lg leading-relaxed text-[#475569]">
            全天候监控社交平台上的热点与潜在意向，智能过滤无关信息，帮您在海量内容中发现“真正的商机”。
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-xl bg-[#ecfdf5] p-4 ring-1 ring-[#14b8a6]/10">
              <div class="mb-1 text-2xl font-bold text-[#0f766e]">24/7</div>
              <div class="text-sm">全天候监控</div>
            </div>
            <div class="rounded-xl bg-[#ecfdf5] p-4 ring-1 ring-[#14b8a6]/10">
              <div class="mb-1 text-2xl font-bold text-[#0f766e]">98%</div>
              <div class="text-sm">意向识别率</div>
            </div>
          </div>
        </div>
        <div class="relative lg:order-1">
          <div
            class="aspect-video rounded-3xl bg-[#e0f2fe] p-4 shadow-xl shadow-[#0369a1]/10 ring-1 ring-[#7dd3fc]/25"
          >
            <img
              class="h-full w-full rounded-2xl object-cover"
              alt="公域意向识别示意图"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaJzxQ_M08lE6yTgwNH5dQM6y7Zga3ZvX465mx_gZq9JnarBc_sigqbe8irhdtCYWOqmaqKoj4ppD3jz-KwpPVn_gn_bSE6bops8taZ_zTinuWC-kitor3yuriGaFpnCEly672eFeOOv2EbpkVFM7nNheHb2p2nCYlAMwGf8MMoTdJsR33ueXOrQasOL0V_na5WrFqf1iiTYMasq7TkD9-dPnJ_XPagMR-n73lI25mj_AN23DS15vopEOw0kPgWdR8fGQbTsUc6A"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Workflow -->
  <section class="bg-[#0c1222] py-24 text-[#f8fafc]">
    <div class="mx-auto max-w-7xl px-8">
      <div class="mb-16 text-center">
        <h2
          class="mb-4 text-3xl font-bold lg:text-4xl"
          style="font-family: 'Plus Jakarta Sans', sans-serif;"
        >
          极简工作流
        </h2>
        <p class="text-[#94a3b8]">简单四步，让 AI 营销员正式入职</p>
      </div>
      <div class="relative grid grid-cols-1 gap-12 md:grid-cols-4">
        <div
          class="absolute left-0 top-12 -z-0 hidden h-0.5 w-full bg-[#334155]/90 md:block"
        ></div>
        {#each [{ icon: "settings_suggest", title: "预设规则", sub: "定义您的回复调性与业务边界" }, { icon: "travel_explore", title: "发现内容", sub: "AI 自动扫描各平台高价值动态" }, { icon: "forum", title: "智能互动", sub: "基于知识库，生成个性化专业回复" }, { icon: "analytics", title: "持续迭代", sub: "反馈数据分析，不断优化营销模型" }] as step}
          <div class="relative z-10 text-center">
            <div
              class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#0ea5e9] text-[#f8fafc] shadow-xl shadow-[#0d9488]/25 ring-2 ring-white/10"
            >
              <span class="material-symbols-outlined text-4xl">{step.icon}</span
              >
            </div>
            <h3
              class="mb-2 text-xl font-bold"
              style="font-family: 'Plus Jakarta Sans', sans-serif;"
            >
              {step.title}
            </h3>
            <p class="text-sm text-[#94a3b8]">{step.sub}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Industries -->
  <section class="py-24" id="industries">
    <div class="mx-auto max-w-7xl px-8">
      <div
        class="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row"
      >
        <div class="max-w-2xl">
          <h2
            class="mb-4 text-3xl font-bold lg:text-4xl"
            style="font-family: 'Plus Jakarta Sans', sans-serif;"
          >
            多行业深度适配
          </h2>
          <p class="text-lg text-[#475569]">
            无论您的行业多专业，小柒都能快速学习并像专家一样对话。
          </p>
        </div>
        <button
          type="button"
          class="flex items-center gap-2 font-bold text-[#0d9488] hover:text-[#0f766e]"
        >
          了解更多行业案例
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {#each [{ title: "家具家居", sub: "专业解答材质、风格匹配与安装建议", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAela0n1TizbLwWCH8gBAUlb7w9PvYTIQoOT7bKnzQrjzJrQ7TRMTDAp-XHYRxKgUzqjvRUAyaj3_fAN10VgE8DN-433Q4TVvUP_Ky7rzpJvZ8PjV4AY7ZXCgSwiIx0v2GMbMsXaYD0jqlECrGGmV_wmXgBHRZepUibahqqOG5JJkpkhnZnysL2fPqvArEKbPGyXXTOMI73u23Kkvn6jRI7oeLel6RPWU9DuQ1w1fGH-HNB8e02CTRCoMt-xKHI_bLWL5dHD4ZQVg" }, { title: "装修建材", sub: "针对复杂的施工参数提供标准化解释", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfFreBX5PZcXCP0UrM6cX1JS_CKhGqOoteZtX-vdQNhggKAf6gPng7wk-uoytAtDhJlWc2d8W_7uOMlfeVMODRDV_c3ybIn2aQcaaCTila6zuxSE4jEIQpSQO1Rw2KC4KnJSYW_sQH0aJLTxpLcJQZPPhr42kFBUpR6icvrU_GTvBR9g_Uj-5kG1i7TKLRbKYYqCckng-rWgdRifnEKJSQ1TjQOhgWH6wq336ER53X_65aB9XPaH0zUD5WwbzJLfpK9hKP7Owimg" }, { title: "本地生活", sub: "多门店统一话术，提升到店转化效率", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmZxU3fN5vj47i1YCB4kvQvrtMWUipsiYgWVEQxkJy8LIbLV3jOmZDNvuvSRdDDCCekRvuoQ-OIHHmAKnils-ZXDyxlCmEUwxn9q3dH1C4jNoVtJtT0UUZkSUDd-CbAoMArqwjhuaO4myRau3wtNAl01amkicyZ0aOWeYwRTxcMlRTIv8s4VxtDa1HbDRaioqrOc5lSHPc-S3hObEjY6gzHADVGYINiWwx3wtIjhEPUzP1JRp5h_sAvGXIGJNk1k9xPyLYnEs1cQ" }, { title: "零售电商", sub: "快速响应产品咨询，把握每一个订单", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwvXTjVHJ1lVKZlYsu_RVZn2oxsDe_-o0Fr5zd2mPAnVmZT-AXBQQ2ku9yxbx_16JoPPH_DepwXOlwfhhVe7Kbn4zoWehZ5CzP7eCwTJ8t_BlSR36jlC5gj21_NfU-IgQ4fAqvI-66TEro3ngvrAso2Ajl48E9OVDnIduwBV11pEnqmphgI_x-TjalSptDTfHQYO0XiJ_0jZ-IDKmNlF34G-5ZAmLo7Cv-X0j9xis7CSqCqU9pwAntyBEPfbCxr-tOfLA5p-5Cg" }] as ind}
          <div
            class="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#e0f2fe] ring-1 ring-[#7dd3fc]/30"
          >
            <img
              class="absolute inset-0 h-full w-full object-cover"
              alt={ind.title}
              src={ind.img}
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3
                class="mb-2 text-xl font-bold text-white"
                style="font-family: 'Plus Jakarta Sans', sans-serif;"
              >
                {ind.title}
              </h3>
              <p class="text-sm text-white/70">{ind.sub}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Pricing anchor -->
  <section class="hidden" id="pricing" aria-hidden="true"></section>

  <!-- FAQ accordion -->
  <section class="bg-[#ecfdf5]/70 py-24">
    <div class="mx-auto max-w-3xl px-8">
      <h2
        class="mb-12 text-center text-3xl font-bold"
        style="font-family: 'Plus Jakarta Sans', sans-serif;"
      >
        常见问题
      </h2>
      <div class="space-y-4">
        {#each [{ q: "小柒 AI 会被平台封号吗？", a: "小柒是一款桌面端辅助工具，通过 AI 提供回复建议而非自动灌水。回复由您确认或微调后发出，完全符合各社交平台的合规规则。" }, { q: "知识库需要什么格式？", a: "支持 PDF, Word, TXT, Excel 以及直接粘贴文本。您可以根据业务变动随时更新知识库。" }, { q: "我可以试用吗？", a: "当然！请前往下方 GitHub 仓库查看说明并获取试用方式。" }] as item, i}
          <div
            class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#e2e8f0]/90 transition-shadow duration-300 hover:shadow-md"
          >
            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-[#f8fafc]/80"
              onclick={() => toggleFaq(i)}
            >
              <h4 class="font-bold">{item.q}</h4>
              <span class="material-symbols-outlined shrink-0"
                >{faqOpen === i ? "expand_less" : "expand_more"}</span
              >
            </button>
            {#if faqOpen === i}
              <div class="border-t border-[#94a3b8]/12 bg-[#f0fdfa]/90 px-6 pb-6 pt-0">
                <p class="pt-4 text-sm leading-relaxed text-[#475569]">
                  {item.a}
                </p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-24" id="cta-final">
    <div class="mx-auto max-w-7xl px-8">
      <div
        class="relative overflow-hidden rounded-[3rem] bg-[linear-gradient(135deg,#0f766e_0%,#0e7490_45%,#0369a1_100%)] p-12 text-center text-[#f8fafc] shadow-2xl shadow-[#0d9488]/20 lg:p-24"
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-10"
          style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"
        ></div>
        <h2
          class="relative z-10 mb-8 text-4xl font-extrabold lg:text-6xl"
          style="font-family: 'Plus Jakarta Sans', sans-serif;"
        >
          现在，就让专业的 AI <br />成为您的金牌营销员
        </h2>
        <p class="relative z-10 mx-auto mb-12 max-w-2xl text-xl opacity-90">
          提升获客效率，从构建您的专属行业知识库开始。
        </p>
        <div
          class="relative z-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 text-xl font-bold text-[#0f766e] shadow-xl no-underline hover:shadow-xl"
          >
            去 GitHub
          </a>
          <button
            type="button"
            class="cursor-pointer rounded-xl border border-white/25 bg-white/10 px-10 py-5 text-xl font-bold text-white backdrop-blur-md hover:bg-white/20"
            onclick={openContactDialog}
          >
            联系商务合作
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer
    class="w-full border-t border-[#1e293b]/8 bg-[#f5f7f6] py-12"
    id="contact"
  >
    <div
      class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-8 md:grid-cols-4"
    >
      <div class="col-span-2 md:col-span-1">
        <div class="mb-4 text-lg font-bold text-[#1e293b]">
          The Intelligent Synthesis
        </div>
        <p class="text-xs leading-6 text-[#475569]">
          助力中小企业在 AI 时代实现数字化获客转型。
        </p>
      </div>
      <div>
        <h4 class="mb-4 text-sm font-bold">产品</h4>
        <ul class="space-y-2">
          <li>
            <a
              class="text-xs leading-6 text-[#64748b] no-underline transition-colors hover:text-[#0d9488]"
              href="/sales#features">功能特性</a
            >
          </li>
          <li>
            <a
              class="text-xs leading-6 text-[#64748b] no-underline transition-colors hover:text-[#0d9488]"
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer">GitHub 仓库</a
            >
          </li>
          <li>
            <a
              class="text-xs leading-6 text-[#64748b] no-underline transition-colors hover:text-[#0d9488]"
              href="/sales#pricing">价格方案</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h4 class="mb-4 text-sm font-bold">支持</h4>
        <ul class="space-y-2">
          <li>
            <span class="text-xs leading-6 text-[#64748b]">帮助文档</span>
          </li>
          <li>
            <button
              type="button"
              class="cursor-pointer border-0 bg-transparent p-0 text-left text-xs leading-6 text-[#64748b] hover:text-[#0d9488]"
              onclick={openContactDialog}
            >
              联系我们
            </button>
          </li>
          <li>
            <span class="text-xs leading-6 text-[#64748b]">Status</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="mb-4 text-sm font-bold">法律</h4>
        <ul class="space-y-2">
          <li>
            <span class="text-xs leading-6 text-[#64748b]"
              >Privacy Policy</span
            >
          </li>
          <li>
            <span class="text-xs leading-6 text-[#64748b]"
              >Terms of Service</span
            >
          </li>
          <li>
            <span class="text-xs leading-6 text-[#64748b]">Security</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-[#1e293b]/8 px-8 pt-8 md:flex-row"
    >
      <p class="text-xs leading-6 text-[#64748b]">
        © 2026 7788Soft. All rights reserved.
      </p>
      <div class="flex gap-6">
        <span class="material-symbols-outlined cursor-pointer text-[#64748b] transition-colors hover:text-[#0d9488]"
          >language</span
        >
        <span class="material-symbols-outlined cursor-pointer text-[#64748b] transition-colors hover:text-[#0d9488]"
          >share</span
        >
      </div>
    </div>
  </footer>

  {#if showContactDialog}
    <div
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4"
      role="presentation"
      onclick={closeContactDialog}
    >
      <div
        class="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-[#1e293b]/10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-email-title"
        tabindex="-1"
        onclick={(e) => e.stopPropagation()}
        onkeydown={(e) => {
          if (e.key === "Escape") {
            e.stopPropagation();
            closeContactDialog();
          }
        }}
      >
        <h2
          id="contact-email-title"
          class="text-lg font-bold text-[#1e293b]"
          style="font-family: 'Plus Jakarta Sans', sans-serif;"
        >
          联系我们
        </h2>
        <p class="mt-2 text-sm text-[#64748b]">复制邮箱后，在您的邮件应用中粘贴并发送即可。</p>
        <p class="mt-2 text-sm text-[#64748b]">我们看到您的需求后，会尽快与您联系。</p>
        <div class="mt-5">
          <label class="sr-only" for="contact-email-field">商务邮箱</label>
          <input
            id="contact-email-field"
            type="text"
            readonly
            value={CONTACT_EMAIL}
            class="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 font-mono text-[0.9375rem] text-[#0f766e] outline-none ring-[#0d9488] focus:ring-2"
            onfocus={(e) => e.currentTarget.select()}
          />
        </div>
        {#if copyTip}
          <p class="mt-2 text-sm font-medium text-[#0d9488]">已复制到剪贴板</p>
        {/if}
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            class="flex-1 cursor-pointer rounded-xl border-0 bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#0891b2] px-4 py-3 text-sm font-semibold text-white shadow-md hover:brightness-105"
            onclick={copyContactEmail}
          >
            复制邮箱
          </button>
          <button
            type="button"
            class="flex-1 cursor-pointer rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm font-semibold text-[#1e293b] hover:bg-[#f1f5f9]"
            onclick={() => {
              openContactMail();
              closeContactDialog();
            }}
          >
            打开邮件客户端
          </button>
        </div>
        <button
          type="button"
          class="mt-4 w-full cursor-pointer rounded-xl border-0 bg-transparent py-2 text-sm text-[#64748b] hover:text-[#1e293b]"
          onclick={closeContactDialog}
        >
          关闭
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  .sales-landing h1,
  .sales-landing h2,
  .sales-landing h3 {
    font-family:
      "Plus Jakarta Sans",
      "Source Han Sans SC",
      "Noto Sans SC",
      sans-serif;
  }

  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 0,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24;
  }
</style>
