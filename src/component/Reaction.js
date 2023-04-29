import * as React from 'react'
import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import './CSS/Reaction.css'

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
    fontSize: '4rem', // Increase the font size of the filled icon
  },
  '& .MuiRating-iconFilled': {
    fontSize: '4rem', // Increase the font size of the filled icon
  },
}))

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon fontSize="4rem" color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon fontSize="4rem" color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon fontSize="4rem" color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon fontSize="4rem" color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon fontSize="4rem" color="success" />,
    label: 'Very Satisfied',
  },
}
function IconContainer(props) {
  const { value, ...other } = props
  return <span {...other}>{customIcons[value].icon}</span>
}

function Reaction({ setEmotion, emotion }) {
  return (
    <div className="m-0 p-4 d-flex justify-content-center ">
      <StyledRating
        className="reaction m-0 p-0"
        name="highlight-selected-only"
        defaultValue={1} // set to minimum value
        onChange={(event, value) => {
          setEmotion(value)
        }}
        IconContainerComponent={IconContainer}
        getLabelText={(value) => customIcons[value].label}
        highlightSelectedOnly
      />
    </div>
  )
}

export default Reaction
