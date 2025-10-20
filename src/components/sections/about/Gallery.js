import * as React from 'react';

export default function Gallery() {
  return (
    <div className="container-sm" style={{py: '10%', marginBottom: '3%', marginTop: '15%'}} data-aos="fade-up">
      <h2 className="partner-header">Gallery</h2>
      <div class="gallery" data-aos="fade-up">
        <img src={require("./../../../assets/images/section/about/gallery/g1.jpg")} data-aos="fade-up" />
        <img src={require("./../../../assets/images/section/about/gallery/g2.jpg")} data-aos="fade-up" />
        <img src={require("./../../../assets/images/section/about/gallery/g3.jpg")} data-aos="fade-up" />
        <img src={require("./../../../assets/images/section/about/gallery/g4.jpg")} data-aos="fade-up" />
        <img src={require("./../../../assets/images/section/about/gallery/g5.jpg")} data-aos="fade-up" />
        <img src={require("./../../../assets/images/section/about/gallery/g6.jpg")} data-aos="fade-up" />
        <img src={require("./../../../assets/images/section/about/gallery/g7.jpg")} data-aos="fade-up" />
        <img src={require("./../../../assets/images/section/about/gallery/g8.jpg")} data-aos="fade-up" />
        <img src={require("./../../../assets/images/section/about/gallery/g9.jpg")} data-aos="fade-up" />
      </div>
    </div>
  );
}
