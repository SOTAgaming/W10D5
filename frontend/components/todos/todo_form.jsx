import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: "",
      title: "",
      id: this.uniqueId()
    }
    // this.handleBody = this.handleBody.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.handleTitle = this.handleTitle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.uniqueId = this.uniqueId.bind(this)
  }

  // handleBody(e) {
  //   this.setState({ body: e.target.value })
  // }
  // handleTitle(e) {
  //   this.setState({ title: e.target.value })
  // }

  handleChange(e) {
    let target;

    if (e.target.id === "body-input") {
      target = "body"
    } else if (e.target.id === "title-input") {
      target = "title"
    }
    this.setState({ [target]: e.target.value})
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    console.log(this.state)
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState ({
      body: "",
      title: "",
      id: this.uniqueId()
    })
  }

  uniqueId() {
    return new Date().getTime();
  }

  render() {

    console.log(this.props.receiveTodo)

    return (
    <form onSubmit={this.handleSubmit}>
      <label>Title</label>
      <br/>
        <input onChange={this.update('title')} id="title-input" type="text" value={this.state.title}/>
      <br/>
        <label>Body</label>
        <br />
        <input onChange={this.update('body')} id="body-input" type="text" value={this.state.body} />
      <input type="submit" value="New Todo"/>
    </form>
    )}
}

export default TodoForm 