import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col } from 'react-bootstrap';
import { split } from 'lodash';
import { Link } from 'react-router-dom';

// Styling
import './breed-view.scss';

import { breedImages } from '../breed-images';

import missing_image from 'url:../../../assets/missing_image.jpg';

export default class BreedView extends React.Component {
  
  render() {
    // a single breed is sent from main-view
    const { breed, onBackClick } = this.props;
    
    const purposeArray = split(breed.purpose, ', ');
    const isDualPurpose =  (purposeArray) => {
      return (purposeArray.indexOf('meat') > -1 && purposeArray.indexOf('eggs') > -1 );
    }
    
    const breedsPurpose = isDualPurpose(purposeArray) ? [...purposeArray, "Dual-purpose"] : purposeArray;

    const breedNameConverted = breed.breed.replace(/\s+/g, '').toLowerCase();
    const breedImage = breedImages[breedNameConverted] ? breedImages[breedNameConverted] : missing_image;

    return (
      <Col md={8}>
        <Card>
          <Card.Header>
            <h1>
              {breed.breed}
            </h1>
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={ breedImage } alt="a photo of a chicken"/>
            <Card.Text as="div" className="mt-2">
              <p>
                <span className="label">APA Class: </span>
                <Link to={`/apaclass/${breed.apaClass.name}`}>
                  <span className="value">{breed.apaClass.name}</span>
                </Link>
              </p>
              <p>
                <span className="label">Purpose: </span>
                {breedsPurpose.map((purpose, index, array) => {
                  const correctedPurpose = (purpose === 'show' ? 'exhibition' : purpose)
                  return (
                    <Link to={`/purpose/${correctedPurpose}`} key={correctedPurpose}>
                      <span className="value">
                        {purpose}
                        {index < array.length - 1 && array.length > 1 ? ", ": ""}
                      </span>
                    </Link>
                  )
                })}
              </p>
              <p>
                <span className="label">Egg Color: </span>
                <span className="value">{breed.eggColor}</span>
              </p>
              <p>
                <span className="label">Egg Size: </span>
                <span className="value">{breed.eggSize}</span>
              </p>
              {
                breed.origin &&
                <p>
                  <span className="label">Origin: </span>
                  <span className="value">{breed.origin}</span>
                </p>
              }
              {
                breed.description &&
                <p>
                  <span className="label">Description: </span>
                  <span className="value">{breed.description}</span>
                </p>
              }
              </Card.Text>
            <Button onClick={onBackClick} >Back</Button>
          </Card.Body>
        </Card>
      </Col>
      // <div className="breed-view">
      //   <div className="breed-image">
      //     <img src={Frankie} alt="a photo of a chicken"/>
      //   </div>
      //   <div className="breed-name">
      //     <span className="label">Breed: </span>
      //     <span className="value">{breed.breed}</span>
      //   </div>
      //   <div className="breed-class">
          
      //   </div>
      //   <button onClick={() => onBackClick(null)} >Back</button>
      // </div>
    );
  }
}

BreedView.propTypes = {
  breed: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    purpose: PropTypes.string.isRequired,
    eggColor: PropTypes.string.isRequired,
    eggSize: PropTypes.string,
    origin: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};