# Firebase Chat Uygulaması
React ve Firebase kullanarak Gerçek Zamanlı Chat Uygulaması ile kullanıcılar anlık sohbet edebilir ve mesajlaşma geçmişini görüntüleyebilirler. Firebase’in sunduğu Firestore ve Authentication servisleriyle güçlü ve ölçeklenebilir bir sohbet uygulaması oluşturdum.

# Özellikler:
	•	Gerçek Zamanlı Mesajlaşma: Firebase Firestore veritabanı ile anında mesaj gönderme ve alma.
	•	Kullanıcı Kayıt ve Girişi: Firebase Authentication kullanarak email ve şifre ile kullanıcı doğrulama.
	•	Kullanıcı Profili: Her kullanıcı, kişisel bilgilerini (profil resmi, kullanıcı adı) düzenleyebilir.
	•	Mesaj Geçmişi: Tüm mesajlar anında kaydedilir ve kullanıcılar eski mesajları görebilir.
	•	Responsive Tasarım: Mobil ve masaüstü cihazlarla uyumlu kullanıcı arayüzü.

# Kullanılan Teknolojiler:
React | Firebase Firestore | Firebase Authentication | CSS | UUID

# Projeyi Çalıştırmak için Adımlar:
	1.	Projeyi Klonlayın:
git clone https://github.com/nevaldurmaz/Chat.git
cd [proje-dizini]
	2.	Bağımlılıkları Yükleyin:
npm install
	3.	Firebase Yapılandırmasını Yapın:
	•	Firebase projesi oluşturun ve Firebase Authentication ve Firestore’u aktif hale getirin.
	•	.env dosyasına Firebase yapılandırma bilgilerinizi ekleyin:

REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
4.	Uygulamayı Çalıştırın:
npm start
5.	Uygulamayı İnceleyin:
Tarayıcınızda http://localhost:3000 adresini ziyaret edin.
![chat](https://github.com/user-attachments/assets/2e389ed1-0115-47d8-8206-842cac5ef712)
