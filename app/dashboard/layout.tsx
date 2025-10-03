

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h3>this is inner layout</h3>
        {children}
    </>
        

  );
}
