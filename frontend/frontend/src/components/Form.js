import React from 'react';
import TextInput from './TextInput';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "",
      heading: "",
      content: "",
      errorMessage: "Input is invalid",
      errorVisible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateTag = this.validateTag.bind(this);
    this.validateHeading = this.validateHeading.bind(this);
    this.validateContent = this.validateContent.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    let tag = this.state.tag;
    let heading = this.state.heading;
    let content = this.state.content;

    async function postData(url = '', data = {}) {
    // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    }

    postData(this.props.url, {identifier: tag, heading: heading, content: content})
      .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    this.setState({
      tag: "",
      heading: "",
      content: "",
      errorMessage: "Input is invalid",
      errorVisible: false
    })
  };

  validateTag(value) {
    return true;
  };

  validateHeading(value) {
    return true;
  };

  validateContent(value) {
    return true;
  };

  setValue(field, event) {
    let object = {};
    object[field] = event.target.value;
    this.setState(object);
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TextInput
          value={this.state.tag}
          uniqueName="tag"
          text="Identifier"
          required={true}
          validate={this.validateTag}
          onChange={this.setValue.bind(this, 'tag')}
          errorMessage="Identifier is invalid"
          emptyMessage="Identifier is required"
        />
        <TextInput
          value={this.state.heading}
          uniqueName="heading"
          text="Title"
          required={true}
          validate={this.validateHeading}
          onChange={this.setValue.bind(this, 'heading')}
          errorMessage="Title is invalid"
          emptyMessage="Title is required"
        />
        <TextInput
          value={this.state.content}
          uniqueName="content"
          text="Content"
          required={true}
          validate={this.validateContent}
          onChange={this.setValue.bind(this, 'content')}
          errorMessage="Content is invalid"
          emptyMessage="Content is required"
        />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
