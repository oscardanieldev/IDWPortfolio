import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/superBaseClient';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (authError) {
        if (authError.message === 'Invalid login credentials') {
          throw new Error('Usuario o contraseña incorrectos');
        } else {
          throw new Error('Error al conectar con el servidor');
        }
      }
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Estilos optimizados
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#000',
      padding: '20px',
      boxSizing: 'border-box',
    },
    form: {
      width: '100%',
      maxWidth: '400px',
      padding: '40px',
      backgroundColor: '#111',
      border: '1px solid #00FFFF',
      borderRadius: '8px',
      boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)',
      margin: 0,
    },
    title: {
      color: '#00FFFF',
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '24px',
      fontWeight: 'bold',
      textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
    },
    inputContainer: {
      width: '100%',
      marginBottom: '20px',
      position: 'relative',
    },
    input: {
      width: '100%',
      padding: '12px 40px 12px 12px',
      backgroundColor: '#222',
      border: '1px solid #00FFFF',
      borderRadius: '4px',
      color: '#FFF',
      boxSizing: 'border-box',
      fontSize: '16px',
    },
    iconButton: {
      position: 'absolute',
      right: '12px',
      top: '12px',
      color: '#00FFFF',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '20px',
      padding: '0',
    },
    buttonContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
    },
    button: {
      width: '100%',
      maxWidth: '200px',
      padding: '12px',
      backgroundColor: '#00FFFF',
      color: '#000',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    buttonHover: {
      backgroundColor: '#00DDDD',
    },
    buttonDisabled: {
      backgroundColor: '#006666',
      cursor: 'not-allowed',
    },
    errorBox: {
      backgroundColor: 'rgba(255, 85, 85, 0.1)',
      border: '1px solid #FF5555',
      borderRadius: '4px',
      padding: '12px',
      marginBottom: '20px',
      color: '#FF5555',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>Iniciar Sesión</h2>

        {error && (
          <div style={styles.errorBox}>
            <strong>Error:</strong> {error}
          </div>
        )}

        <div style={styles.inputContainer}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
            style={styles.input}
          />
       
        </div>

        <div style={styles.buttonContainer}>
          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
            onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            {loading ? 'Verificando...' : 'Ingresar'}
          </button>
        </div>
      </form>
    </div>
  );
}