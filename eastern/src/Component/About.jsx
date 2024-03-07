import { Box, Button, Typography } from "@mui/material";
import Accordin from "./Accordin.jsx";
import { useState } from "react";

const About = (props) => {
  
  // const [btn, setBtn] = useState("Enable Dark Mode");
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  // });
  // const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // const handleDarkModeFunction = () => {
  //   if (darkModeEnabled) {
  //     setMyStyle({
  //       backgroundColor: "white",
  //       color: "black",
  //     });
  //     setBtn("Enable Dark Mode");
  //     props.showAlert("converted light mode successfully!", "success");
  //   } else {
  //     setMyStyle({
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //     setBtn("Enable Light Mode");
  //     props.showAlert("converted dark mode successfully!", "success");
  //   }

  //   setDarkModeEnabled(!darkModeEnabled);
  // };

  return (
    <>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        
        sx={{ width: "80%", margin: "auto", marginTop: "20px" }}
      >
        <Typography variant="h2">About Us</Typography>
        <Accordin

          title="TextUtils - Analyze Your Text with Ease"
          content="Welcome to TextUtils, your ultimate text analyzer website that makes analyzing text a breeze. Whether you're a writer, student, or just curious about your writing style, TextUtils is here to provide you with valuable insights into your text."
        />
        <Accordin
   
          title="Key Features"
          content="Word and Character Count: Get precise word and character counts with just a click, helping you keep track of your text's length.

                  Sentence Structure Analysis: Identify sentence length variations and improve the flow of your content for better readability.


                  eedback on grammar and spelling errors to polish your text to perfection."
        />
        <Accordin

          title="Discover the Power of Text Analysis"
          content="TextUtils empowers you to gain a deeper understanding of your written content. Our cutting-edge algorithms analyze your text for various parameters, including word count, character count, sentence structure, reading level, and more. Uncover hidden patterns, identify repetitive phrases, and enhance the overall readability of your work effortlessly."
        />
        <Accordin
     
          title="Free to Use, No Strings Attached"
          content="At TextUtils, we believe in providing top-notch services without any cost to our users. That's right – our powerful text analysis tools are entirely free to use, no hidden fees or subscriptions required. Simply paste your text, hit the analyze button, and let our platform do the rest!"
        />
        <Accordin
    
          title="Browser Compatible and User-Friendly"
          content="TextUtils is designed with you in mind. Our platform is fully browser compatible, ensuring you can access it anytime, anywhere, from any device. Experience a smooth and seamless text analysis process through our intuitive interface, enabling both novices and seasoned writers to navigate with ease."
        />
        <Accordin

          title="Your Text, Perfected"
          content="TextUtils is your partner in elevating the quality of your written content. Whether you're crafting a compelling article, academic paper, or a creative story, our tools are designed to enhance your text and help you become a more effective communicator.

Join thousands of satisfied users and take advantage of TextUtils' comprehensive text analysis services today – start writing with confidence and finesse!

Remember, at TextUtils, we're not just about analyzing text; we're about transforming it into a masterpiece. Your words matter, and we're here to make them shine. Analyze your text now, and unleash your full potential as a writer."
        />
        
        
        {/* <Button
          size="large"
          sx={{
            backgroundColor: "grey",
            color: "white",
            margin: "3px",
            "&:hover": {
              backgroundColor: "#e65100",
            },
          }}
          onClick={handleDarkModeFunction}
        >
          {btn}
        </Button> */}
      </Box>
    </>
  );
};

export default About;
