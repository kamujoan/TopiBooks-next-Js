import React from 'react';
import Layout from '../../components/Layout';
import {
  Card,
  Grid,
  List,
  ListItem,
  Typography,
  Button,
} from '@material-ui/core';
import useStyles from '../../utils/styles';
import Image from 'next/image';
import Kids from '../../models/Kids';
import db from '../../utils/db';
import { Store } from '../../utils/Store';
import { useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function BookScreen(props) {
  const router = useRouter();
  const { dispatch } = useContext(Store);
  const { book } = props;
  const classes = useStyles();
  if (!book) {
    return <div>Book not Found</div>;
  }
  const addToCartHandler = async () => {
    const { data } = await axios.get(`/api/books/${book._id}`);
    if (data.inStock <= 0) {
      window.alert('Out of Stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...book, quantity: 1 } });
    router.push('/cart');
  };
  return (
    <Layout title={book.name}>
      <Grid className={classes.section} container spacing={1}>
        <Grid item md={3} xs={3}>
          <Image
            src={book.photo}
            alt={book.name}
            width={100}
            height={150}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={9}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {book.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component="h2" variant="h2">
                {book.author}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.desc}>{book.desc}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>DOWNLOAD:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{book.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={12}>
                    <a href={book.pdf}>
                      <Button fullWidth variant="contained" color="primary">
                        pdf
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                <Grid container>
                  <Grid item xs={12}>
                    <a href={book.epub}>
                      <Button fullWidth variant="contained" color="primary">
                        epub
                      </Button>
                    </a>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const book = await Kids.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      book: db.convertDocToObj(book),
    },
  };
}
