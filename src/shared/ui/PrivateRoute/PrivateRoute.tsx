import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/app/store';
import { selectToken } from '@/modules/Auth/redux/authSelectors';

interface Props {
  children: ReactNode;
  to: string;
}

const PrivateRoute: FC<Props> = ({ children, to = '/' }) => {
  const token = useAppSelector(selectToken);

  if (!token) return <Navigate to={to} replace />;

  return children;
};

export default PrivateRoute;
