import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import db from '../utils/db';
import Shelf from '../models/Shelf';

export default function shelf(props) {
  const { shelf } = props;
  return (
    <div>
      <Layout>
       
        <div>
          <h3>Top in Romance</h3>
          <Grid container spacing={2}>
            {shelf.map((book) => (
              <Grid item md={2} xs={3} key={book.name}>
                <Card>
                  <NextLink href={`/shelf/${book.slug}`} passHref>
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
  const shelf = await Shelf.find({}).lean();
  await db.disconnect();
  return {
    props: {
      shelf: shelf.map(db.convertDocToObj),
    },
  };
}
