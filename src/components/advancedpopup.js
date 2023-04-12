import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import ContentRatingCheckBoxes from "./contentratingcheckboxes";
import AdvancedTextField from "./advancedtextfields";
import RatingScores from "./ratingscores";
import axios from "axios";
import ResultsDisplay from "./resultsdisplay";

const client = axios.create({
    baseURL: "https://localhost:7035/api/",
    header: { "X-Custom-Header": "foobar" },
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AdvancedPopup() {
    const [movieposts, setMoviePosts] = React.useState([]);
    const [reviewposts, setReviewPosts] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [textValues, setTextValues] = React.useState([null, null]);
    const [contentRating, setContentRating] = React.useState(
        Array.from({ length: 7 }, () => false)
    );
    const [genre, setGenre] = React.useState(
        Array.from({ length: 6 }, () => false)
    );
    const [minValue, setMinValue] = React.useState(0);
    const [maxValue, setMaxValue] = React.useState(5);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReset = () => {
        setTextValues(["", ""]).then(setTextValues([null, null]));
        setContentRating(Array.from({ length: 7 }, () => false));
        setGenre(Array.from({ length: 6 }, () => false));
        setMinValue(0);
        setMaxValue(5);
    };

    const handleTextChange = (event, index) => {
        setTextValues([
            ...textValues.slice(0, index),
            event.target.value,
            ...textValues.slice(index + 1),
        ]);
    };

    const handleContentRatingChange = (index) => (event) => {
        setContentRating((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = event.target.checked;
            return newValues;
        });
    };

    const handleGenreChange = (index) => (event) => {
        setGenre((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = event.target.checked;
            return newValues;
        });
    };

    const handleSubmit = async () => {
        var checkBoxes = new ContentRatingCheckBoxes();
        let allGenres = checkBoxes.getGenreStrings.call();
        var genreList = [];
        var i;
        for (i = 0; i < genre.length; i++) {
            if (genre[i]) {
                genreList.push(allGenres[i]);
            }
        } 

        let formInfo = {
            movieTitle: textValues[0],
            reviewBody: textValues[1],
            reviewTitle: textValues[1],

            // also known as movieIMDbRating
            // multiply by 2 because rating is max is 5 stars in UI
            totalUserRatingMinMax: [minValue * 2, maxValue * 2],
            movieGenres: genreList,
        };
        try {
            await client.post('Movies/advanced-search', formInfo)
                .then((response) => {
                    var data = response.data;
                    setMoviePosts(data.movieDocuments);        // list<movies>
                    setReviewPosts(data.reviewDocuments);      // list<list<reviews>>
                    sessionStorage.setItem('MovieDocuments', JSON.stringify(data.movieDocuments));
                    sessionStorage.setItem('ReviewDocuments', JSON.stringify(data.reviewDocuments));
                });
            handleClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{ textTransform: "Capitalize" }}
            >
                Advanced Search
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Advanced Search
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleSubmit}>
                            Search
                        </Button>
                        <Button autoFocus color="inherit" onClick={handleReset}>
                            Reset
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            m: 2,
                            width: "fit-content",
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <List>
                            <AdvancedTextField
                                textValues={textValues}
                                handleTextChange={handleTextChange}
                            />
                            <ContentRatingCheckBoxes
                                contentRating={contentRating}
                                handleContentRatingChange={handleContentRatingChange}
                                genre={genre}
                                handleGenreChange={handleGenreChange}
                            />

                            <RatingScores
                                minValue={minValue}
                                maxValue={maxValue}
                                setMinValue={setMinValue}
                                setMaxValue={setMaxValue}
                            />
                        </List>
                    </Box>
                </List>
            </Dialog>
            <div className="results">
                <ResultsDisplay
                    movieposts={movieposts}
                    reviewposts={reviewposts}
                />
            </div>
        </div>
    );
}
