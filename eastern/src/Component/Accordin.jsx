import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Accordin = (props) => {
  return (
    <>
      <Accordion
        sx={{ margin: "2px", border: "1px solid white" }}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <AccordionSummary
          sx={{ backgroundColor: "black", color: "white" }}
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: "white", backgroundColor: "#e65100" }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.content}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
//it set the datatype of the props which we are pass to it
Accordin.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};
Accordin.defaultProps = {
  title: "Accodin",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo numquam similique dignissimos nisi, quis asperiores, nam inventore magnam, reiciendis corrupti? Modi temporibus et tenetur ipsa repellat, itaque consequatur, vel saepe hic amet ex eius. Voluptas voluptatum reprehenderit quod autem quidem quisquam quaerat fugiat consectetur voluptatibus harum, consequuntur rem ad iure repellat perferendis nulla, beatae neque hic commodi mollitia tenetur deserunt unde cumque minima! Tempore rem, dolores blanditiis magni inventore ipsum magnam repellat voluptas deleniti aperiam suscipit iusto laboriosam explicabo sequi qui. Mollitia ea ad animi aliquid ducimus! Quidem sit odio quam placeat! Consequatur sapiente pariatur neque iste minima nihil.",
};
export default Accordin;
