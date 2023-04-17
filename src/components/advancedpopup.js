import React, { useState, useContext } from "react";
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
import Checkboxes from "./checkboxes";
import AdvancedTextField from "./advancedtextfields";
import RatingScores from "./ratingscores";
import axios from "axios";

const client = axios.create({
    baseURL: "https://localhost:7035/api/",
    header: { "X-Custom-Header": "foobar" },
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class AdvancedPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            textValues: [null, null, null],
            contentRating: Array.from({ length: 7 }, () => false),
            genre: Array.from({ length: 6 }, () => false),
            movieMinValue: null,
            movieMaxValue: null,
            reviewMinValue: null,
            reviewMaxValue: null,
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleContentRatingChange = this.handleContentRatingChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setMovieMinValue = this.setMovieMinValue.bind(this);
        this.setMovieMaxValue = this.setMovieMaxValue.bind(this);
        this.setReviewMinValue = this.setReviewMinValue.bind(this);
        this.setReviewMaxValue = this.setReviewMaxValue.bind(this);
    }

    handleClickOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    handleReset() {
        this.setState({
            textValues: ['','', ''],
            contentRating: Array.from({ length: 7 }, () => false),
            genre: Array.from({ length: 6 }, () => false),
            movieMinValue: null,
            movieMaxValue: null,
            reviewMinValue: null,
            reviewMaxValue: null,
        });
    }

    handleTextChange(event, index) {
        this.setState({
            textValues: [
                ...this.state.textValues.slice(0, index),
                event.target.value,
                ...this.state.textValues.slice(index + 1),
                ...this.state.textValues.slice(index + 2),
            ],
        });
    }

    handleContentRatingChange(index) {
        return (event) => {
            this.setState((prevState) => {
                const newValues = [...prevState.contentRating];
                newValues[index] = event.target.checked;
                return { contentRating: newValues };
            });
        };
    }

    handleGenreChange(index) {
        return (event) => {
            this.setState((prevState) => {
                const newValues = [...prevState.genre];
                newValues[index] = event.target.checked;
                return { genre: newValues };
            });
        };
    }

    setMovieMinValue(value) {
        if (this.state.movieMaxValue === null) {
            this.setMovieMaxValue(5);
        }
        this.setState({
            movieMinValue: value,
        });
    }

    setMovieMaxValue(value) {
        this.setState({
            movieMaxValue: value,
        });
    }

    setReviewMinValue(value) {
        if (this.state.reviewMaxValue === null) {
            this.setReviewMaxValue(5);
        }
        this.setState({
            reviewMinValue: value,
        });
    }

    setReviewMaxValue(value) {
        this.setState({
            reviewMaxValue: value,
        });
    }

    handleMoviePostInputChange(event) {
        this.props.onMoviePostChange(event.target.value);
    }

    handleReviewPostInputChange(event) {
        this.props.onReviewPostChange(event.target.value);
    }

    async handleSubmit() {
        var checkBoxes = new Checkboxes();
        let allGenres = checkBoxes.getGenreStrings.call();
        var genreList = [];
        var i;
        for (i = 0; i < this.state.genre.length; i++) {
            if (this.state.genre[i]) {
                genreList.push(allGenres[i]);
            }
        }

        var textFields = this.state.textValues;
        for (i = 0; i < textFields.length; i++) {
            var str = textFields[i];
            if (str !== null) {
                if (str.length < 1) {
                    textFields[i] = null;
                }
            }
        }

        
        let formInfo = {
            movieTitle: textFields[0],
            reviewBody: textFields[1],
            reviewTitle: textFields[1],
            mainStars: [textFields[2]],

            // also known as movieIMDbRating
            // multiply by 2 because rating is max is 5 stars in UI
            
            totalUserRatingMinMax: null,
            movieGenres: null,
        };

        if (this.state.movieMinValue !== null && this.state.movieMaxValue !== null) {
            formInfo.totalUserRatingMinMax = [this.state.movieMinValue * 2, this.state.movieMaxValue * 2];
        }

        if (genreList.length > 0) {
            formInfo.movieGenres = genreList;
        }


        try {
            await client.post('Movies/advanced-search', formInfo)
                .then((response) => {
                    var data = response.data;
                    this.handleMoviePostInputChange({ target: { value: data.movieDocuments } });
                    this.handleReviewPostInputChange({ target: { value: data.reviewDocuments } });
                });
            this.handleClose();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <Button
                    variant="outlined"
                    onClick={this.handleClickOpen}
                    sx={{ textTransform: "Capitalize" }}
                >
                    Advanced Search
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: "relative" }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={this.handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Advanced Search
                            </Typography>
                            <Button autoFocus color="inherit" onClick={() => {
                                this.handleSubmit();
                                this.props.onSearchButtonClick();
                            }}
                            >
                                Search
                            </Button>
                            <Button autoFocus color="inherit" onClick={this.handleReset}>
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
                                    textValues={this.state.textValues}
                                    handleTextChange={this.handleTextChange}
                                />
                                <Checkboxes
                                    contentRating={this.state.contentRating}
                                    handleContentRatingChange={this.handleContentRatingChange}
                                    genre={this.state.genre}
                                    handleGenreChange={this.handleGenreChange}
                                />
                                <RatingScores
                                    minValue={this.state.movieMinValue}
                                    maxValue={this.state.movieMaxValue}
                                    setMinValue={this.setMovieMinValue}
                                    setMaxValue={this.setMovieMaxValue}
                                    name={"Movie Rating Score"}
                                />
                                <RatingScores
                                    minValue={this.state.reviewMinValue}
                                    maxValue={this.state.reviewMaxValue}
                                    setMinValue={this.setReviewMinValue}
                                    setMaxValue={this.setReviewMaxValue}
                                    name={"Review Rating Score"}
                                />
                            </List>
                        </Box>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default AdvancedPopup