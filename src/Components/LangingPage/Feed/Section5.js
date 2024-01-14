import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Divider,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image1 from "../../Images/Section1.1.png";
import PlaceIcon from "@mui/icons-material/Place";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Section5 = () => {
  const Section5Img = [
    {
      name: "abc",
      images: Image1,
      desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      Heading: "Southern Star Deccan Run 2023",
      price: 889,
      Location: "Campus,Pune",
    },
    {
      name: "qwe",
      images: Image1,
      desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      Heading: "Southern Star Deccan Run 2023",
      price: 889,
      Location: "Campus,Pune",
    },
    {
      name: "asd",
      images: Image1,
      desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      Heading: "Southern Star Deccan Run 2023",
      price: 889,
      Location: "Campus,Pune",
    },
    {
      name: "zxc",
      images: Image1,
      desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.",
      Heading: "Southern Star Deccan Run 2023",
      price: 889,
      Location: "Campus,Pune",
    },
  ];

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        padding: 2,
      }}
    >
      <Box sx={{ margin: 2, marginBottom: 4 }}>
        <Typography variant="h4">Marathon Events</Typography>
        <Typography variant="body1">Lorem Ipsum sit dolor amet.</Typography>
      </Box>
      <Carousel
        autoPlay={false}
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={true}
      >
        {Section5Img.map((photo, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "350px",
              maxHeight: "700px",
              margin: 2,
              marginLeft: 3,
              display: "flex",
              padding: "auto",
              borderRadius: 4,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                src={photo.images}
                alt={photo.name}
                sx={{ width: "330px" }}
              />
              <CardContent>
                <Typography variant="h6">{photo.Heading}</Typography>
              </CardContent>
              <Divider />
              <CardActions
                sx={{
                  justifyContent: "space-between",
                  m: "auto",
                  alignItems: "center",
                }}
              >
                <Button size="small">
                  <Typography variant="h5">
                    <CurrencyRupeeIcon />
                    {photo.price}
                  </Typography>
                </Button>
                <Button size="small">
                  <PlaceIcon fontSize="small" />
                  <Typography variant="body2">{photo.Location}</Typography>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default Section5;
