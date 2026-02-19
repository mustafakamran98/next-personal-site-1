import Modal from "@/components/Modal";
import { catNames } from "@/utils/Maps";

export default async function PhotoModal({
	params,
  }: {
	params: Promise<{ photo: string }>;
  }) {
	const { photo } = await params;
	const source = `/cats/${photo}.jpeg`;
	const alt = `Picture of ${catNames[photo]} the cat`;
  
	return (
	  <Modal>
		<img
			src={source}
			alt={alt}
		/>
	  </Modal>
	);
  }