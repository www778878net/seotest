import Link from "next/link";

export default function Contact() {
  return (
    <div className="container">
      <h1>联系我们</h1>
      <p>这是我们的联系方式页面。</p>
      <nav>
        <ul>
          <li>
            <Link href="/">回到首页</Link>
          </li>
          <li>
            <Link href="/about">关于我们</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}