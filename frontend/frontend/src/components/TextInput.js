import React from 'react';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      value: null,
      valid: false,
      errorMessage: "Input is invalid",
      errorVisible: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  };

  handleChange(event) {
    this.validation(event.target.value);
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  };

  validation(value, valid) {
    if(typeof valid === 'undefined') {
      valid = true;
    }

    let message = "";
    let errorVisible = false;

    if(!valid) {
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    } else if(this.props.required && (Object.entries(value).length === 0 && value.constructor === Object)) {
      message = this.props.emptyMessage;
      valid = false;
      errorVisible = true;
    }

    this.setState({
      value: value,
      isEmpty: Object.entries(value).length === 0 && value.constructor === Object,
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible
    });
  }

  handleBlur(event) {
    let valid = this.props.validate(event.target.value);
    this.validation(event.target.value, valid);
  }

  render() {
    return(
      <div className={this.props.uniqueName}>
        <input
          placeholder={this.props.text}
          className={'input input-' + this.props.uniqueName}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {/*<InputError
          visible={this.state.errorVisible}
          errorMessage={this.state.errorMessage}
        />*/}
      </div>
    );
  }
}
