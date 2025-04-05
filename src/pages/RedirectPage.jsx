// RedirectPage.jsx
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const linkMap = {
  '1': 'https://goli.com/?discount_code=pricings',
  // thêm các link khác nếu cần
};

const botUserAgents = [
  'googlebot',
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'sogou',
  'exabot',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
];

function isBot() {
  const ua = navigator.userAgent.toLowerCase();
  return botUserAgents.some(bot => ua.includes(bot));
}

export default function RedirectPage() {
  const { id } = useParams();

  useEffect(() => {
    const targetUrl = linkMap[id];
    if (!targetUrl) {
      alert('Link không tồn tại');
      return;
    }

    if (!isBot()) {
      window.location.href = targetUrl;
    } else {
      // Nếu là bot, không làm gì hoặc hiển thị thông báo
      console.warn('Bot detected. No redirect performed.');
    }
  }, [id]);

  return (
    <div className="text-center mt-10">
      <h2>Đang kiểm tra liên kết...</h2>
      <p>Nếu bạn không được chuyển hướng, vui lòng nhấn vào nút bên dưới:</p>
      <a href={linkMap[id]} className="text-blue-500 underline">Truy cập thủ công</a>
    </div>
  );
}
