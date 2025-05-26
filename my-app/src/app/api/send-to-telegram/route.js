import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();

  // Текстовое сообщение
  const name = formData.get("name") || "";
  const phone = formData.get("phone") || "";
  const mail = formData.get("mail") || "";
  const message = formData.get("message") || "";
  const direction = formData.get("direction") || "";

  const text = `
Новая заявка:
Имя: ${name}
Телефон: ${phone}
Почта: ${mail}
Направление: ${direction}
Сообщение: ${message}
`.trim();

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Отправка текста
  const sendMessageRes = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    },
  );

  // Обработка изображений
  const files = formData.getAll("images"); // получаем список файлов

  for (const file of files) {
    if (file instanceof File) {
      const form = new FormData();
      form.append("chat_id", chatId);
      form.append("photo", file);

      await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
        method: "POST",
        body: form,
      });
    }
  }

  return NextResponse.json({ success: true });
}
