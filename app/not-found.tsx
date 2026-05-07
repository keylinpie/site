import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{
        fontSize: '4rem',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>404</h1>
      <h2 style={{ color: '#a0a0a0', marginBottom: '2rem' }}>Page Not Found</h2>
      <Link href="/" style={{
        padding: '0.8rem 2rem',
        borderRadius: '5px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 600
      }}>
        Go Home
      </Link>
    </div>
  );
}
