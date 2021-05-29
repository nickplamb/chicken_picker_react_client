import React from 'react'

import { Col } from 'react-bootstrap'

import { BreedCard } from '../breed-card/breed-card';

export function AllBreedsView({ breeds }) {

  // console.log(breeds.map(breed => breed.apaClass.name).filter((v, i, s) => s.indexOf(v)===i))
  return(
    breeds.map(breed => 
      (
        <Col sm={10} md={6} lg={4} xl={3} className="mt-2" key={breed._id}>
          <BreedCard breed={breed} />
        </Col>
      )
    )
  )
}