import { Placemark } from "react-yandex-maps";

const CustomMap = ({ onClick, selectedAddress }) => (
    <Map
        onClick={onClick}
        defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
        width="100%"
        height="400px"
    >
        {selectedAddress && <Placemark geometry={selectedAddress} />}
    </Map>
);

export default MapWithPlacemark;