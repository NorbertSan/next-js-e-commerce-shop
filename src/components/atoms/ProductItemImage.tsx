import Image from "next/image";

export const ProductItemImage = ({ src, alt }: { src: string; alt: string }) => {
	return <Image src={src} alt={alt} width={300} height={300} />;
};
