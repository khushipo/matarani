 import SimpleImageSlider from "react-simple-image-slider";
import "./style.css"
const image = [
  { url: "https://i.pinimg.com/550x/22/97/4e/22974e9374437de7dcac06430285f1ec.jpg" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvEfDmwBQkgScvUyxEbXcP9xFfBxB-CHHwc7h9FA&s" },
  { url: "https://i.ytimg.com/vi/-7h4ch3b2Ck/sddefault.jpg" },
  { url: "https://i.pinimg.com/736x/b6/ba/a7/b6baa75153984b483b9a955c2d584618.jpg" },
  { url: "https://www.whatsappimages.in/wp-content/uploads/2022/09/mata-rani-good-morning-images-download.jpg" },
  { url: "https://i.pinimg.com/originals/a5/e0/b4/a5e0b4edc1691266e8205c8f62ed6536.jpg" },
  { url: "https://i.pinimg.com/originals/a5/e0/b4/a5e0b4edc1691266e8205c8f62ed6536.jpg" },
];

// export default Image;

const Slider = () => {
    return (
    
        <SimpleImageSlider className="imageslider"
       height={500}
       width={1000}
          images={image}
          showBullets={true}
          showNavs={true}
        />
    
    );
  }
  export default Slider

  