import "../css/selfBlock.css";

export interface SelfBlockProps {
  id: number;
  name: string;
  url: string,
  selefImage? : string;
  selfText: string;
  description: string,
}

export function SelfBlock(selfProps: SelfBlockProps) {
  return (
    <div className="SelfBlock" >
      <label>{selfProps.name}</label>
      <div className="SelfBlock__Contents" >
        <a href={selfProps.url} className="SelfBlock__links" >
          <img src={selfProps.selefImage} className="SelfBlock__Image" />
          <div className="SelfBlock__ContentText" >
            <label className="" >{selfProps.selfText}</label>
            <div className="SelfBlock__DescriptionSection" >
              <label className="SelfBlock__Description" >{selfProps.description}</label>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}