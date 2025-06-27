import { Header } from "~/components/header"
import "../css/portfolio.css";
import { SelfBlock } from "~/components/selfBlock";
import { selfData } from "~/pamanent-data/self-data";

export default function MyPage() {
  return (
    <div>
      <Header header={true} />
      {
        selfData.map((self, index) => {
          return (
            <SelfBlock
              key={index}
              id={self.id}
              name={self.name}
              url={self.url}
              selefImage={self.selfImage}
              selfText={self.selfText}
              description={self.description}
            />
          )
        })
      }
    </div>
  );
}