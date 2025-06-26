import { Header } from "~/components/header"
import "../css/portfolio.css";

export default function MyPage() {
  return (
    <div>
      <Header header={true} />
      <div className="PortfolioMainContents" >
        <label>マイページ</label>
      </div>
    </div>
  );
}