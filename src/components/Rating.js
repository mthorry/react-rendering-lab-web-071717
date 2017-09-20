import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  // debugger
  // this.props = {rating: 0}
  // console.error(props, this.state, this)
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps, "nextProps") --- nextProps are current rating +/- 1
    // console.log(this.props, "this.props") --- this.props are current rating
    // console.error(nextProps.rating > this.props.rating, "nextProps.rating > this.props")
    this.setState({
      increasing: nextProps.rating > this.props.rating,
      decreasing: nextProps.rating < this.props.rating
    })
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;