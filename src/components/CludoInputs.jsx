import React from 'react';
class CludoInputs extends React.Component {
    render() {
        return (
            <div className="cludo-search-input__input-form">
                <input name="searchrequest" id="cludo-search-form-input"
                    type="search" placeholder="Chercher"
                    title="Tapez le terme de recherche" autoComplete="on"
                    aria-autocomplete="list" aria-haspopup="true" class={this.props.class}/>
                <button type="button" title="Chercher">Chercher</button>
            </div>
        );
    }
}

export default CludoInputs; 