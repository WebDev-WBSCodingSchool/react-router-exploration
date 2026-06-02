import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'), //
	route('/contact', 'routes/contact.tsx') // '/contact'
] satisfies RouteConfig;

// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
