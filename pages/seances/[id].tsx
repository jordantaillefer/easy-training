import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR, { Fetcher } from 'swr';
import { useState } from 'react';

import { ContainerCenter } from '../../styles/container';
import {
  Exercice,
  ExerciceSeance,
  SeanceWithIncludes,
} from '../../src/api/dependency-injection';
import { Button } from '../../styles/button';
import { StyledLink } from '../../styles/link';
import Link from 'next/link';

const fetcher: Fetcher<SeanceWithIncludes, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const Seance: NextPage = () => {
  const router = useRouter();
  const { programmeId, id } = router.query;

  const [estSeanceDemarre, setSeanceDemarre] = useState(false);
  const [compteurSeance, setCompteurSeance] = useState(0);
  const [exerciceEnCours, setExerciceEnCours] = useState<
    (ExerciceSeance & { exercice: Exercice }) | null
  >(null);

  const demarrerSeance = () => {
    console.log('test');
    setSeanceDemarre(true);
  };

  const { data: seance, error } = useSWR(`/api/seances/${id}`, fetcher);
  if (error) return <div>An error occured.</div>;
  if (!seance) return <div>Loading ...</div>;

  const incrementExercice = () => {
    setExerciceEnCours(seance.exercicesSeance[compteurSeance]);
    setCompteurSeance(compteurSeance + 1);
  };

  return (
    <ContainerCenter>
      {estSeanceDemarre ? (
        exerciceEnCours ? (
          <div>
            {exerciceEnCours?.exercice.nomExercice}
            &nbsp;temps de récup : {exerciceEnCours?.tempsRecup} secondes
            &nbsp;nombre de série : {exerciceEnCours?.nbSerie} séries
            &nbsp;nombre de répétition : {exerciceEnCours?.nbRepetition}{' '}
            répétitions
            <Button onClick={incrementExercice}>Fin de l&apos;exercice</Button>
          </div>
        ) : compteurSeance < seance.exercicesSeance.length ? (
          <Button onClick={incrementExercice}>
            Commencer le premier exercice
          </Button>
        ) : (
          <Link href={`/programmes/${programmeId}`} passHref>
            <StyledLink primary>Retour au programme</StyledLink>
          </Link>
        )
      ) : (
        <div>
          <div key={seance.id}>
            Séance n°{seance.numSeance}
            {estSeanceDemarre}
            <Button onClick={demarrerSeance}>Commencer à cette séance</Button>
          </div>
          <ul>
            {seance.exercicesSeance.map((exerciceSeance) => (
              <li key={exerciceSeance.id}>
                {exerciceSeance.exercice.nomExercice}
                &nbsp;temps de récup : {exerciceSeance.tempsRecup} secondes
                &nbsp;nombre de série : {exerciceSeance.nbSerie} séries
                &nbsp;nombre de répétition : {exerciceSeance.nbRepetition}{' '}
                répétitions
              </li>
            ))}
          </ul>
        </div>
      )}
    </ContainerCenter>
  );
};

export default Seance;
