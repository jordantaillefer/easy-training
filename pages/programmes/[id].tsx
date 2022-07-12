import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ContainerCenter } from '../../styles/container';
import useSWR, { Fetcher } from 'swr';
import {
  ProgrammeWithIncludes,
  programmeController,
  recupererProgrammeUseCase,
} from "../../src/api/dependency-injection"
import { DAYS_OF_WEEK } from '../../shared/days-of-week';
import { StyledLink } from '../../styles/link';
import Link from 'next/link';


const fetcher: Fetcher<ProgrammeWithIncludes, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const Programme: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: programme, error } = useSWR(`/api/programmes/${id}`, fetcher);
  if (error) return <div>An error occured.</div>;
  if (!programme) return <div>Loading ...</div>;

  return (
    <ContainerCenter>
      <ul>
        <>
          <li key={programme.id}>{programme.nomProgramme}</li>
          {programme.semaines.map((semaine) => (
            <ul key={semaine.id}>
              {semaine.jours.map((jour) => (
                <>
                  <li key={jour.id}>{DAYS_OF_WEEK[jour.jourDeSemaine - 1]}</li>
                  <li>
                    <ul>
                      {jour.seances.map((seance) => (
                        <>
                          <li key={seance.id}>
                            Séance n°{seance.numSeance}
                            <Link href={`/seances/${seance.id}?programmeId=${programme.id}`} passHref>
                              <StyledLink primary>
                                Commencer à cette séance
                              </StyledLink>
                            </Link>
                          </li>
                          <li>
                            <ul>
                              {seance.exercicesSeance.map((exerciceSeance) => (
                                <li key={exerciceSeance.id}>
                                  {exerciceSeance.exercice.nomExercice}
                                  &nbsp;temps de récup :{' '}
                                  {exerciceSeance.tempsRecup} secondes
                                  &nbsp;nombre de série :{' '}
                                  {exerciceSeance.nbSerie} séries &nbsp;nombre
                                  de répétition : {exerciceSeance.nbRepetition}{' '}
                                  répétitions
                                </li>
                              ))}
                            </ul>
                          </li>
                        </>
                      ))}
                    </ul>
                  </li>
                </>
              ))}
            </ul>
          ))}
        </>
      </ul>
    </ContainerCenter>
  );
};

export async function getServerSideProps({ request, response }) {
  return recupererProgrammeUseCase.execute(request.params.id)
}


export default Programme;
