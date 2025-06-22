import type { MetaFunction } from "@remix-run/node";
import Carousel from "~/components/carousel";

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
      <label>ポートフォリオ</label>
      <div>
        <label>自己紹介</label>
      </div>
    </div>
  );
}
