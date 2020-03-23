import React from 'react';

const Search = (props) =>  {
        return (
            <div className = "container my-3" >
                <form onSubmit = {props.handleSubmit} >
                    <input 
                    onChange = {props.handleChange}
                    type="text"
                    className = "form-control lead"
                    placeholder = "Lütfen aramak istediğiniz film adını giriniz..."
                    id = "search-area"
                    />
                </form>
            </div>
        )
}

export default Search;
