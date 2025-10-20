import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import "swiper/modules/navigation/navigation.min.css";

// import required modules
import { Autoplay, Pagination} from "swiper";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NewsData from "./NewsData";

export default function NewsUpdate() {
    return (
      <div className='container-sm' style={{marginTop: '7%', marginBottom: '7%'}} data-aos="fade-up">
        <h3 style={{textAlign: 'center'}}>News & Updates</h3>
        <p className="sub-title">Get the latest update of TechnoXian and most happening things in robotics and latest technologies</p>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 30
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30
            },
          }}
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper swiper-container"
      >
        <Grid container spacing={5} sx={{mb:'10%', mt: '5%'}} data-aos="fade-up">
        {NewsData.map((items) => (
        <SwiperSlide>
          <div>
          <Grid item xs={12} sm={4} md={4}>
          <Card sx={{ maxWidth: 345}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={items.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {items.title}
                </Typography>
                <Grid container spacing={1} sx={{mb: '0.5%'}}>
                  <Grid item xs={1} sm={1} md={1}>
                      <EventNoteIcon fontSize="small" sx={{color: '#00A859'}} />
                  </Grid>
                  <Grid item xs={11} sm={11} md={11}>
                      <Typography variant="caption" sx={{fontSize: '18px', lineHeight: '21px'}}>{items.date}</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} sx={{mb: '2.5%'}}>
                  <Grid item xs={1} sm={1} md={1}>
                      <LocationOnIcon fontSize="small" sx={{color: '#00A859'}} />
                  </Grid>
                  <Grid item xs={11} sm={11} md={11}>
                      <Typography variant="caption" sx={{fontSize: '18px', lineHeight: '21px'}}>{items.location}</Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary">
                  {items.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          </div>
        </SwiperSlide>
        ))}
        </Grid>
      </Swiper>
      </div>
    )
}
