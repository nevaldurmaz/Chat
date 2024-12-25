import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";

const Main = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const lastMessage = useRef();
  //veritabanından bu odada gönderilen mesajları alalım

  useEffect(() => {
    //abone olunacak koleksiyonun referansını al
    const messagesCol = collection(db, "messages");
    //sorgu ayarlarını yap
    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );
    // koleksiyondaki anlık güncelemelere abone ol
    const unsub = onSnapshot(q, (data) => {
      //mesajların geçici olarak tutulacağı dizi
      const temp = [];
      //docs dizisindeki her bir dökümanın datasınıa erişip geçici diziye aktardık.
      data.docs.forEach((doc) => temp.push(doc.data()));
      // state'i güncelle
      setMessages(temp);
    });
    //kullanıcı bu sayfadan ayrılınca koleksiyonu izlemeyi durdur.
    return () => unsub();
  }, []);
  //ilk odaya girildiğinde ve her mesaj atıldığında en aşağı kaydır
  useEffect(() => {
    lastMessage.current.scrollIntoView();
  }, [messages]);
  return (
    <main>
      {messages.length < 1 ? (
        <div className="warn">
          <p>Sohbete ilk mesajı gönderin</p>
        </div>
      ) : (
        messages.map((i) => <Message key={i.id} data={i} />)
      )}
      <div ref={lastMessage} />
    </main>
  );
};

export default Main;
