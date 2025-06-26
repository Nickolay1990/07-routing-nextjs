'use client';
import { useRouter } from 'next/navigation';
import Modal from '../../../../components/Modal/Modal';
import React from 'react';
import { Note } from '@/types/note';
import css from './NotePreview.module.css';

type NotePreviewClientProps = {
	note: Note;
};

const NotePreviewClient = ({ note }: NotePreviewClientProps) => {
	const router = useRouter();
	const closeModal = () => {
		router.back();
	};

	return (
		<Modal onClose={closeModal}>
			<div className={css.container}>
				<div className={css.item}>
					<div className={css.header}>
						<h2>{note.title}</h2>
						<button className={css.backBtn} onClick={closeModal}>
							Back
						</button>
					</div>
					<p className={css.content}>{note.content}</p>
					<p className={css.tag}>{note.tag}</p>
					<p className={css.date}>
						{note.updatedAt ? `Updated at: ${note.updatedAt}` : `Created at: ${note.createdAt}`}
					</p>
				</div>
			</div>
		</Modal>
	);
};

export default NotePreviewClient;
