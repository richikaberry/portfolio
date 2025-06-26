import "../css/sectionBlock.css";

export interface SectionBlockProps {
  title: string;
  url?: string;
  image?: string;
  text: string;
  number?: number;
}

export const SectionBlock = (blockProps: SectionBlockProps) => {
  return (
    <div>
      {
        blockProps.number !== 2 ?
        <div className="SectionBlock" >
          <a href={blockProps.url} target="_blank" rel="noopener noreferrer" className="SectionBlock__Link">
            <img className="SectionBlock__Image" src={blockProps.image} />
            <div className="SectionBlock__MainContents" >
              <div className="SectionBlock__Title" >{blockProps.title}</div>
              <div className="SectionBlock__DescriptionText" >{blockProps.text}</div>
            </div>
          </a>
        </div>
        :
        <div className="SectionBlock" >
          <a href={blockProps.url} target="_blank" rel="noopener noreferrer" className="SectionBlock__Link">
            <div className="SectionBlock__MainContents" >
              <div className="SectionBlock__Title" >{blockProps.title}</div>
              <div className="SectionBlock__DescriptionText" >{blockProps.text}</div>
            </div>
            <img className="SectionBlock__Image" src={blockProps.image} />
          </a>
        </div>
      }
    </div>
  );
}
