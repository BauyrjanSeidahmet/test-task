import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { fetchCategories } from '../../store/actions/productsActions';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className='Categories'>
      <h3>Категории</h3>
      <div className='CategoriesList'>
        {categories?.map((cat) => {
          return <CategoryItem key={cat.uuid} id={cat.uuid} image={cat.picture} name={cat.name} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
