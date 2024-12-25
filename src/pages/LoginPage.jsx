import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
const LoginPage = () => {
  //butona tıklanınca google ile oturum aç
  const handleClick = () => {
    //google ile oturum aç
    signInWithPopup(auth, provider).catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="login">
        <h1>Chat Odası</h1>
        <p>Devam Etmek için Giriş Yapın</p>
        <button onClick={handleClick}>
          <img src="/google.png" alt="" width={30} />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
