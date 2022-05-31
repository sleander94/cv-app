import React from 'react';
import Form from './components/Form';
import CV from './components/CV';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: [
        {
          name: '',
          email: '',
          phone: '',
          address: '',
          description: '',
        },
      ],
      work: [],
      education: [],
    };

    this.handleInputChange.bind(this);
    this.addToArray.bind(this);
    this.removeItem.bind(this);
  }

  handleInputChange = (type) => (e) => {
    let category = [...this.state[type]];
    let key = { ...category[e.target.dataset.index] };
    key[e.target.name] = e.target.value;
    category[e.target.dataset.index] = key;
    this.setState({ [type]: category });
  };

  addToArray = (item, array) => {
    if (item === 'job') {
      item = {
        company: '',
        title: '',
        start: '',
        end: '',
        description: '',
      };
    } else if (item === 'school') {
      item = {
        course: '',
        school: '',
        start: '',
        end: '',
        description: '',
      };
    }
    this.setState({
      [array]: [...this.state[array], item],
    });
  };

  removeItem = (index, array) => {
    this.setState({
      [array]: this.state[array].filter((item) => {
        return item !== this.state[array][index];
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>CV - Generator</h1>
        <Form
          {...this.state}
          handleInputChange={this.handleInputChange}
          addToArray={this.addToArray}
          removeItem={this.removeItem}
        />
        <CV {...this.state} />
      </div>
    );
  }
}

export default App;
