import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searcText, setSearchText] = useState("");
  const navigate = useNavigate();

  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        searcText ? navigate(`/search/${searcText}`) : navigate("/");
      }}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
      onChange={(e) => setSearchText(e.target.value)}
    >
      <input
        placeholder="Search ...."
        value={searcText}
        className="search-bar"
      />{" "}
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
