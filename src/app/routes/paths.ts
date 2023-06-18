import { authRoutes } from '../modules/user/auth/route';
import { userRoutes } from '../modules/user/route';
import { cowRoutes } from '../modules/cow/route';

const apiRoutes = [
  {
    path: '/cows',
    route: cowRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
];

export default apiRoutes;
