import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Carousel from "~/components/carousel";
import "../css/top.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Carousel />
      <div className="TopPageContents" >
        <label className="TopPageTitle" >エンジニア5年目のポートフォリオ</label>
        <div className="TopPageContentSection" >
          <label>エンジニアとしての職歴や学歴、自身のことを<br />以下リンク先のページで紹介しております</label>
          <img src="/images/top/mt-fuji-lake.jpg" className="TopPageImage" />
        </div>
        <div className="TopPageLinksSection" >
          <Link to="/mypage" className="TopPageLinks" >
            <label>自己紹介ページ</label>
          </Link>
          <Link to="/career" className="TopPageLinks" >
            <label>経歴紹介ページ</label>
          </Link>
          <Link to="/school" className="TopPageLinks" >
            <label>学歴紹介ページ</label>
          </Link>
        </div>
      </div>
    </div>
  );
}
