import React from 'react';
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: {
        value: '',
        valid: false
      },
      longitude: {
        value: '',
        valid: false
      }
    };

    this.submitHandler = this.submitHandler.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })

    let value = event.target.id;

    switch (event.target.id) {
      case 'latitude':
      case 'longitude':
        if (/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-10]{1,20}$/.test(value)) {
        } else {
        }
        break;
      default:

    }
  };

  submitHandler(event) {
    event.preventDefault()
    // do some sort of verification here if you need to
    this.props.push(`${this.state.longitude}/${this.state.latitude}`)
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='float'
          name='latitude'
          value={this.state.latitude}
          onChange={this.handleInput} />
        <input
          type='float'
          name='longitude'
          value={this.state.longitude}
          onChange={this.handleInput} />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form