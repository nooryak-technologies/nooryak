export default function BenefitPlaceholder({ title }: { title: string }) {
  return (
    <section className="py-4 px-3 px-md-5 bg-light">
      <div className="container">
        <div className="p-4 p-md-5 rounded-3 bg-white shadow-sm">
          <p className="text-uppercase small text-muted mb-2">Nooryak</p>
          <h3 className="h4 mb-0">{title}</h3>
        </div>
      </div>
    </section>
  );
}