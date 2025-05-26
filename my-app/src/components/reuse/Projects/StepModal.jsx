"use client";
import { useState, useEffect, useRef } from "react";

export default function StepModal({ isOpen, onClose, initialDirection }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    direction: initialDirection || "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setStatus(null);
      setFormData((prev) => ({
        ...prev,
        direction: initialDirection || "",
        name: "",
        email: "",
        phone: "",
        message: "",
      }));
      setFormErrors({});
      setSelectedFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (initialDirection) {
      setFormData((prev) => ({ ...prev, direction: initialDirection }));
    }
  }, [initialDirection]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const validateStep = () => {
    const errors = {};
    if (step === 2 && !formData.name.trim()) errors.name = true;
    if (step === 3 && (!formData.email.trim() || !isValidEmail(formData.email)))
      errors.email = true;
    if (step === 4 && !formData.phone.trim()) errors.phone = true;
    if (step === 5 && !formData.message.trim()) errors.message = true;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Обработчик выбора файлов
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      // Добавляем текстовые поля
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      // Добавляем файлы
      selectedFiles.forEach((file) => {
        formDataToSend.append("images", file);
      });

      const response = await fetch("/api/send-to-telegram", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
        }, 2000);

        // Очистка формы и файлов
        setFormData((prev) => ({
          ...prev,
          name: "",
          email: "",
          phone: "",
          message: "",
          direction: initialDirection || "",
        }));
        setSelectedFiles([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setStep(1);
        setFormErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-[400px] relative">
            <button
              onClick={onClose}
              className="absolute px-2 top-0 right-1 text-[40px] text-gray hover:text-black cursor-pointer"
            >
              ×
            </button>

            {step === 1 && (
              <div>
                <p className="text-black font-bold mb-4">
                  Вы выбрали направление:
                </p>
                <p className="text-dark-grey">{formData.direction}</p>
                <button className="btn-orange w-full mt-4" onClick={nextStep}>
                  Далее
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className=" text-black font-bold mb-4">Введите ваше имя</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field w-full mb-1 border-[1px] rounded-[5px] p-2 ${
                    formErrors.name ? "border-red" : "border-dark-grey"
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mb-3">Поле обязательно</p>
                )}
                <div className="flex justify-between mt-4">
                  <button className="btn-grey" onClick={prevStep}>
                    Назад
                  </button>
                  <button className="btn-orange" onClick={nextStep}>
                    Далее
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="text-black font-bold mb-4">Введите ваш E-mail</p>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field w-full mb-1 border-[1px] rounded-[5px] p-2 ${
                    formErrors.email ? "border-red" : "border-dark-grey"
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mb-3">
                    Введите корректный e-mail
                  </p>
                )}
                <div className="flex justify-between mt-4">
                  <button className="btn-grey" onClick={prevStep}>
                    Назад
                  </button>
                  <button className="btn-orange" onClick={nextStep}>
                    Далее
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="text-black font-bold mb-4">Введите ваш телефон</p>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-field w-full mb-1 border-[1px] rounded-[5px] p-2 ${
                    formErrors.phone ? "border-red" : "border-dark-grey"
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mb-3">Поле обязательно</p>
                )}
                <div className="flex justify-between mt-4">
                  <button className="btn-grey" onClick={prevStep}>
                    Назад
                  </button>
                  <button className="btn-orange" onClick={nextStep}>
                    Далее
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <form onSubmit={handleSubmit}>
                <p className="text-black font-bold mb-4">Введите сообщение</p>
                <textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  className={`resize-none input-field w-full mb-1 border-[1px] rounded-[5px] p-2 min-h-[150px] ${
                    formErrors.message ? "border-red" : "border-dark-grey"
                  }`}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mb-3">Поле обязательно</p>
                )}

                {/* Файловый инпут */}
                <label className="block mb-2 mt-4 cursor-pointer text-blue-600 hover:underline">
                  Прикрепить изображения
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                  />
                </label>

                {/* Список выбранных файлов */}
                {selectedFiles.length > 0 && (
                  <ul className="mb-3 text-sm text-dark-grey list-disc pl-5 max-h-24 overflow-auto">
                    {selectedFiles.map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                )}

                <div className="flex justify-between mt-4">
                  <button type="button" className="btn-grey" onClick={prevStep}>
                    Назад
                  </button>
                  <button
                    type="submit"
                    className="btn-orange"
                    disabled={loading}
                  >
                    {loading ? "Отправка..." : "Отправить"}
                  </button>
                </div>
              </form>
            )}

            {status === "success" && (
              <p className="text-green-500 mt-4">Заявка успешно отправлена!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-4">
                Ошибка отправки. Попробуйте снова.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
