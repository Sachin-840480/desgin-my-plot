import { SignIn } from '@clerk/nextjs';

export default function AuthSignInPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg)',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(196,135,63, 0.08)',
          filter: 'blur(80px)',
          top: '-80px',
          right: '-80px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(126,168,139, 0.07)',
          filter: 'blur(70px)',
          bottom: '-60px',
          left: '-60px',
          pointerEvents: 'none',
        }}
      />

      {/* Clerk SignIn widget */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <SignIn
          appearance={{
            variables: {
              colorPrimary: '#C4873F',
              colorBackground: '#1C1915',
              colorText: '#F0EAE0',
              colorTextSecondary: '#9A8D80',
              colorInputBackground: '#252118',
              colorInputText: '#F0EAE0',
              borderRadius: '12px',
              fontFamily: 'Inter, system-ui, sans-serif',
            },
            elements: {
              card: {
                border: '1px solid #3A3229',
                boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
              },
            },
          }}
        />
      </div>
    </div>
  );
}
