import React from 'react';


type ListProps <T> = {
  items: T[],
  onClick: (value: T) => void
}

// if items of object has id : T extends {id: number}

const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <div className="h2">List</div>
      {
        items.map((item,index) => <div key={index} onClick={() => onClick(item)}>
          {item}
        </div>)
      }
    </div>
  )
}

export default List