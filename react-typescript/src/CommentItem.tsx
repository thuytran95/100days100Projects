import React, { useState } from 'react';
type CommentChildProps = {
	item: Comment;
	isChildren?: boolean;
};

type Comment = {
	id: number | string;
	comment: string | null | undefined;
	replyComment?: Comment[] | null;
};

const CommentItem: React.FC<CommentChildProps> = ({ item, isChildren }) => {
	const [editComment, setEditComment] = useState<Comment | null>(null);

	const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.target;
		const newComment = { ...editComment, comment: value } as Comment;
		setEditComment(newComment);
	};

	const onEdit = (comment: Comment) => {
		setEditComment(comment);
	};

	return (
		<div className={`mt-4 ${isChildren && 'p-3 bg-warning'}`}>
			{editComment && editComment.id === item.id ? (
				<textarea
					value={(editComment && editComment.comment) || ''}
					onChange={handleChangeComment}
				/>
			) : (
				<p>{item.comment}</p>
			)}
			<div className="d-flex gap-2">
				<button
					className="btn btn-primary"
					onClick={() => onEdit(item)}
				>
					Edit
				</button>
				<button className="btn btn-success">Save</button>
				<button
					className="btn btn-danger"
					onClick={() => setEditComment(null)}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default CommentItem;
