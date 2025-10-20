import * as React from 'react';


export default function Gallery() {
  return (
    <div className="container-sm" style={{py: '10%', marginBottom: '13%'}} data-aos="fade-up">
      <h2 className="partner-header">Gallery</h2>
      <div class="gallery" data-aos="fade-up">
        <img src={require("./../../../assets/images/section/home/gallery/g1.jpg")} data-aos="fade-up"/>
        <img src={require("./../../../assets/images/section/home/gallery/g2.jpg")} data-aos="fade-up"/>
        <img src={require("./../../../assets/images/section/home/gallery/g3.jpg")} data-aos="fade-up"/>
        <img src={require("./../../../assets/images/section/home/gallery/g4.jpg")} data-aos="fade-up"/>
        <img src={require("./../../../assets/images/section/home/gallery/g5.jpg")} data-aos="fade-up"/>
        <img src={require("./../../../assets/images/section/home/gallery/g6.jpg")} data-aos="fade-up"/>
        <img src={require("./../../../assets/images/section/home/gallery/g7.jpg")} data-aos="fade-up"/>
        <img src={require("./../../../assets/images/section/home/gallery/g8.jpg")} data-aos="fade-up"/>
        <img src={require("./../../../assets/images/section/home/gallery/g9.jpg")} data-aos="fade-up"/>
      </div>
    </div>
  );
}
