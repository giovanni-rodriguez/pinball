import React, { useState, useEffect } from "react";



function SearchForm() {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    return (
        <div className="form-container">
            <form className="form">
                <label className="latitude-label">
                    Latitude:
                    <input
                        className="latitude-input"
                        type="text"
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </label>
                <br />
                <label className="longitude-label">
                    Longitude:
                    <input
                        className="longitude-input"
                        type="text"
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </label>
            </form>
        </div>
    );
}
export default SearchForm;