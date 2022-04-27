import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./Footer.module.css";
const apiKey = "AIzaSyDK5LKMZ-g9kRwrI5DLBHUyKhVw-GdUEVg";
const containerStyle = {
  width: "300px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMapsContainer}>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center}></Marker>
          </GoogleMap>
        </LoadScript>
      </div>
      <div className={styles.footerInfoContainer}>
        <ul>
          <h3>hours</h3>
          <li>Monday 10:00AM-8:00PM</li>
          <li>Tuesday 10:00AM-8:00PM</li>
          <li>Wednesday 10:00AM-8:00PM</li>
          <li>Thursday 10:00AM-8:00PM</li>
          <li>Friday 10:00AM-8:00PM</li>
          <li>Saturday 10:00AM-8:00PM</li>
          <li>Sunday 10:00AM-8:00PM</li>
        </ul>
        <address>
          <p>
            <a
              href="https://www.google.com/maps/place/Downtown+Seattle,+Seattle,+WA/@47.6054117,-122.3530468,14z/data=!3m1!4b1!4m5!3m4!1s0x54906ab6b122572d:0x4cc65f51348e1d43!8m2!3d47.6050237!4d-122.334373"
              target="_blank"
              rel="noreferrer"
            >
              Address: 555 Buehler Dr, Timbuktu AK, 5555
            </a>
          </p>
          <p>
            phone:{" "}
            <a href="tel:5555555555" target="_blank" rel="noreferrer">
              555-555-5555
            </a>
          </p>
          <p>email: restaurant@restaurant.com</p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
