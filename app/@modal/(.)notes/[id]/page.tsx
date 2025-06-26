import NotePreviewClient from '@/app/@modal/(.)notes/[id]/NotePreview.client';
import { fetchNoteById } from '@/lib/api';
import { Note } from '@/types/note';

type NotePreviewModalProps = {
	params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: NotePreviewModalProps) => {
	const { id } = await params;
	const note: Note = await fetchNoteById(Number(id));

	return <NotePreviewClient note={note} />;
};
export default NotePreview;
