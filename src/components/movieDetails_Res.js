import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';




export default function ActionAreaCard() {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return (
    <div>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30vh", width:'20em' }}>
        <Box sx={{ display: "flex", height: "25vh"}}>
            <Card sx={{ flex: "0 0 15%", bgcolor: "grey.100" }}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Movie Poster Here
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        
            <div>
            <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Review Preview
                </Typography>
                </AccordionDetails>
            </Accordion>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                
                aria-controls="panel1a-content"
                id="panel2a-header"
                >
                <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Review Preview
                </Typography>
                </AccordionDetails>
            </Accordion>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                
                aria-controls="panel1a-content"
                id="panel3a-header"
                >
                <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Review Preview
                </Typography>
                </AccordionDetails>
            </Accordion>
            </Box>

            </Box>
            </div>
        </Box>
    </Box>
    </div>
    
    
  );
}