import { useRoutes } from 'react-router-dom';
import { routes } from 'docuit:routes';

export const Content = () => {
  console.log(routes);
  
  const routeElement = useRoutes(routes);
  return routeElement;
};
