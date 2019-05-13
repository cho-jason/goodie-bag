import React from 'react';
import { connect } from 'react-redux';
import { getCandiesThunk } from '../reducers';

class DisconnectedListALLCandies extends React.Component {
  async componentDidMount() {
    await this.props.getCandies();
  }

  render() {
    const candies = this.props.candies;
    return (
      <div>
        {candies.map(candy => {
          return (
            <div key={candy.id}>
              <h3>{candy.name}</h3>
              <img src={candy.imageUrl} />
              <p>{candy.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candies: state.candies,
});

const mapDispatchToProps = dispatch => ({
  getCandies: () => dispatch(getCandiesThunk()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedListALLCandies);
