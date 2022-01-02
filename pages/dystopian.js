import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import db from '../utils/db';
import Dystopian from '../models/Dystopian';

export default function dystopian(props) {
  const { dystopian } = props;
  return (
    <div>
      <Layout>
       
        <div>
          <h3>Dystopian</h3>
          <Grid container spacing={2}>
            {dystopian.map((book) => (
              <Grid item md={2} xs={3} key={book.name}>
                <Card>
                  <NextLink href={`/dystopian/${book.slug}`} passHref>
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
  const dystopian = await Dystopian.find({}).lean();
  await db.disconnect();
  return {
    props: {
      dystopian: dystopian.map(db.convertDocToObj),
    },
  };
}
