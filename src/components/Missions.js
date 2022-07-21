import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div id="container-missions" data-testid="missions">
        <Title headline="Missões" />
        <div id="missions">
          { missions.map(({ name, year, country, destination }) => (
            <section className="mission" key={ name }>
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            </section>
          )) }
        </div>
      </div>
    );
  }
}

export default Missions;
