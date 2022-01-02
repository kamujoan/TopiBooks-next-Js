import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core';

import Layout from '../components/Layout';
import NextLink from 'next/link';
import db from '../utils/db';
import Motivational from '../models/Motivational';

export default function motivational(props) {
  const { motivational } = props;
  return (
    <div>
      <Layout>
    
        <div>
          <h3>Top in Romance</h3>
          <Grid container spacing={2}>
            {motivational.map((book) => (
              <Grid item md={2} xs={3} key={book.name}>
                <Card>
                  <NextLink href={`/motivational/${book.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={book.photo}
                        title={book.name}
                      ></CardMedia>
                    </CardActionArea>
                  </NextLink>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const motivational = await Motivational.find({}).lean();
  await db.disconnect();
  return {
    props: {
      motivational: motivational.map(db.convertDocToObj),
    },
  };
}
