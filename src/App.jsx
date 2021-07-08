import React from 'react';
import './App.css';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup'
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
var userAnswer = undefined 

function App() {
  const [value, setValue] = React.useState('a');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  function selectAnswer(value) {
    if (userAnswer !== value) {
      userAnswer = value
      console.log(userAnswer)
    }
  }
  return (
    <React.Fragment>
      <nav>
        <h1>
          Ninja Spect Classes
        </h1>
      </nav>
      <section>
        <div class="content">
          <h2>About</h2>
          <p>
            Ninja Spect's quizzes and lessons will be displayed on this website to provide the best experience possible. Ninja Spect Classes has a broad spectrum of activities and courses to complete.
          </p>
          <h2>Lessons</h2>
          <p>
            We aim to provide the best learning content possible with step-by-step explanations and engaging videos to inspire students to achieve excellence in all aspects of the curriculum.
          </p>
          <h2>Activities</h2>
          <p>
            At Ninja Spect we believe determination and perseverance can be attained through fun activities and gamified learning. Our specially designed graphical games are delineated to capture students' attention and chalenge them with motivational tasks.
          </p>
          <Button color="primary" variant="contained" disableElevation>
            Primary
          </Button>
          <Button color="text" variant="text" disableElevation>
            Text
          </Button>
        </div>
        <div class="image">
          <img src="src/Favicon.svg" alt="" class="img"></img>
        </div>
      </section>
      
      <div id="quiz">
        <FormControl component="fieldset">
          <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange} onClick={(e) => selectAnswer(e.target.value)}>
            <FormControlLabel value="a" control={<Radio />} label="Option 1" />
            <FormControlLabel value="b" control={<Radio />} label="Option 2" />
            <FormControlLabel value="c" control={<Radio />} label="Option 3" />
            <FormControlLabel value="d" control={<Radio />} label="Option 4" />
          </RadioGroup>
        </FormControl>
        <Button className="adjust-child"color="primary" variant="contained" disableElevation>
          Submit
        </Button>
      </div>
      <section class="column">
        Radio Button Input
        <Button className="adjust-child" onClick={handleClick({ vertical: 'top', horizontal: 'center' })}> Data</Button>
        <Snackbar
          id="data-display"
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="No Data"
          key={vertical + horizontal}
        />
      </section>
    </React.Fragment>
  );
}

export default App;