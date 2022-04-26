import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const apiKey = "AIzaSyDK5LKMZ-g9kRwrI5DLBHUyKhVw-GdUEVg";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Footer = () => {
  return (
    <footer>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center}></Marker>
        </GoogleMap>
      </LoadScript>
      <div>
        <ul>
          <li>Monday 10:00AM-8:00PM</li>
          <li>Tuesday 10:00AM-8:00PM</li>
          <li>Wednesday 10:00AM-8:00PM</li>
          <li>Thursday 10:00AM-8:00PM</li>
          <li>Friday 10:00AM-8:00PM</li>
          <li>Saturday 10:00AM-8:00PM</li>
          <li>Sunday 10:00AM-8:00PM</li>
        </ul>
        <address>555 Buehler Dr, Timbuktu AK, 5555</address>
        <a href="tel:5555555555">555-555-5555</a>
      </div>
    </footer>
  );
};

export default Footer;
