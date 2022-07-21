import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div id="planetas">
          { planets.map((planet) => (
            <section className="planeta" key={ planet.name }>
              <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
            </section>
          )) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
