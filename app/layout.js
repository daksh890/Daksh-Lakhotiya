import './globals.css';

export const metadata = {
  title: 'Daksh Lakhotiya | Portfolio',
  description: 'Developer, Leader, Innovator',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
