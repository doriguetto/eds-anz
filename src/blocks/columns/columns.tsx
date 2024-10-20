import {createRoot} from "react-dom/client";
import './columns.scss';

const Columns = (props: ColumnsData) => {
    return (
        <div className="columns2">
            <div
                className="container  container--three box--white padding-top--50px padding-bottom--30px container--four-columns">
                <div className="grid ">
                    <div className="    clearfix">
                        <div className="container__items container__main">
                            <div className="aem__component clearfix">
                                {props.columns && Array.from(props.columns).map((column: Element, index: number) => {
                                    return (
                                        <div className="container__item container__main__element     none"
                                             key={index}>
                                            <div dangerouslySetInnerHTML={{__html: column.outerHTML}}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

type ColumnsData = {
    columns: NodeListOf<Element> | undefined
}

export default function decorate(block: HTMLDivElement) {
    const columns = block.firstElementChild?.querySelectorAll('div');
    const columnsData: ColumnsData = {
        columns
    }
    createRoot(block).render(<Columns {...columnsData}/>)
}