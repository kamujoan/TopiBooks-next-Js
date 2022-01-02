import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import db from '../utils/db';
import All from '../models/All';

export default function all(props) {
  const { all } = props;
  return (
    <div>
      <Layout>
        
        <div>
          <h3>Top in Romance</h3>
          <Grid container spacing={2}>
            {all.map((book) => (
              <Grid item md={1} xs={3} key={book.name}>
                <Card>
                  <NextLink href={`/all/${book.slug}`} passHref>
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
  const all = await All.find({}).lean();
  await db.disconnect();
  return {
    props: {
      all: all.map(db.convertDocToObj),
    },
  };
}
