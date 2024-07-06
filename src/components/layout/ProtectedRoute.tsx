import { ReactNode, useEffect } from "react";
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    let user: TUser | undefined;
    if (token) {
      user = verifyToken(token as string) as TUser;
    }

    if (role !== undefined && role !== (user?.role as string)) {
      dispatch(logout());
      navigate("/login");
    }
  }, [token, role, dispatch, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
