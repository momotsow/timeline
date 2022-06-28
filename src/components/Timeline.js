import React from 'react';
import PropTypes from 'prop-types';
// import data from '../data/data.json';

class Timeline extends React.PureComponent {
  render() {
    const { data } = this.props;

    const content = data.map((item) => (
      <div key={item.id} data-testid="timelineItem" className="">

        <div className="card1">
          {item.id % 2 !== 0
                    && (
                    <div className="column-left ">
                      <div className="col-card-left">
                        <div className="col-card-title col-card-title-left"><img src={item.image} alt="card-img" /></div>
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
        </div>

        <div className="column-center">
          <div>
            {item.id % 2 !== 0
                        && <div className="triangle-left" />}
            {item.id % 2 === 0
                        && <div className="triangle-right" />}
            <div className="line" />
            <div className="circle" />
          </div>
        </div>

        <div className="card2">
          {item.id % 2 === 0
                    && (
                    <div className="column-right">
                      <div className="col-card-right">
                        {item.caption}

                        <div className="col-card-para">
                          <div className="col-card-title col-card-title-right"><img src={item.image} alt="card-img" /></div>
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
        </div>
        <div className="clearfix" />
      </div>
    ));

    return (
      <div className="timeline" data-testid="timeline_id">
        <div className="start-journey">
          <p>You are here</p>
        </div>

        {content}

        <div className="card1">
          <div className="column-left ">
            <div className="col-card-left">
              <div className="col-card-title col-card-title-left">
                <img src="https://res.cloudinary.com/motsow/image/upload/v1656153310/Goal_Retirement_lgpejf.png" className="card-img" alt="ghgg" />
              </div>
              <div className="col-card-para">
                Retire
              </div>
            </div>
          </div>
          <div className="column-right">
            <div className="col-note col-note-right">
              <p />
            </div>
          </div>
        </div>

        <div className="column-center">
          <div>
            <div className="triangle-left" />
            <div className="triangle-right" />
            <div className="line" />
            <div className="circle" />
          </div>
        </div>

        <div className="card2">
          <div className="column-right">
            <div className="col-card-right">
              Make a contribution to my community through philantrophy

              <div className="col-card-para">
                <div className="col-card-title col-card-title-right">
                  <img src="https://res.cloudinary.com/motsow/image/upload/v1656153310/Goal_Vision_uno1zw.png" className="card-img" alt="ghgg" />
                </div>
              </div>
            </div>
          </div>
          <div className="column-left">
            <div className="col-note col-note-left">
              <p>Ultimately</p>
            </div>
          </div>
        </div>
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
