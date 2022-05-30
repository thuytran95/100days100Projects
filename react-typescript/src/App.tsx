import { useRef, useState } from 'react';
import CommentItem from './CommentItem';
import Text from './components/polymorphic/Text';
import PhotoList from './practice-exercise/component/PhotoList'

function App() {
	const reviewList = new Array(2).fill(1).map((_, index) => ({
		id: index + 1,
		comment: `Comment ${index + 1}`,
		...(index % 2 === 0 && {
			replyComment: [{ id: (index % 2) + 3, comment: `Comment chidlren` }]
		})
	}));

	return (
		<div className="App d-flex flex-column justify-content-center align-items-center">
			{reviewList.map(item => (
				<div key={item.id}>
					<CommentItem item={item} />
					{item.replyComment && item.replyComment.length
						? item.replyComment.map(review => (
								<CommentItem
									key={item.id}
									item={review}
									isChildren
								/>
						  ))
						: ''}
				</div>
			))}

			{/* <Text as="h1">Photo list</Text> */}
			{/* <PhotoList /> */}
		</div>
	);
}

export default App;
