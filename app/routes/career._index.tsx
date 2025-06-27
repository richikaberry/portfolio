import { Header } from "~/components/header"
import "../css/portfolio.css";
import { PageBlock } from "~/components/pageBlock";
import { careerData } from "~/pamanent-data/career-data";

export default function Career() {
  return (
    <div>
      <Header header={true} />
      {
        careerData.map((page, index) => (
          <PageBlock
            key={index}
            id={page.id}
            title={page.title}
            blockSection={page.blockSection}
            bubbleSpeach={page.bubbleSpeach}
          />
        ))
      }
    </div>
  )
}