import { Box, Stack } from "@mui/material";
import { categories } from "../utils/constant";

const SideBar = ({ selected, setSelected }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((d) => (
        <button
          className="category-btn"
          key={d.name}
          style={{
            backgroundColor: d.name === selected && "#FC1503",
            color: "white",
          }}
          onClick={() => setSelected(d.name)}
        >
          <span
            style={{
              color: d.name === selected ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {d.icon}
          </span>
          <span
            style={{
              opacity: d.name === selected ? "1" : "0.8",
            }}
          >
            {d.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};
export default SideBar;
