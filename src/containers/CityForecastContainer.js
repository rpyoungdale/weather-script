import React from "react";
import DayWeatherTile from "../components/DayWeatherTile";
import { Card } from "semantic-ui-react";

class CityForecastContainer extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <Card.Group itemsPerRow={5}>
        {this.props.weatherData.map(day => {
          return <DayWeatherTile key={day.id} day={day} />;
        })}
      </Card.Group>
    );
  }
}

export default CityForecastContainer;
