import Image from 'next/image';

export default function DetailsThumb() {
  return (
    <div className="tp-product-details-thumb" style={{ minWidth: 260 }}>
      <Image
        src="/assets/images/common/Logo-blue.png"
        alt="Product preview"
        width={320}
        height={320}
        style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
      />
    </div>
  );
}