import { Navigate, Outlet } from 'react-router-dom';

export default function RutaProtegidaAdmin() {
  console.log('🔐 RutaProtegidaAdmin ejecutándose...');
  
  const token = localStorage.getItem('token');
  console.log('Token encontrado:', !!token);

  if (!token) {
    console.log('❌ No hay token, redirigiendo a login');
    return <Navigate to="/login" replace />;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log('✅ Token decodificado:', payload);
    console.log('Rol del usuario:', payload.rol);
    
    if (payload.exp) {
      const now = Date.now() / 1000;
      if (now >= payload.exp) {
        console.log('❌ Token expirado, limpiando y redirigiendo');
        localStorage.removeItem('token');
        return <Navigate to="/login" replace />;
      }
    }

    if (payload.rol !== 'admin') {
      console.log('❌ Usuario no es admin, rol actual:', payload.rol);
      return <Navigate to="/" replace />;
    }
    
    console.log('✅ Usuario admin válido, permitiendo acceso');
    return <Outlet />;
  } catch (error) {
    console.log('❌ Error al decodificar token:', error);
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }
}