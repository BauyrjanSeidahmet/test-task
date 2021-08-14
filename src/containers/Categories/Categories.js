import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Grid, Typography } from '@material-ui/core';
import { fetchCategories } from "../../store/actions/productsUser";


const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    dispatch(fetchCategories());
}, [dispatch]);

console.log('categories', categories);

  return (
    <Grid>
      <Typography variant='h5'>
        Categories page
      </Typography>
    </Grid>
  );
};

export default Categories;