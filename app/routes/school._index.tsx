import { Header } from "~/components/header"
import "../css/portfolio.css";
import { PageBlock } from "~/components/pageBlock";
import { schoolData } from "~/pamanent-data/school-data";

export default function School() {
  return (
    <div>
      <Header header={true} />
      {
        schoolData.map((page, index) => (
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