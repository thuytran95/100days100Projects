import React,{ useEffect,useRef,useState } from 'react';
import './photoList.css';
import Search from './Search';

const URL = 'https://jsonplaceholder.typicode.com/photos';

type PhotoProps = {
	albumId: number,
	id: number,
	title: string,
	url: string,
	thumbnailUrl: string
};

const PhotoList = () => {
	const [list,setList] = useState<PhotoProps[]>([]);
	const inputValue = useRef() as React.MutableRefObject<HTMLInputElement>

	useEffect(() => {
		const fetchPhoto = async () => {
			try {
				const response = await fetch(URL);
				const allData = await response.json()
				const data = allData.splice(0,10);
				setList(data)

			} catch (err) {
				console.log(err)
			}
		};
		fetchPhoto();
	},[]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value)
	}

	return (
		<div>
			<Search ref={inputValue} onChange={handleChange} placeholder='Search something' style={{ marginBottom: '20px' }} />
			<div className='photo__list'>

				{
					list.map(item => <div className='card' key={item.id} >
						<div className='card__image'>
							<a href={item.url}><img src={item.thumbnailUrl} alt={`album-${item.id}`} /></a>
						</div>
						<h2 className='card__title'>
							<a href={item.url}>{item.title}</a>
						</h2>
					</div>)
				}
			</div>
		</div>
	)
}

export default PhotoList