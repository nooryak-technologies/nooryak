export default function BrandPlaceholder({ title }: { title: string }) {
  return (
    <section className="py-4 px-3 px-md-5 bg-white border-top border-bottom">
      <div className="container text-center">
        <span className="text-uppercase small text-muted" style={{ letterSpacing: '0.2em' }}>Nooryak</span>
        <h2 className="h4 mt-2 mb-0">{title}</h2>
      </div>
    </section>
  );
}