import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  TUser,
  logout,
  selectCurrentToken,
} from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const navigate = useNavigate();
  const token = useAppSelector(selectCurrentToken);

  let user: TUser | undefined;

  if (token) {
    user = verifyToken(token as string) as TUser;
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== (user?.role as string)) {
    dispatch(logout());
    return navigate("/login");
  }
  if (!token) {
    return navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
