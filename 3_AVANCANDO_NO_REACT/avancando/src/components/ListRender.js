import {useState} from 'react'

const ListRender = () => {

    const [list] = useState (['Cheyenne', 'Pooh', 'Sandra', 'Mina', 'Rabito', 'Perola', 'Bruce']);

    const [users, setUsers] = useState ([
        {id: 1, name: 'Cheyenne', age: 23},
        {id: 2, name: 'Pooh', age: 17},
        {id: 3, name: 'Sandra', age: 52}
    ]);

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>

        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender