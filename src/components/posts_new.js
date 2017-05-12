import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Field
          label="Title"
          name="title"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Tags"
          name="tags"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="tags"
          type="text"
          component={this.renderField}
        />

      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
