import { SectionBlock, SectionBlockProps } from "./sectionBlock";

export interface PageBlockProps {
  id: number;
  title: string;
  blockSection: SectionBlockProps[];
  bubbleSpeach: string;
}

export const PageBlock = (pageProps: PageBlockProps) => {
  return (
    <div className="PortfolioMainContents" >
      <div className="PortfolioMainContents__Title">
        {pageProps.title}
      </div>
      {
        pageProps.blockSection.map((section, index) => (
          <SectionBlock
            key={`${pageProps.id}-${index}`}
            title={section.title}
            url={section.url}
            image={section.image}
            text={section.text}
            number={section.number}
          />
        ))
      }
      <div className="PortfolioMainContents__BubbleSpeachText">
        {pageProps.bubbleSpeach}
      </div>
    </div>
  )
}