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
    const styles = theme => ({
        listItemText:{
          fontSize:'1.4rem',
        },
        listItemText2:{
            fontSize:'1.2rem',
        }
    });

    return (
        <QuestionContainer>
            <ListItemButton onClick={handleClick} sx={{ height: 70, borderBottom: '1px solid #77777757'}}>
                <ListItemText 
                    classes={{primary: styles.listItemText}}
                    primary={question}
                />
                {open ? <ExpandLess sx={ { fontSize: 32 }}/> : <ExpandMore sx={ { fontSize: 32 }}/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={answer} classes={{primary: styles.listItemText2}}/>
                    </ListItemButton>
                </List>
            </Collapse>
        </QuestionContainer>
    )
}

const QuestionContainer = styled.div`
    margin-bottom: 20px;

    li { 
        font-size: 1.5rem; 
        li { 
            font-size: 1.3rem; 
        }
    }

`

export default Question;
