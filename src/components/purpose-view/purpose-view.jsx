import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col } from 'react-bootstrap';
import { upperFirst, toLower, split } from 'lodash';

// Styling
// import './class-view.scss';

import { AllBreedsView } from '../all-breeds-view/all-breeds-view';
import { ColoredLine } from '../helperComponents/colored-line';
const Frankie =  require('url:../../../assets/frankie2.jpeg');

export function PurposeView({ breeds, purpose, onBackClick }) {

  const purposeDescriptions = {
    "Eggs": "These breeds are used primarily for egg production. The egg layer is leaner and rangier in body type. It will lay more eggs, as a general rule.",
    "Meat": "These breeds are used primarily for meat production. Meat birds have a blockier body that fills out with muscle for meat. It will lay fewer eggs, as a general rule.",
    "Ornamental": "These breeds are primarily ornamental and do produce many eggs or much meat.",
    // "Show": "These breeds are often shown in poultry competitions.",
    "Exhibition": "These breeds are often shown in poultry competitions.",
    "Feathers": "These breeds are prized for their particularly beautiful feathers.",
    "Broody hens": "These breeds produce particularly good hens for brooding and raising chicks.",
    "Dual-purpose": "The dual purpose chicken is intended to grow a good body, adequate for putting meat on the table, and lay a nice quantity of eggs. The dual purpose chicken will not provide as large a carcass as a meat bird, nor lay as many eggs as an egg layer."
  };

  // returns true if purpose 
  // const isDualPurpose =  (purposeArray) => {
  //   return (purposeArray.indexOf('meat') > -1 && purposeArray.indexOf('eggs') > -1 );
  // }

  // const purposeArray = split(breed.purpose, ', ');
  // // convert purpose to Dual-purpose
  // const breedsPurpose = isDualPurpose(purposeArray) ? "Dual-purpose" : breed.purpose;

  const displayPurpose = upperFirst(purpose)

  const breedsOfSamePurpose = breeds.filter(breed => {
    const purposeArray = split(breed.purpose, ', ');
    if (purpose === "Dual-purpose") {
      return (purposeArray.indexOf('meat') > -1 && purposeArray.indexOf('eggs') > -1 )
    }
    return purposeArray.indexOf(purpose) > -1;
  });


  return (
    <>
      <Col md={10}>
        <Card>
          <Card.Header>
            <h1>
              {displayPurpose}
            </h1>
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={Frankie} alt="a photo of a chicken"/>
            <Card.Text as="div">
              <p>
                <span className="value">{purposeDescriptions[displayPurpose]}</span>
              </p>
            </Card.Text>
            <Button onClick={onBackClick}>Back</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12}>
        <ColoredLine color="grey"/>
      </Col>
      <Col xs={12} mt={2}>
        <h3>
          Other {displayPurpose} breeds:
        </h3>
      </Col>

      <AllBreedsView breeds={breedsOfSamePurpose}/>
    </>
  );
}

PurposeView.propTypes = {
  breeds: PropTypes.array.isRequired,
  purpose: PropTypes.string.isRequired,
  onBackClick: PropTypes.func.isRequired
};