import React from 'react';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

export default class Form extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <form action="/api/v1/resources" method="POST">
        <TextField
          id="tag"
          autoComplete="true"
          label="Tag"
          type="text"
          required={true}
        />
        <TextField
          id="heading"
          autoComplete="true"
          label="Heading"
          type="text"
          required={true}
        />
        <TextField
          id="content"
          autoComplete="true"
          label="Content"
          type="text"
          multiline={true}
          required={true}
        />
        <Input
          type="submit"
          fullWidth={true}
        />
        {/*<Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>*/}
      </form>
    );
  }
}
