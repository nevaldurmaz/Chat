import LoginPage from "./pages/LoginPage";
import { useState, useEffect } from "react";
import RoomPage from "./pages/RoomPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/index";
import Chatpage from "./pages/ChatPage";
const App = () => {
  // kullanıcının yetkisi var mı state'i
  const [isAuth, setIsAuth] = useState(false);
  //hangi odaya girildi state'i
  const [room, setRoom] = useState(null, true);

  //sayfa yenilendiğinde kullanıcı otrum bilgisini al
  useEffect(() => {
    //kullanıcının oturum durumu her değiştiğinde  güncel bilgileri alıp getirir.
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  //yetkisi yoksa :login page i ekrana bas
  if (!isAuth) return <LoginPage />;
  // yetkisi varsa:oda seçme sayfasını ekrana bas
  return (
    <div className="container">
      {room ? (
        <Chatpage room={room} setRoom={setRoom} />
      ) : (
        <RoomPage setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
