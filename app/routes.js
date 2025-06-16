import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.jsx'),
  route('/about', 'routes/about.jsx'),
  route('/contact', 'routes/contact.jsx'),
  route('/products/:pid', 'routes/product.jsx')
];
