import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import MobileStepper from '@material-ui/core/MobileStepper';


const survivor = [
  {
    prompt: "Are you injured?",
    responses: ["Yes", "Unsure", "No"],
    selected: false
  },
  {
    prompt: "Do you want to stay at a shelter?",
    responses: ["Yes", "No"],
    selected: false
  },
  {
    prompt: "Do you want to take legal action?",
    responses: ["Yes", "Maybe Later", "No"],
    selected: false
  },
  {
    prompt: "Do you want to open a university investigation?",
    responses: ["Yes", "Maybe", "No"],
    selected: false
  }
]

const supporter = [
  {
    prompt: "What is your profession?",
    responses: ["Lawyer", "Other"]
  }
]

export default class QuickNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      step: 0,
      choices: props.stakeholder === "survivor" ? survivor : supporter,
      selections: []
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleClickOpen() {
    this.setState(state => ({open: true}));
  };

  handleClose() {
    this.setState(state => (
      {open: false, step: 0, selections: []}));
  };

  handleChoice() {
    if (this.state.step < this.state.choices.length - 1) {
      this.setState(state => ({step: (state.step + 1)}));
    } else {
      console.log(this.state.selections);
    }
  };

  handleBack() {
    this.setState(state => ({step: state.step - 1}));
  };

  render() {
    return (
      <div>
        <Button variant={this.props.btnVariant} color="primary" onClick={this.handleClickOpen}>
          {this.props.stakeholder === "survivor" ? "What are my options?" : "How can I help?"}
        </Button>
        <Dialog
          fullScreen={false}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <DialogContentText>
              {this.state.choices[this.state.step].prompt}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {this.state.choices[this.state.step].responses.map(option => (
              <Button autoFocus
                onClick={
                this.state.step < this.state.choices.length - 1
                ? this.handleChoice
                : this.handleClose
                }
                color="primary"
                key={(this.state.step).toString()+": "+option}
              >
                {option}
              </Button>
            ))}
          </DialogActions>
          <MobileStepper
            variant="dots"
            steps={this.state.choices.length}
            position="static"
            activeStep={this.state.step}
            backButton={
              <Button size="small" onClick={this.handleBack} disabled={this.state.step === 0}>
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </Dialog>
      </div>
    );
  }
}
