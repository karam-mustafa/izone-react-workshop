export default function Footer() {
  return (
    <footer>
      <div className="social-media-links">
        <h2>Social media links</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Whatsapp</li>
        </ul>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.880316797362!2d36.28288627452296!3d33.504490846456534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e15743919b05%3A0xb3c8969f285fb4ec!2sIZONE%20Training%20Center!5e0!3m2!1sen!2s!4v1715436054478!5m2!1sen!2s"
          width="200"
          height="250"
          style={{
            border: 0,
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="about us">
        <h2>About us</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde
        maxime eos quam? Architecto porro in rerum ad, cupiditate, alias ex
        minima illo eos delectus explicabo reiciendis sapiente optio. Placeat?
      </div>
    </footer>
  );
}
