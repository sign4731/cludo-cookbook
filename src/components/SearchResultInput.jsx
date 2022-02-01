import CodeBlock from 'react-copy-code';
import Code from '../components/Code';
import CludoInputs from '../components/CludoInputs';
import Prism from 'prismjs';
import "prismjs/themes/prism-okaidia.css";

export default function SearchResultInput() {
    setTimeout(() => Prism.highlightAll(), 0); //highlight the code after it is render in the DOM

    const plainRectangle = 
    `<div class="cludo-search-input__input-form">
    <input name="searchrequest" id="cludo-search-form-input"
        type="search" placeholder="Chercher" 
        title="Tapez le terme de recherche" autocomplete="on"
        aria-autocomplete="list" aria-haspopup="true" />
    <button type="button" title="Chercher">Chercher</button>
</div>`;

    const plainBorderRadius =
        `<div class="cludo-search-input__input-form">
    <input name="searchrequest" class="cludo-radius-input" id="cludo-search-form-input"
        type="search" placeholder="Chercher" 
        title="Tapez le terme de recherche" autoComplete="on"
        aria-autocomplete="list" aria-haspopup="true" />
    <button type="button" title="Chercher">Chercher</button>
</div>`;

    const line =
        `<div class="cludo-search-input__input-form">
    <input name="searchrequest" class="cludo-line-input" id="cludo-search-form-input"
        type="search" placeholder="Chercher" 
        title="Tapez le terme de recherche" autoComplete="on"
        aria-autocomplete="list" aria-haspopup="true" />
    <button type="button" title="Chercher">Chercher</button>
</div>`;

    return (
        <CodeBlock>
            <div className="component-container">
                <h3>Search result input:</h3>
                
                <CludoInputs title="Plain Rectangle"/>
                <Code inputType={plainRectangle}/>

                <CludoInputs title="Plain Border Radius" class="cludo-radius-input"/>
                <Code inputType={plainBorderRadius}/>

                <CludoInputs title="Line" class="cludo-line-input"/>
                <Code inputType={line}/>
            </div>
        </CodeBlock>
    );
}