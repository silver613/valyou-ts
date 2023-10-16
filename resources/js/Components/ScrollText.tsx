import { Typography } from "@mui/material";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

export default function ScrollText() {
  return (
    <ScrollContainer className="scroll-container">
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugit
        nisi sed dolorum ut, dolores earum iure molestias enim repellendus.
        Consequuntur, deserunt? Nisi commodi illum inventore facilis molestiae
        eveniet omnis?
      </Typography>
    </ScrollContainer>
  );
}
