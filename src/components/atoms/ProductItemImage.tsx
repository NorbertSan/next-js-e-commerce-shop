import Image from "next/image";

export const ProductItemImage = ({ src, alt }: { src: string; alt: string }) => {
	return <Image className="max-h-[200px]" src={src} alt={alt} width={100} height={100} />;
};
