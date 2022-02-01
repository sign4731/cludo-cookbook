import Prism from 'prismjs';
import "prismjs/themes/prism-okaidia.css";
import CodeBlock from 'react-copy-code';
import Code from '../components/Code';
import CludoInputs from '../components/CludoInputs';

export default function SearchResultInput() {
    const plainRectangle = 
    `<div class="cludo-search-input__input-form">
    <input name="searchrequest" id="cludo-search-form-input"
        type="search" placeholder="Chercher" 
        title="Tapez le terme de recherche" autocomplete="on"
        aria-autocomplete="list" aria-haspopup="true" />
    <button type="button" title="Chercher">Chercher</button>
</div>`;

    const plainBorderRadius =
        `<div className="cludo-search-input__input-form">
    <input name="searchrequest" className="cludo-radius-input" id="cludo-search-form-input"
        type="search" placeholder="Chercher" 
        title="Tapez le terme de recherche" autoComplete="on"
        aria-autocomplete="list" aria-haspopup="true" />
    <button type="button" title="Chercher">Chercher</button>
</div>`;

    const line =
        `<div className="cludo-search-input__input-form">
    <input name="searchrequest" className="cludo-line-input" id="cludo-search-form-input"
        type="search" placeholder="Chercher" 
        title="Tapez le terme de recherche" autoComplete="on"
        aria-autocomplete="list" aria-haspopup="true" />
    <button type="button" title="Chercher">Chercher</button>
</div>`;

    return (
        <CodeBlock>
            <div className="component-container">
                <h3>Search result input:</h3>
                
                <h4>Plain Rectangle:</h4>
                <CludoInputs />
                <Code inputType={plainRectangle}/>

                <h4>Plain Border radius:</h4>
                <CludoInputs class="cludo-radius-input"/>
                <Code inputType={plainBorderRadius}/>

                <h4>Line</h4>
                <CludoInputs class="cludo-line-input"/>
                <Code inputType={line} />
            </div>
        </CodeBlock>
    );
}
