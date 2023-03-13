import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../Application/fndbas/hooks/useAuth';

function RequireAuth({ allowedRoles }) {
    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.username
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth