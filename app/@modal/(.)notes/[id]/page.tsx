import NotePreview from '@/components/NotePreview/NotePreview';
import { fetchNoteById } from '@/lib/api';
import { Note } from '@/types/note';

type NotePreviewModalProps = {
	params: Promise<{ id: string }>;
};

const NotePreviewModal = async ({ params }: NotePreviewModalProps) => {
	const { id } = await params;
	const note: Note = await fetchNoteById(Number(id));

	return <NotePreview note={note} />;
};
export default NotePreviewModal;
