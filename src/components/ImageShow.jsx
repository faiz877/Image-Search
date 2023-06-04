import "../App.css";

function ImageShow({ image }) {
  return (
    <div className="img-item">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
