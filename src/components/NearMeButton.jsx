const NearMeButton = ({ handleLatitudeChange, handleLongitudeChange, handleGeoLocationError }) => {
    const handleNearMeClick = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                handleLatitudeChange(position.coords.latitude);
                handleLongitudeChange(position.coords.longitude);
            },
            error => {
                console.log(error)
                handleGeoLocationError();
            }
        );
    };
    return (
        <button type="button" aria-label="Near Me" onClick={handleNearMeClick}> Near me</button>
    )
}

export default NearMeButton;