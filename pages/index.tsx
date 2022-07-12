import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import useSWR, { Fetcher } from 'swr';

import styles from '../styles/Home.module.css';
import { Container, MainContainer } from '../styles/container';
import { Card, CardBody, CardFooter, CardHeader } from '../styles/card';
import { StyledLink } from '../styles/link';
import { Programme } from "../shared/models";

const fetcher: Fetcher<Programme[], string> = (...args) =>
  fetch(...args).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/programmes', fetcher);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;
  return (
    <MainContainer>
      <Head>
        <title>Gestion de séance</title>
        <meta name="description" content="Gestion de séance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Programme de musculation</h1>

        <Container>
          {data.map((programme) => (
            <Card key={programme.id}>
              <CardHeader>{programme.nomProgramme}</CardHeader>
              <CardBody>
                Stats sur la séance
              </CardBody>
              <CardFooter>
                <Link href={`/programmes/${programme.id}`} passHref>
                  <StyledLink primary>
                    Accéder à ce programme
                  </StyledLink>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </Container>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </MainContainer>
  );
};

export default Home;
