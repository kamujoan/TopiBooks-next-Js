import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import db from '../utils/db';
import Book from '../models/Book';
import Shelf from '../models/Shelf';
import useStyles from '../utils/styles';

export default function Home(props) {
  const { book } = props;
  const { shelf } = props;
  const classes = useStyles();
  return (
    <div>
      <Layout>
        <div>
          <span className={classes.title}>Top in Romance</span>
          <span className={classes.subtitle}>View all</span>
          <Grid container spacing={1}>
            {book.map((book) => (
              <Grid item md={1} xs={3} key={book.name}>
                <Card>
                  <NextLink href={`/books/${book.slug}`} passHref>
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
        <hr className={classes.hr}/>
        <br/>
        <div>
          <span className={classes.title}>Top shelf</span>
          <span className={classes.subtitle}>View all</span>
          <Grid container spacing={1}>
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
  const book = await Book.find({}).lean();
  const shelf = await Shelf.find({}).lean();
  await db.disconnect();
  return {
    props: {
      book: book.map(db.convertDocToObj),
      shelf: shelf.map(db.convertDocToObj),
    },
  };
}
