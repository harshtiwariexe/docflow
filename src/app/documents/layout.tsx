interface DocumentPageLayoutProps {
  children: React.ReactNode;
}

export default function DocumentPageLayout({
  children,
}: DocumentPageLayoutProps) {
  return (
    <div>
      <p className="bg-amber-600 text-indigo-200">Layout</p>
      {children}
    </div>
  );
}
