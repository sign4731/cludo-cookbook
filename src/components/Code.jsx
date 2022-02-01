import React from 'react';
class Code extends React.Component {
    render() {
        return (
            <div className="prism-editor-wrapper" id="cludo-code-search-input">
                <pre contentEditable="true" spellCheck="false" autoCapitalize="off" autoComplete="off" autoCorrect="off" data-gramm="false" className="prism-editor__code  language-markup">
                    <code className="language-markup">
                        {this.props.inputType}
                    </code>
                </pre>
            </div>
        );
    }
}

export default Code; 