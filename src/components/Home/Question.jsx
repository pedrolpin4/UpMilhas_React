import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Collapse } from "@mui/material";
import List from '@mui/material/List';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from 'react';
import styled from 'styled-components';


const Question = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <QuestionContainer>
            <ListItemButton onClick={handleClick} sx={{ height: 70, borderBottom: '1px solid #77777757'}}>
                <ListItemText style={{
                    fontSize: 32
                }} primary={question}/>
                {open ? <ExpandLess sx={ { fontSize: 32 }}/> : <ExpandMore sx={ { fontSize: 32 }}/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={answer} />
                    </ListItemButton>
                </List>
            </Collapse>
        </QuestionContainer>
    )
}

const QuestionContainer = styled.div`
    margin-bottom: 20px;
`

export default Question;
