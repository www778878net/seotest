import Link from "next/link";

export default function About() {
  return (
    <div className="container">
      <h1>关于我们</h1>
      <p>这是关于我们的页面。</p>
      <nav>
        <ul>
          <li>
            <Link href="/">回到首页</Link>
          </li>
          <li>
            <Link href="/contact">联系我们</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}