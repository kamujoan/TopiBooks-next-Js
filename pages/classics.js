import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core';

import Layout from '../components/Layout';
import NextLink from 'next/link';
import db from '../utils/db';
import Classics from '../models/Classics';

export default function classics(props) {
  const { classics } = props;
  return (
    <div>
      <Layout>
      
        <div>
          <h3>Top in Romance</h3>
          <Grid container spacing={2}>
            {classics.map((book) => (
              <Grid item md={2} xs={3} key={book.name}>
                <Card>
                  <NextLink href={`/classics/${book.slug}`} passHref>
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
  const classics = await Classics.find({}).lean();
  await db.disconnect();
  return {
    props: {
      classics: classics.map(db.convertDocToObj),
    },
  };
}
