import React from 'react';
import PropTypes from 'prop-types';
// import data from '../data/data.json';

class Timeline extends React.PureComponent {
  render() {
    const { data } = this.props;

    const content = data.map((item) => (
      <div key={item.id} data-testid="timeline-item">

        {item.id % 2 !== 0
                && (
                <div className="column-left ">
                  <div className="col-card-left">
                    <div className="col-card-title col-card-title-left">
                      <img src={item.image} alt="ghgg" />
                    </div>
                    <div className="col-card-para">
                      {item.caption}
                    </div>
                  </div>
                </div>
                )}
        {item.id % 2 !== 0
                && (
                <div className="column-right">
                  <div className="col-note col-note-right">
                    <p>{item.date}</p>
                  </div>
                </div>
                )}

        <div className="column-center">
          {item.id % 2 !== 0
                    && <div className="triangle-left" />}
          {item.id % 2 === 0
                    && <div className="triangle-right" />}
          <div className="line" />
          <div className="circle" />
        </div>

        {item.id % 2 === 0
                && (
                <div className="column-right">
                  <div className="col-card-right">
                    <div className="col-card-title col-card-title-right"><img src={item.image} alt="ghgg" /></div>
                    <div className="col-card-para">
                      {item.cation}
                    </div>
                  </div>
                </div>
                )}
        {item.id % 2 === 0
                && (
                <div className="column-left">
                  <div className="col-note col-note-left">
                    <p>{item.date}</p>
                  </div>
                </div>
                )}
        <div className="clearfix" />
      </div>
    ));

    return (
      <div className="timeline" data-testid="timeline_id">
        {content}
      </div>
    );
  }
}

// Timeline.defaultProps = {
//   data: data,
// };
Timeline.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default Timeline;
