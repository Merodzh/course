import Button from "./button/Button";
import Modal from "./modal/Modal";
import server from './exsample.txt'
import { useState, useEffect } from "react";
import useInputValue from "./hooks/inputValue";

export default function EffectSection() {
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
 const input = useInputValue()
  function onClickModal(params){
    setModal(params);
    console.log(params);
    
  };

  const fetchOrder = async () => {
    setLoading(true);
    const response = await fetch(server);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      <section>
        <h3>Effect</h3>
        <Button onclick={() => onClickModal(true)}>Открыть инфу</Button>
        
          <Modal checkModal={modal}>
            <h3>something</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa, dolorem consectetur natus itaque doloremque totam excepturi nostrum quia quaerat, molestiae modi minus vitae illum deserunt tempore nulla, tenetur praesentium?
            </p>
            <Button onclick={() => setModal(false)}>close</Button>
          </Modal>
        
      </section>
      <input style={{margin: '0.7rem'}} type="text" value={input.value} onChange={input.onChange} className="control" />
      {loading ? <p>loading</p> : (
        <ul>
          {users
          .filter((user) => 
            (user.name.toLowerCase().includes(input.value.toLowerCase())))
          .map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}